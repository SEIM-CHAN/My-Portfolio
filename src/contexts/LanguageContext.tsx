'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Language = 'ja' | 'en'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  ja: {
    // Hero Section
    'hero.greeting': 'Hello, I\'m Iram Sekelli',
    'hero.title': 'フルスタックソフトウェアエンジニア',
  'hero.description': 'フルスタックエンジニアとして、Next.js、React、TypeScript、Python、Djangoを使用したモダンなWebアプリケーション開発に取り組んでいます。',
    
    // Navigation
    'nav.timeline': 'Career Timeline',
    'nav.projects': 'View Projects',
    'nav.contact': 'Contact Me',
    
    // Strengths Section
    'strengths.title': 'My Strengths',
    'strengths.communication.title': '周りを巻き込むコミュニケーション能力',
    'strengths.communication.description': '異なる背景を持つメンバーとも効果的にコミュニケーションを取り、チーム全体のモチベーションを向上させながら目標達成に導きます。',
    'strengths.action.title': 'チャンスを掴む行動力',
    'strengths.action.description': '新しい技術や機会に対して積極的にチャレンジし、迅速な判断と実行力で成果を出すことができます。',
    'strengths.creativity.title': '創造性と問題解決力',
    'strengths.creativity.description': '既存の枠にとらわれない柔軟な発想で、複雑な課題に対して革新的な解決策を提案できます。',
    
    // タイムラインセクション
    'timeline.title': 'キャリアタイムライン',
    'timeline.description': 'これまでのキャリアの歩みを時系列でご紹介します。各マイルストーンが新たな挑戦と成長を表しています。',
    'timeline.scroll.hint': '左右にスクロールして全ての経歴を確認できます',
    
    // タイムラインデータ
    'timeline.1.title': 'システム開発コース入学',
    'timeline.1.company': '大原簿記法律専門学校柏校',
    'timeline.1.description': 'システム開発の基礎から応用まで幅広く学習。プログラミングスキルの土台を築き、実践的な開発経験を積みました。',
    
    'timeline.2.title': '企業・CTO就任',
    'timeline.2.description': 'CTOとして技術戦略の策定から実装まで幅広く担当。チーム構築、技術選定、システム設計を主導し、事業成長に貢献しました。',
    
    'timeline.3.title': 'CTO退任',
    'timeline.3.description': '約3年間のCTO経験を通じて、技術リーダーシップとチームマネジメントスキルを大幅に向上させました。',
    
    'timeline.4.title': 'エンジニア就職',
    'timeline.4.company': '株式会社ヴォイエンシー',
    'timeline.4.description': '新たな環境で技術力を活かし、チームの一員として開発業務に従事。これまでの経験を活かしながら更なるスキル向上を目指しています。',
    
    'timeline.5.title': '業務委託契約開始',
    'timeline.5.company': '株式会社Fledge',
    'timeline.5.description': '並行して業務委託として開発プロジェクトに参画。複数の環境で多様な技術に触れ、幅広い開発経験を積んでいます。',
    
    // プロジェクトセクション
    'projects.title': 'プロジェクト',
    'projects.description': '現在、いくつかのエキサイティングなプロジェクトを開発中です。近日中に素晴らしい作品をお披露目予定です！',
    'projects.coming_soon': 'Coming Soon...',
    
    // プロジェクトカード
    'projects.card1.title': '大会エントリー&オウンドメディアサイト',
    'projects.card1.description': 'Python, Django を使用した大会エントリーシステムとオウンドメディアサイトの構築',
    
    'projects.card2.title': 'PC Parts Grapher',
    'projects.card2.description': 'PCパーツの価格推移をグラフ化するアプリケーション',
    
    'projects.card3.title': 'Coming Soon...',
    'projects.card3.description': 'Coming Soon...',
    
    // コンタクトセクション
    'contact.title': 'お気軽にご連絡ください',
    'contact.description': '新しいプロジェクトや機会について、ぜひお話しましょう！',
    'contact.ready': '一緒に働きませんか？',
    'contact.ready.description': 'プロジェクトのアイデアやご質問がございましたら、お気軽にご連絡ください。',
    'contact.send': 'メッセージを送る',
    
    // フッター
    'footer.copyright': '© 2025 Iram Sekelli. All rights reserved.',
    'footer.built': 'Next.js、React、TypeScript、Tailwind CSSで構築',
    'footer.made': '❤️ を込めて日本で制作',
    'footer.updated': '最終更新: 2025年10月',
    'footer.back': 'トップに戻る',
    
    // ソーシャルリンク
    'social.github': 'コードとプロジェクトをご覧ください',
    'social.linkedin': 'プロフェッショナルなネットワーク',
    'social.facebook': '個人的なつながりとアップデート',
    'social.email': '直接お問い合わせ'
  },
  en: {
    // Hero Section
    'hero.greeting': 'Hello, I\'m Iram Sekelli',
    'hero.title': 'Full-Stack Software Engineer',
  'hero.description': 'As a full-stack engineer, I work on modern web application development using Next.js, React, TypeScript, Python, and Django.',
    
    // Navigation
    'nav.timeline': 'Career Timeline',
    'nav.projects': 'View Projects',
    'nav.contact': 'Contact Me',
    
    // Strengths Section
    'strengths.title': 'My Strengths',
    'strengths.communication.title': 'Engaging Communication Skills',
    'strengths.communication.description': 'I effectively communicate with team members from diverse backgrounds, boosting team morale and guiding them toward goal achievement.',
    'strengths.action.title': 'Action-Oriented Mindset',
    'strengths.action.description': 'I actively challenge new technologies and opportunities, delivering results through quick decision-making and execution.',
    'strengths.creativity.title': 'Creativity & Problem-Solving',
    'strengths.creativity.description': 'With flexible thinking beyond conventional frameworks, I propose innovative solutions to complex challenges.',
    
    // Timeline Section
    'timeline.title': 'Career Timeline',
    'timeline.description': 'Here\'s a chronological overview of my career journey. Each milestone represents new challenges and growth.',
    'timeline.scroll.hint': 'Scroll horizontally to view all career milestones',
    
    // Timeline Data
    'timeline.1.title': 'Enrolled in System Development Course',
    'timeline.1.company': 'Ohara Business & Legal College Kashiwa Campus',
    'timeline.1.description': 'Studied comprehensive system development from fundamentals to advanced applications. Built a solid foundation in programming skills and gained practical development experience.',
    
    'timeline.2.title': 'Appointed as CTO',
    'timeline.2.description': 'Served as CTO handling everything from technology strategy formulation to implementation. Led team building, technology selection, and system design, contributing to business growth.',
    
    'timeline.3.title': 'Concluded CTO Role',
    'timeline.3.description': 'Through approximately 3 years of CTO experience, significantly improved technical leadership and team management skills.',
    
    'timeline.4.title': 'Joined as Engineer',
    'timeline.4.company': 'Voyency Co., Ltd.',
    'timeline.4.description': 'Leveraging technical skills in a new environment as a team member in development operations. Aiming for further skill improvement while utilizing past experience.',
    
    'timeline.5.title': 'Started Contract Work',
    'timeline.5.company': 'Fledge Co., Ltd.',
    'timeline.5.description': 'Simultaneously joined as a contractor for development projects. Gaining diverse development experience by working with various technologies in multiple environments.',
    
    // プロジェクトセクション
    'projects.title': 'Projects',
    'projects.description': 'I\'m currently developing several exciting projects. I plan to showcase amazing works soon!',
    'projects.coming_soon': 'Coming Soon...',
    
    // プロジェクトカード
    'projects.card1.title': 'Tournament Entry & Owned Media Site',
    'projects.card1.description': 'Development of tournament entry system and owned media site using Python and Django',
    
    'projects.card2.title': 'PC Parts Grapher',
    'projects.card2.description': 'Application for graphing PC parts price trends',
    
    'projects.card3.title': 'Coming Soon...',
    'projects.card3.description': 'Coming Soon...',
    
    // Contact Section
    'contact.title': 'Let\'s Connect',
    'contact.description': 'Let\'s discuss new projects and opportunities!',
    'contact.ready': 'Ready to collaborate?',
    'contact.ready.description': 'If you have project ideas or questions, feel free to reach out.',
    'contact.send': 'Send Message',
    
    // Footer
    'footer.copyright': '© 2025 Iram Sekelli. All rights reserved.',
    'footer.built': 'Built with Next.js, React, TypeScript & Tailwind CSS',
    'footer.made': 'Made with ❤️ in Japan',
    'footer.updated': 'Last updated: October 2025',
    'footer.back': 'Back to Top',
    
    // Social Links
    'social.github': 'View my code and projects',
    'social.linkedin': 'Professional networking',
    'social.facebook': 'Personal connections and updates',
    'social.email': 'Direct contact'
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('ja')

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && (savedLanguage === 'ja' || savedLanguage === 'en')) {
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === 'ja' ? 'en' : 'ja'
    setLanguage(newLanguage)
    localStorage.setItem('language', newLanguage)
  }

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}