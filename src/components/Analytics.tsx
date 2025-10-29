'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    if (!gaId) return

    if (typeof window === 'undefined') return

    // Send page_view on route change
    try {
      ;(window as any).gtag?.('event', 'page_view', { page_path: pathname })
    } catch (e) {
      // no-op
    }
  }, [pathname])

  return null
}
