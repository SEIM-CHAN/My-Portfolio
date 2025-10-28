'use client'

import { scrollToSection } from '@/utils/scroll'
import { useLanguage } from '@/contexts/LanguageContext'
import ProjectsSection from '@/components/ProjectsSection'
import ContactSection from '@/components/ContactSection'
import TimelineSection from '@/components/TimelineSection'

export default function Home() {
  const { t } = useLanguage()
  
  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-white via-cream-light to-blue-accent/10 dark:from-navy dark:via-primary-dark dark:to-primary animate-fade-in">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center animate-slide-up">
            {/* プロフィール写真セクション */}
            <div className="mb-8">
              <div className="relative inline-block">
                <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                  {/* プレースホルダー画像 - 実際の写真に置き換えてください */}
                  <div className="w-full h-full bg-gradient-to-br from-primary to-blue-accent flex items-center justify-center">
                    <svg className="w-16 h-16 md:w-20 md:h-20 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  {/* 実際の画像を使用する場合は以下のコメントアウトを解除し、上のdivを削除してください */}
                  {/* <img 
                    src="/path-to-your-photo.jpg" 
                    alt="Iram Sekelli" 
                    className="w-full h-full object-cover"
                  /> */}
                </div>
                {/* 装飾的なリング */}
                <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-2 border-primary/20 dark:border-blue-accent/20 animate-pulse"></div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-navy dark:text-cream mb-6">
              {t('hero.greeting')}
            </h1>
            <p className="text-xl text-primary dark:text-blue-accent mb-8">
              {t('hero.title')}
            </p>
            <div className="space-y-4">
              <p className="text-primary/80 dark:text-cream/90 max-w-2xl mx-auto leading-relaxed">
                {t('hero.description')}
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <button 
                  onClick={() => scrollToSection('timeline')}
                  className="bg-primary hover:bg-primary-dark text-white dark:text-cream font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  {t('nav.timeline')}
                </button>
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="border-2 border-primary dark:border-blue-accent hover:bg-primary/10 dark:hover:bg-blue-accent/10 text-primary dark:text-blue-accent font-medium py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-blue-accent/50"
                >
                  {t('nav.projects')}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-primary dark:border-blue-accent hover:bg-primary/10 dark:hover:bg-blue-accent/10 text-primary dark:text-blue-accent font-medium py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-blue-accent/50"
                >
                  {t('nav.contact')}
                </button>
              </div>
            </div>
          </div>
          
          {/* 強みセクション */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-navy dark:text-cream mb-12 text-center">{t('strengths.title')}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/80 dark:bg-card-bg backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-accent rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-cream">
                    {t('strengths.communication.title')}
                  </h3>
                </div>
                <p className="text-primary/80 dark:text-cream/90">
                  {t('strengths.communication.description')}
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-card-bg backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-accent rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-cream">
                    {t('strengths.action.title')}
                  </h3>
                </div>
                <p className="text-primary/80 dark:text-cream/90">
                  {t('strengths.action.description')}
                </p>
              </div>
              
              <div className="bg-white/80 dark:bg-card-bg backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-accent rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-navy dark:text-cream">
                    {t('strengths.creativity.title')}
                  </h3>
                </div>
                <p className="text-primary/80 dark:text-cream/90">
                  {t('strengths.creativity.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Timeline Section */}
      <TimelineSection />

      {/* Projects Section */}
      <ProjectsSection />

      {/* Contact Section */}
      <ContactSection />
    </>
  )
}