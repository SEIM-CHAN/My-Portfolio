const { chromium } = require('playwright');

(async () => {
  const target = 'https://iramsekelli.dev/';
  console.log('Opening', target);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  const page = await context.newPage();

  const collectRequests = [];

  page.on('request', (req) => {
    const url = req.url();
    if (url.includes('/g/collect') || url.includes('/collect')) {
      collectRequests.push({ url, method: req.method(), headers: req.headers(), timestamp: new Date().toISOString() });
    }
  });

  page.on('response', async (res) => {
    // no-op for now
  });

  // Capture console messages from the page
  page.on('console', (msg) => {
    console.log('PAGE LOG>', msg.type(), msg.text());
  });

  try {
    const response = await page.goto(target, { waitUntil: 'domcontentloaded', timeout: 30000 });
    console.log('HTTP status:', response && response.status());

    // wait a bit for analytics scripts to run
    await page.waitForTimeout(3000);

    // Check for gtag/dataLayer
    const hasData = await page.evaluate(() => {
      return {
        hasDataLayer: typeof window.dataLayer !== 'undefined',
        hasGtag: typeof window.gtag !== 'undefined',
        dataLayerLength: window.dataLayer ? window.dataLayer.length : 0
      };
    });

    console.log('dataLayer/gtag check:', hasData);

    // Wait a bit more to allow network requests
    await page.waitForTimeout(2000);

    if (collectRequests.length === 0) {
      console.log('No g/collect or collect requests were observed in this session.');
    } else {
      console.log('Observed collect requests:', collectRequests.length);
      collectRequests.forEach((r, i) => {
        console.log(`#${i+1} ${r.timestamp} ${r.method} ${r.url}`);
      });
    }

    await browser.close();
    process.exit(0);
  } catch (err) {
    console.error('ERROR during page check:', err);
    try { await browser.close(); } catch(e){}
    process.exit(2);
  }
})();
