import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const ProcessSection = () => {
  return (
    <section id="process" className="py-20 bg-[#1e1e1e] opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-background text-center mb-4 tracking-tight">
          КАК МЫ РАБОТАЕМ
        </h2>
        <p className="text-secondary text-center mb-16 text-lg">Простой и прозрачный процесс от заявки до результата</p>
        
        <div className="max-w-4xl mx-auto grid gap-6">
          {[
            {
              step: '01',
              title: 'Описание задачи',
              description: 'Вы отправляете краткое описание задачи — чтобы понять суть'
            },
            {
              step: '02',
              title: 'Быстрая оценка',
              description: 'Мы быстро оцениваем примерную стоимость и сроки'
            },
            {
              step: '03',
              title: 'Созвон',
              description: 'Созваниваемся, обсуждаем детали и ваши бизнес-процессы'
            },
            {
              step: '04',
              title: 'Техническое задание',
              description: 'Готовим точное ТЗ с финальной стоимостью и сроками'
            },
            {
              step: '05',
              title: 'Предоплата и старт',
              description: 'Получаем предоплату и запускаем процесс разработки'
            },
            {
              step: '06',
              title: 'Готовая таблица',
              description: 'Отправляем готовую таблицу с видеоинструкцией по внедрению'
            },
            {
              step: '07',
              title: 'Тестовый период',
              description: 'В течение 1–4 недель поддерживаем вас, вносим правки'
            }
          ].map((item, index) => (
            <Card key={index} className="bg-[#2d2d2d] border-muted hover:border-primary transition-all duration-300 animate-slide-in-left" style={{ animationDelay: `${index * 100}ms` }}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <span className="text-5xl font-bold text-primary/20">{item.step}</span>
                  <div>
                    <CardTitle className="text-background text-xl mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-secondary">{item.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <Card className="bg-[#2d2d2d] border-primary">
            <CardHeader>
              <CardTitle className="text-background text-center">Всегда на связи</CardTitle>
              <CardDescription className="text-secondary text-center">
                По окончании теста сотрудничество можно завершить — но мы всегда на связи, если понадобится помощь или доработка
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};
