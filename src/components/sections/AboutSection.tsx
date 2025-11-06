export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background opacity-0">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-[300px_1fr] gap-12 items-center">
            <div className="relative animate-fade-in">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/files/952ac81f-783e-4a71-9b00-472e0686c9a2.jpg" 
                  alt="Егорова Анастасия - бизнес-аналитик" 
                  className="w-full h-[400px] object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-background font-bold text-lg">Егорова Анастасия</p>
                  <p className="text-background/90 text-sm">Бизнес-аналитик</p>
                </div>
              </div>
            </div>

            <div className="space-y-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight leading-tight">
                ОТЧЁТЫ, КОТОРЫЕ НЕ БЕСЯТ
              </h2>
              <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
                <p className="font-medium text-xl text-foreground">
                  Информативно. Стильно. Понятно с первого взгляда.
                </p>
                <p>
                  Пока фрилансеры штампуют унылые таблицы, мы делаем инструменты, с которыми приятно работать.
                </p>
                <p className="text-primary font-semibold">
                  Данные для принятия решений, которые считываются за секунды, а не часы — результат, за который нас выбирают и возвращаются снова.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};