import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="TrendingUp" className="text-primary" size={28} />
            <span className="text-xl font-bold text-primary">учёт легко!</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#process" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Как мы работаем</a>
            <a href="#templates" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Шаблоны</a>
            <a href="#cases" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Кейсы</a>
            <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Почему Мы</a>
            <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button className="hidden md:block bg-primary hover:bg-primary/90 text-primary-foreground">Заявка</Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <a href="#process" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-foreground hover:text-primary transition-colors">Как мы работаем</a>
            <a href="#templates" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-foreground hover:text-primary transition-colors">Шаблоны</a>
            <a href="#cases" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-foreground hover:text-primary transition-colors">Кейсы</a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-foreground hover:text-primary transition-colors">Почему Мы</a>
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-medium text-foreground hover:text-primary transition-colors">Контакты</a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4 px-8 py-6 text-lg">Заявка</Button>
          </nav>
        </div>
      )}
    </>
  );
};
