export default function ColorShowcase() {
  const colors = [
    { name: 'Navy', hex: '#021526', class: 'bg-navy' },
    { name: 'Primary Blue', hex: '#03346E', class: 'bg-primary' },
    { name: 'Light Blue', hex: '#6EACDA', class: 'bg-blue-accent' },
    { name: 'Cream', hex: '#E2E2B6', class: 'bg-cream' },
  ];

  return (
    <div className="p-8 bg-cream/50 dark:bg-navy/50 rounded-xl">
      <h3 className="text-2xl font-bold text-navy dark:text-cream mb-6 text-center">
        Color Palette Showcase
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {colors.map((color) => (
          <div key={color.name} className="text-center group">
            <div 
              className={`${color.class} w-20 h-20 rounded-lg shadow-lg mx-auto mb-3 transition-transform group-hover:scale-110 ${
                color.name === 'Cream' ? 'border-2 border-primary/20' : ''
              }`}
            />
            <h4 className="font-semibold text-navy dark:text-cream text-sm">
              {color.name}
            </h4>
            <p className="text-xs text-primary/70 dark:text-cream/70 font-mono">
              {color.hex}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}