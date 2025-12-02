'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface TimelineItem {
  id: number;
  date: string;
  title: string;
  company?: string;
  description: string;
  type: 'work' | 'education' | 'project' | 'achievement';
  technologies?: string[];
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'work':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2h8z" />
        </svg>
      );
    case 'education':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      );
    case 'achievement':
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      );
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'work':
      return 'bg-primary text-white';
    case 'education':
      return 'bg-blue-accent text-white';
    case 'achievement':
      return 'bg-yellow-500 text-white';
    default:
      return 'bg-gray-500 text-white';
  }
};

const getNodeColor = (type: string) => {
  switch (type) {
    case 'work':
      return 'bg-primary border-primary/30';
    case 'education':
      return 'bg-blue-accent border-blue-accent/30';
    case 'achievement':
      return 'bg-yellow-500 border-yellow-500/30';
    default:
      return 'bg-gray-500 border-gray-500/30';
  }
};

export default function TimelineSection() {
  const { t } = useLanguage();

  const timelineData: TimelineItem[] = [
    {
      id: 1,
      date: '2020-04',
      title: t('timeline.1.title'),
      company: t('timeline.1.company'),
      description: t('timeline.1.description'),
      type: 'education',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'Java', 'SQL', ]
    },
    {
      id: 2,
      date: '2021-07',
      title: t('timeline.2.title'),
      description: t('timeline.2.description'),
      type: 'work',
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'Python', 'SQL']
    },
    {
      id: 3,
      date: '2024-08',
      title: t('timeline.3.title'),
      description: t('timeline.3.description'),
      type: 'work',
      technologies: ['Leadership', 'Team Management', 'Architecture Design']
    },
    {
      id: 4,
      date: '2025-09',
      title: t('timeline.4.title'),
      company: t('timeline.4.company'),
      description: t('timeline.4.description'),
      type: 'work',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Docker', 'Python']
    },
    {
      id: 5,
      date: '2025-10',
      title: t('timeline.5.title'),
      company: t('timeline.5.company'),
      description: t('timeline.5.description'),
      type: 'work',
      technologies: ['Web Development', 'Frontend', 'Backend']
    }
  ];
  
  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-cream/20 to-blue-accent/10 dark:from-navy/50 dark:to-primary/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-navy dark:text-cream mb-4 text-center">
          {t('timeline.title')}
        </h2>
        <p className="text-primary/80 dark:text-cream/80 text-center mb-16 max-w-2xl mx-auto">
          {t('timeline.description')}
        </p>
        
        {/* 横スクロール可能なタイムライン */}
        <div className="relative overflow-x-auto pb-6">
          <div className="flex items-center min-w-max px-4">
            {/* 開始ノード */}
            <div className="flex flex-col items-center min-w-[200px]">
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2 whitespace-nowrap font-medium">
                Start
              </div>
              <div className="w-4 h-4 bg-gray-400 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
              <div className="w-1 h-12 bg-gray-300 dark:bg-gray-600 mt-2"></div>
            </div>
            
            {timelineData.map((item, index) => (
              <React.Fragment key={item.id}>
                {/* 接続線 */}
                <div className="h-0.5 bg-gradient-to-r from-primary/50 to-blue-accent/50 dark:from-primary/70 dark:to-blue-accent/70 flex-1 min-w-[80px]"></div>
                
                {/* タイムラインノード */}
                <div className="flex flex-col items-center min-w-[280px] group">
                  {/* 日付 */}
                  <div className="text-lg font-bold text-primary dark:text-blue-accent mb-2 whitespace-nowrap">
                    {item.date}
                  </div>
                  
                  {/* メインノード */}
                  <div className={`w-6 h-6 rounded-full border-4 border-white dark:border-gray-800 shadow-lg flex items-center justify-center ${getNodeColor(item.type)} transition-all duration-300 group-hover:scale-125 group-hover:shadow-xl relative z-10`}>
                    <div className="text-white scale-75">
                      {getTypeIcon(item.type)}
                    </div>
                  </div>
                  
                  {/* 垂直線 */}
                  <div className="w-1 h-8 bg-primary/30 dark:bg-blue-accent/30"></div>
                  
                  {/* 情報テキスト */}
                  <div className="text-center max-w-[260px] space-y-2">
                    {/* タイトル */}
                    <h3 className="text-lg font-bold text-navy dark:text-cream leading-tight">
                      {item.title}
                    </h3>
                    
                    {/* 会社・組織 */}
                    {item.company && (
                      <p className="text-primary dark:text-blue-accent text-sm font-medium">
                        @ {item.company}
                      </p>
                    )}
                    
                    {/* 説明文 */}
                    <p className="text-primary/70 dark:text-cream/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* 技術スタック */}
                    {item.technologies && (
                      <div className="flex flex-wrap gap-1 justify-center mt-3">
                        {item.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="px-2 py-1 bg-primary/10 dark:bg-blue-accent/20 text-primary dark:text-blue-accent text-xs rounded-md font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* タイプバッジ */}
                    <div className={`inline-flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium mt-2 ${getTypeColor(item.type)}`}>
                      <span className="scale-75">
                        {getTypeIcon(item.type)}
                      </span>
                      <span>
                        {item.type === 'work' ? 'Work' : 
                         item.type === 'education' ? 'Education' : 
                         item.type === 'achievement' ? 'Achievement' : 'Other'}
                      </span>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            ))}
            
            {/* 終了ノード（現在） */}
            <div className="h-0.5 bg-gradient-to-r from-primary/50 to-blue-accent/50 dark:from-primary/70 dark:to-blue-accent/70 flex-1 min-w-[80px]"></div>
            <div className="flex flex-col items-center min-w-[200px]">
              <div className="text-lg font-bold text-primary dark:text-blue-accent mb-2 whitespace-nowrap">
                Now
              </div>
              <div className="w-6 h-6 bg-gradient-to-br from-primary to-blue-accent rounded-full border-4 border-white dark:border-gray-800 shadow-lg animate-pulse"></div>
              <div className="w-1 h-8 bg-primary/30 dark:bg-blue-accent/30"></div>
              <div className="text-sm text-primary dark:text-blue-accent mt-2 whitespace-nowrap font-medium">
                進行中...
              </div>
            </div>
          </div>
        </div>
        
        {/* スクロールヒント */}
        <div className="text-center mt-12">
          <p className="text-sm text-primary/60 dark:text-cream/60 flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l4-4m0 0l4 4m-4-4v12" />
            </svg>
            <span>{t('timeline.scroll.hint')}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </p>
        </div>
      </div>
    </section>
  );
}