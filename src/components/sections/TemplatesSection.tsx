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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              title: 'Учет финансов',
              description: 'Максимально автоматизированная система учета доходов и расходов с автоформированием отчетов',
              price: '15 000 ₽',
              features: [
                'Подходит для микро и малого бизнеса',
                'Автоматическое формирование отчетов',
                'Разовая оплата, без подписки',
                'Доступна в мобильной версии',
                'Видеоинструкция в комплекте'
              ]
            },
            {
              title: 'Складской учет',
              description: 'Полноценная система учета товаров с поступлением, реализацией, списанием и перемещением между складами',
              price: '20 000 ₽',
              features: [
                'Неограниченное число складов и товаров',
                'Классификация по категориям',
                'Автоподсчет остатков в штуках и деньгах',
                'Отчеты по закупкам, продажам и прибыли',
                'Разовая оплата, без подписки'
              ]
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