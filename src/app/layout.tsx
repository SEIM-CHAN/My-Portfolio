import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/contexts/ThemeContext'
import { LanguageProvider } from '@/contexts/LanguageContext'
import ThemeToggle from '@/components/ThemeToggle'
import LanguageToggle from '@/components/LanguageToggle'

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
      <body className="bg-background text-foreground antialiased">
        <ThemeProvider>
          <LanguageProvider>
            <ThemeToggle />
            <LanguageToggle />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}