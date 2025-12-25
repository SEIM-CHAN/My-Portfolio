'use client'

import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/SEIM-CHAN",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      description: t('social.github')
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/IramSekelli",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      description: t('social.linkedin')
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/17ZM7MaohK/?mibextid=wwXIfr",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      description: t('social.facebook')
    },
    {
      name: "Email",
      url: "mailto:iramsekelli@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      description: t('social.email')
    }
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          {/* Header with decorative elements */}
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-6xl font-bold text-navy dark:text-cream relative z-10">
                {t('contact.title')}
              </h2>
              <div className="absolute -top-2 -left-4 w-20 h-20 bg-blue-accent/10 dark:bg-blue-accent/5 rounded-full blur-xl"></div>
              <div className="absolute -bottom-2 -right-4 w-16 h-16 bg-primary/10 dark:bg-primary/5 rounded-full blur-xl"></div>
            </div>
            <p className="text-lg text-primary/80 dark:text-cream/80 max-w-2xl mx-auto leading-relaxed">
              {t('contact.description')}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-blue-accent mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Social Links - Enhanced Design */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target={link.name === 'Email' ? undefined : '_blank'}
                  rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                  className="group relative p-6 md:p-8 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center overflow-hidden"
                >
                  {/* Background gradient animation */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-blue-50/50 dark:from-gray-700/30 dark:to-gray-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Icon with enhanced styling */}
                  <div className="relative z-10 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-primary to-blue-accent rounded-2xl flex items-center justify-center text-white mx-auto mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <div className="scale-110 md:scale-125">
                      {link.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h4 className="text-lg md:text-xl font-bold text-navy dark:text-cream group-hover:text-primary dark:group-hover:text-blue-accent transition-colors duration-300 mb-2 md:mb-3">
                      {link.name}
                    </h4>
                    <p className="hidden lg:block text-xs md:text-sm text-primary/70 dark:text-cream/70 leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                  
                  {/* Hover arrow */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-primary dark:text-blue-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <div className="inline-block p-8 bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-gray-700 shadow-xl">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-navy dark:text-cream mb-3">
                  {t('contact.ready')}
                </h3>
                <p className="text-primary/80 dark:text-cream/80 mb-6 max-w-md mx-auto">
                  {t('contact.ready.description')}
                </p>
                <a
                  href="mailto:iramsekelli@gmail.com?subject=Portfolio Contact&body=Hello Iram,%0D%0A%0D%0AI would like to discuss..."
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-blue-accent hover:from-primary-dark hover:to-primary text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  {t('contact.send')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Copyright Section */}
      <div className="border-t border-primary/20 dark:border-cream/20 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-primary/80 dark:text-cream/80 text-sm">
                {t('footer.copyright')}
              </p>
              <p className="text-primary/60 dark:text-cream/60 text-xs mt-1">
                {t('footer.built')}
              </p>
            </div>

            {/* Additional Info */}
            <div className="flex items-center space-x-6 text-sm">
              <span className="text-primary/70 dark:text-cream/70">
                {t('footer.made')}
              </span>
              <div className="flex items-center space-x-2 text-primary/60 dark:text-cream/60">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{t('footer.updated')}</span>
              </div>
            </div>
          </div>

          {/* Back to Top */}
          <div className="text-center mt-8">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center px-4 py-2 bg-primary/10 dark:bg-blue-accent/10 hover:bg-primary/20 dark:hover:bg-blue-accent/20 text-primary dark:text-blue-accent rounded-lg transition-all duration-300"
            >
              <svg className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              {t('footer.back')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}