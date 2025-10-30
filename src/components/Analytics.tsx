'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    if (!gaId) return

    if (typeof window === 'undefined') return

    // Wait for gtag to be available and send page_view
    const sendPageView = () => {
      try {
        if ((window as any).gtag) {
          ;(window as any).gtag('event', 'page_view', { 
            page_path: pathname,
            page_location: window.location.href,
            page_title: document.title
          })
        } else {
          // Retry after a short delay if gtag is not ready
          setTimeout(sendPageView, 100)
        }
      } catch (e) {
        // no-op
      }
    }

    // Initial send with small delay to ensure gtag is loaded
    setTimeout(sendPageView, 100)
  }, [pathname])

  return null
}
