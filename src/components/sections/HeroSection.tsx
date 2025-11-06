import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-background opacity-0" style={{ animation: 'fadeInUp 0.6s ease-out forwards' }}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            АВТОМАТИЗАЦИЯ УЧЕТА<br />
            <span className="text-primary">ЛЕГКО!</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto">
            Разрабатываем системы учета в Google-таблицах и автоматизируем отчетность для вашего бизнеса
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
            Получить консультацию
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
        </div>
      </div>
    </section>
  );
};
