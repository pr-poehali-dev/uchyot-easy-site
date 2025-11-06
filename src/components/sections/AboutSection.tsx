export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a] opacity-0">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="relative inline-block mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-2xl shadow-primary/20">
                <img 
                  src="https://cdn.poehali.dev/files/952ac81f-783e-4a71-9b00-472e0686c9a2.jpg" 
                  alt="Егорова Анастасия - бизнес-аналитик" 
                  className="w-full h-full object-cover object-[center_20%]"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-background text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                Егорова Анастасия
              </div>
            </div>
          </div>

          <div className="text-center space-y-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#FFD700] to-primary tracking-tight leading-tight">
              ОТЧЁТЫ, КОТОРЫЕ НЕ БЕСЯТ
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 hover:bg-primary/20 transition-all duration-300 animate-scale-in">
                <p className="text-2xl font-black text-primary mb-2">ИНФОРМАТИВНО</p>
                <p className="text-background/80 text-sm">Все ключевое с первого взгляда</p>
              </div>
              <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 hover:bg-primary/20 transition-all duration-300 animate-scale-in" style={{ animationDelay: '100ms' }}>
                <p className="text-2xl font-black text-primary mb-2">СТИЛЬНО</p>
                <p className="text-background/80 text-sm">Никакого "вырви глаз"</p>
              </div>
              <div className="bg-primary/10 border-2 border-primary rounded-xl p-6 hover:bg-primary/20 transition-all duration-300 animate-scale-in" style={{ animationDelay: '200ms' }}>
                <p className="text-2xl font-black text-primary mb-2">ПОНЯТНО</p>
                <p className="text-background/80 text-sm">За секунды, а не часы</p>
              </div>
            </div>

            <div className="bg-[#1a1a1a] border-l-4 border-primary rounded-lg p-8 mt-8 text-left">
              <p className="text-lg text-background/90 leading-relaxed mb-4">
                Пока фрилансеры штампуют <span className="line-through text-muted">унылые таблицы</span>, мы делаем инструменты, с которыми <span className="text-primary font-bold">приятно работать</span>.
              </p>
              <p className="text-xl text-primary font-bold">
                → Данные для принятия решений, которые считываются за секунды, а не часы — результат, за который нас выбирают и возвращаются снова.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
