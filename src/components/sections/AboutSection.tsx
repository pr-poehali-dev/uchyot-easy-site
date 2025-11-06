import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4 tracking-tight">
          ПОЧЕМУ МЫ
        </h2>
        <p className="text-foreground/70 text-center mb-16 text-lg">Преимущества работы с нами</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: 'Zap',
              title: 'Быстро',
              description: 'Готовые шаблоны позволяют запустить проект за 1-2 недели'
            },
            {
              icon: 'Sparkles',
              title: 'Гибко',
              description: 'Адаптируем систему под ваши уникальные бизнес-процессы'
            },
            {
              icon: 'Shield',
              title: 'Надежно',
              description: 'Работаем по договору с гарантией исправления ошибок'
            },
            {
              icon: 'HeartHandshake',
              title: 'С поддержкой',
              description: 'Тестовый период и консультации даже после завершения'
            }
          ].map((item, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                  <Icon name={item.icon as any} className="text-primary" size={32} />
                </div>
                <CardTitle className="text-foreground text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-foreground/70">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
