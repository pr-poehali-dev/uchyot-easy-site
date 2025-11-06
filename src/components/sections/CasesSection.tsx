import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export const CasesSection = () => {
  return (
    <section id="cases" className="py-20 bg-[#1e1e1e] opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-background text-center mb-4 tracking-tight">
          НАШИ КЕЙСЫ
        </h2>
        <p className="text-secondary text-center mb-16 text-lg">Реальные проекты и достигнутые результаты</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              company: 'Интернет-магазин',
              task: 'Система учета заказов, закупок и складских остатков',
              solution: 'Удобное внесение заказов двумя менеджерами, контроль закупок и расчетов с поставщиками с учетом конвертации валют',
              result: 'Контроль остатков на 7 складах, ABC-анализ ассортимента для оптимизации',
              icon: 'ShoppingCart'
            },
            {
              company: 'Сеть кофеен',
              task: 'Управленка для 5 точек с контролем себестоимости',
              solution: 'P&L по каждой точке, контроль закупок и остатков',
              result: 'Снижение себестоимости на 15%, выявление убыточной точки',
              icon: 'Coffee'
            },
            {
              company: 'IT-агентство',
              task: 'CRM для управления клиентами и проектами',
              solution: '5 источников данных, автоматизация отчетов для клиентов',
              result: 'Ускорение формирования отчетов в 10 раз',
              icon: 'Code'
            },
            {
              company: 'Производственная компания',
              task: 'Учет сырья, производства и готовой продукции',
              solution: 'Комплексная система с калькуляцией себестоимости',
              result: 'Прозрачность производственного цикла, контроль маржинальности',
              icon: 'Factory'
            }
          ].map((caseItem, index) => (
            <Card key={index} className="bg-[#2d2d2d] border-muted hover:border-primary transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Icon name={caseItem.icon as any} className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-background mb-2">{caseItem.company}</CardTitle>
                    <CardDescription className="text-secondary text-sm">{caseItem.task}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-xs text-primary font-semibold mb-1">РЕШЕНИЕ</p>
                  <p className="text-sm text-secondary">{caseItem.solution}</p>
                </div>
                <div>
                  <p className="text-xs text-primary font-semibold mb-1">РЕЗУЛЬТАТ</p>
                  <p className="text-sm text-background font-medium">{caseItem.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};