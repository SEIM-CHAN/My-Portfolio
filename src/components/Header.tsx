interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <header className="bg-white/90 dark:bg-navy/90 backdrop-blur-sm shadow-sm border-b border-border">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold text-navy dark:text-cream">
          {title}
        </h1>
      </div>
    </header>
  );
}