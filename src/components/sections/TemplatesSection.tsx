import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export const TemplatesSection = () => {
  return (
    <section id="templates" className="py-20 bg-background opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4 tracking-tight">
          ГОТОВЫЕ ШАБЛОНЫ
        </h2>
        <p className="text-foreground/70 text-center mb-16 text-lg">Универсальные решения для управленческого учета</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: 'Управленка для бизнеса',
              description: 'Полноценная система управленческого учета с P&L, OPEX, дебиторкой и кредиторкой',
              price: '70 000 ₽',
              features: ['P&L отчет', 'Учет OPEX', 'Дебиторка/Кредиторка', 'Прогноз ДДС']
            },
            {
              title: 'CRM + Воронка продаж',
              description: 'Управление клиентами и контроль эффективности продаж',
              price: '50 000 ₽',
              features: ['База клиентов', 'Воронка продаж', 'Аналитика конверсии', 'История взаимодействий']
            },
            {
              title: 'Складской учет',
              description: 'Автоматизация учета товаров на складе с остатками и движением',
              price: '45 000 ₽',
              features: ['Приход/Расход', 'Остатки в реальном времени', 'Инвентаризация', 'ABC-анализ']
            }
          ].map((template, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
              <CardHeader>
                <CardTitle className="text-foreground">{template.title}</CardTitle>
                <CardDescription className="text-foreground/70">{template.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-primary">{template.price}</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {template.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Icon name="Check" className="text-primary mt-0.5 shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Заказать шаблон
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
