import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export const FAQSection = () => {
  return (
    <section className="py-20 bg-[#1e1e1e] opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-background text-center mb-4 tracking-tight">
          ЧАСТЫЕ ВОПРОСЫ
        </h2>
        <p className="text-secondary text-center mb-16 text-lg">Ответы на популярные вопросы о нашей работе</p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: 'Сколько времени занимает разработка?',
                answer: 'Готовые шаблоны адаптируются за 1-2 недели. Индивидуальные проекты — от 2 до 6 недель в зависимости от сложности.'
              },
              {
                question: 'Нужны ли специальные знания для работы с системой?',
                answer: 'Нет, мы создаем интуитивно понятные решения. Предоставляем видеоинструкции и консультируем в тестовый период.'
              },
              {
                question: 'Можно ли доработать систему после запуска?',
                answer: 'Да, вы всегда можете обратиться за доработкой или новым проектом. Мы открыты для долгосрочного сотрудничества.'
              },
              {
                question: 'Какие гарантии вы предоставляете?',
                answer: 'Работаем по договору с тестовым периодом 1-4 недели, в течение которого исправляем ошибки и вносим правки в рамках ТЗ.'
              },
              {
                question: 'Интегрируетесь ли с другими системами?',
                answer: 'Да, мы интегрируем Google-таблицы с 1С, CRM, складскими системами и другими источниками данных.'
              }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-[#2d2d2d] border-muted px-6 rounded-lg">
                <AccordionTrigger className="text-background hover:text-primary text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
