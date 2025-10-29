import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { LanguageProvider } from '@/contexts/LanguageContext'
import ThemeToggle from '@/components/ThemeToggle'
import LanguageToggle from '@/components/LanguageToggle'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  title: 'My Portfolio - Iram Sekelli',
  description: 'Personal portfolio website of Iram Sekelli',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);} 
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { send_page_view: false });
          `,
        }}
      />
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <ThemeToggle />
            <LanguageToggle />
            {/* Client-side analytics handles SPA pageviews */}
            <Analytics />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}