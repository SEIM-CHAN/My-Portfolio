interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  onClick?: () => void;
  className?: string;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  className = '' 
}: ButtonProps) {
  const baseClasses = "font-medium py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white dark:text-cream shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-primary/50",
    secondary: "border-2 border-primary dark:border-blue-accent hover:bg-primary/10 dark:hover:bg-blue-accent/10 text-primary dark:text-blue-accent focus:ring-primary/50 dark:focus:ring-blue-accent/50",
    accent: "bg-blue-accent hover:bg-blue-accent/80 text-white dark:text-navy shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-blue-accent/50"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}