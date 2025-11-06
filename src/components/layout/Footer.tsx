import Icon from '@/components/ui/icon';

export const Footer = () => {
  return (
    <footer className="bg-[#1e1e1e] py-12 border-t border-muted">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg className="text-primary" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="13" width="4" height="8" />
                <rect x="10" y="9" width="4" height="12" />
                <rect x="17" y="5" width="4" height="16" />
                <path d="M5 3l14 14" strokeLinecap="round" />
                <path d="M19 3l-3 3" strokeLinecap="round" />
              </svg>
              <span className="text-lg font-bold text-background uppercase">Учёт Легко!</span>
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