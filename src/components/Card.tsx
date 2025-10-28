interface CardProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  className?: string;
}

export default function Card({ title, description, children, className = '' }: CardProps) {
  return (
    <div className={`bg-white/80 dark:bg-card-bg backdrop-blur-sm p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${className}`}>
      <h3 className="text-xl font-bold text-navy dark:text-cream mb-3">
        {title}
      </h3>
      <p className="text-primary/80 dark:text-cream/90 mb-4">
        {description}
      </p>
      {children}
    </div>
  );
}