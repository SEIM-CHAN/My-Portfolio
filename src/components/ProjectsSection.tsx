'use client';

import { useLanguage } from '@/contexts/LanguageContext';

/**
 * ProjectsSection コンポーネント
 * 
 * プロジェクトカードの表示/非表示を制御できます
 * 
 * 使用方法:
 * 1. showProjectCards を true にするとプロジェクトカードが表示されます
 * 2. showProjectCards を false にするとカードが非表示になります
 * 3. upcomingProjects 配列でプロジェクト内容を編集できます
 */
export default function ProjectsSection() {
  const { t } = useLanguage();
  // プロジェクトカードの表示切り替え（将来的に使用するため保持）
  const showProjectCards = true; // true に変更するとカードが表示されます

  const upcomingProjects = [
    {
      title: t('projects.card1.title'),
      description: t('projects.card1.description'),
      tech: ["JavaScript", "Python","Django", "Bootstrap", "MySQL"],
      status: "Completed"
    },
    {
      title: t('projects.card2.title'),
      description: t('projects.card2.description'),
      tech: ["Next.js", "TypeScript", "React", "Python", "Django", "MySQL", "Docker"],
      status: "In Development"
    },
    {
      title: t('projects.card3.title'),
      description: t('projects.card3.description'),
      tech: ["Coming Soon..."],
      status: "Coming Soon..."
    }
  ]

  return (
    <section id="projects" className="py-12 bg-gradient-to-b from-white to-cream-light dark:from-navy dark:to-primary-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-cream mb-6">
            {t('projects.title')}
          </h2>
          <div className="inline-flex items-center px-6 py-3 bg-blue-accent/20 dark:bg-blue-accent/10 rounded-full border border-blue-accent/30">
            <div className="w-3 h-3 bg-blue-accent rounded-full animate-bounce-gentle mr-3"></div>
            <span className="text-primary dark:text-blue-accent font-semibold">
              {t('projects.coming_soon')}
            </span>
          </div>
          <p className="text-primary/80 dark:text-cream/80 max-w-2xl mx-auto mt-6 leading-relaxed">
            {t('projects.description')}
          </p>
        </div>

        {/* プロジェクトカード（条件付き表示） */}
        {showProjectCards && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white/80 dark:bg-card-bg backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
                    project.status === 'Completed' || project.status === 'Live' 
                      ? 'bg-green-100 text-green-800 border-green-300 dark:bg-green-900/30 dark:text-green-400 dark:border-green-600'
                      : project.status === 'In Development'
                      ? 'bg-blue-accent/20 text-blue-accent border-blue-accent/30'
                      : 'bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-600'
                  }`}>
                    {project.status}
                  </span>
                </div>

                {/* Project Icon */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-navy dark:text-cream mb-3">
                  {project.title}
                </h3>
                
                <p className="text-primary/80 dark:text-cream/80 mb-4 overflow-hidden text-ellipsis" style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical' as const
                }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-primary/10 dark:bg-blue-accent/20 text-primary dark:text-blue-accent rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-border rounded-full h-2 mb-3">
                  <div 
                    className={`h-2 rounded-full transition-all duration-1000 ease-out ${
                      project.status === 'Completed' || project.status === 'Live'
                        ? 'bg-gradient-to-r from-green-500 to-green-600'
                        : project.status === 'In Development'
                        ? 'bg-gradient-to-r from-primary to-blue-accent'
                        : 'bg-gradient-to-r from-yellow-500 to-yellow-600'
                    }`}
                    style={{ 
                      width: project.status === 'Completed' || project.status === 'Live'
                        ? '100%'
                        : project.status === 'In Development'
                        ? '60%'
                        : '25%'
                    }}
                  ></div>
                </div>
                
                <p className="text-sm text-primary/60 dark:text-cream/60">
                  {project.status === 'Completed' || project.status === 'Live'
                    ? '🎉 Project Completed & Live'
                    : project.status === 'In Development'
                    ? '🚀 In Development'
                    : '📋 Planning & Design Phase'
                  }
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}