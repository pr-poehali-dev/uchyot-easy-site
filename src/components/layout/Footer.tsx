import Icon from '@/components/ui/icon';

export const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] py-12 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Icon name="TrendingUp" className="text-primary" size={24} />
              <span className="text-lg font-bold text-background">учёт легко!</span>
            </div>
            <p className="text-secondary text-sm">
              Автоматизация учета и отчетности для вашего бизнеса
            </p>
          </div>
          
          <div>
            <h3 className="text-background font-semibold mb-4">Навигация</h3>
            <ul className="space-y-2">
              <li><a href="#process" className="text-secondary hover:text-primary transition-colors text-sm">Как мы работаем</a></li>
              <li><a href="#templates" className="text-secondary hover:text-primary transition-colors text-sm">Шаблоны</a></li>
              <li><a href="#cases" className="text-secondary hover:text-primary transition-colors text-sm">Кейсы</a></li>
              <li><a href="#about" className="text-secondary hover:text-primary transition-colors text-sm">Почему мы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-background font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2">
              <li className="text-secondary text-sm">info@uchetlegko.ru</li>
              <li className="text-secondary text-sm">+7 (999) 123-45-67</li>
              <li className="text-secondary text-sm">@uchetlegko</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-muted pt-8 text-center">
          <p className="text-secondary text-sm">
            © 2024 Учёт Легко. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};
