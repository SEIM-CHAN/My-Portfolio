'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-7 right-24 z-50 group px-3 py-2 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-primary/20 dark:border-cream/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:bg-primary/5 dark:hover:bg-blue-accent/5"
      aria-label="Toggle language"
    >
      <span className="text-sm font-bold text-primary dark:text-cream group-hover:text-blue-accent dark:group-hover:text-blue-accent transition-colors duration-300">
        {language === 'ja' ? 'EN' : 'JP'}
      </span>
    </button>
  )
}