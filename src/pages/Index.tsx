import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Плавная прокрутка при клике на якорные ссылки
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setIsMobileMenuOpen(false);
        }
      }
    };

    // Анимация появления блоков при скролле
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => observer.observe(section));

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
      observer.disconnect();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="TrendingUp" className="text-primary" size={28} />
            <span className="text-xl font-bold text-primary">учёт легко!</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#process" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Как мы работаем</a>
            <a href="#templates" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Шаблоны</a>
            <a href="#cases" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Кейсы</a>
            <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Почему Мы</a>
            <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button className="hidden md:block bg-primary hover:bg-primary/90 text-primary-foreground">Заявка</Button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <a href="#process" className="text-2xl font-medium text-foreground hover:text-primary transition-colors">Как мы работаем</a>
            <a href="#templates" className="text-2xl font-medium text-foreground hover:text-primary transition-colors">Шаблоны</a>
            <a href="#cases" className="text-2xl font-medium text-foreground hover:text-primary transition-colors">Кейсы</a>
            <a href="#about" className="text-2xl font-medium text-foreground hover:text-primary transition-colors">Почему Мы</a>
            <a href="#contact" className="text-2xl font-medium text-foreground hover:text-primary transition-colors">Контакты</a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4 px-8 py-6 text-lg">Заявка</Button>
          </nav>
        </div>
      )}

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

      <section id="templates" className="py-20 bg-background opacity-0">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4 tracking-tight">
            ГОТОВЫЕ ШАБЛОНЫ
          </h2>
          <p className="text-foreground/70 text-center mb-16 text-lg">Универсальные решения для управленческого учета</p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'TrendingUp',
                title: 'Финансовый учет',
                description: 'Полный контроль доходов, расходов и прибыли вашего бизнеса',
                price: '15 000 ₽'
              },
              {
                icon: 'Users',
                title: 'CRM-система',
                description: 'Управление клиентами и сделками в удобной таблице',
                price: '12 000 ₽'
              },
              {
                icon: 'Package',
                title: 'Складской учет',
                description: 'Контроль остатков, приход и расход товаров',
                price: '18 000 ₽'
              }
            ].map((template, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300 animate-scale-in border-border" style={{ animationDelay: `${index * 150}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={template.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl mb-2">{template.title}</CardTitle>
                  <CardDescription>{template.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">{template.price}</span>
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Купить
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="cases" className="py-20 bg-[#1e1e1e] opacity-0">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-background text-center mb-4 tracking-tight">
            НАШИ КЕЙСЫ
          </h2>
          <p className="text-secondary text-center mb-16 text-lg">Реализованные проекты автоматизации</p>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: 'Автоматизация учета для IT-компании',
                description: 'Разработали систему учета проектов, времени и финансов для команды из 50 человек',
                metrics: ['Экономия 15 часов в неделю', 'Снижение ошибок на 80%']
              },
              {
                title: 'CRM для онлайн-школы',
                description: 'Создали систему управления студентами, курсами и платежами с автоматической отчетностью',
                metrics: ['5000+ студентов в базе', 'Автоотчеты каждый день']
              },
              {
                title: 'Складской учет для ритейла',
                description: 'Внедрили учет товаров по 12 магазинам с автоматическим формированием заказов',
                metrics: ['12 точек продаж', '3000+ товарных позиций']
              },
              {
                title: 'Финансовый дашборд для фонда',
                description: 'Разработали систему консолидации финансов с визуализацией ключевых показателей',
                metrics: ['20+ источников данных', 'Обновление в реальном времени']
              }
            ].map((caseItem, index) => (
              <Card key={index} className="bg-[#2d2d2d] border-muted hover:border-primary transition-colors duration-300">
                <CardHeader>
                  <CardTitle className="text-background text-xl mb-3">{caseItem.title}</CardTitle>
                  <CardDescription className="text-secondary mb-4">{caseItem.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {caseItem.metrics.map((metric, i) => (
                      <span key={i} className="inline-flex items-center gap-1 text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                        <Icon name="Check" size={14} />
                        {metric}
                      </span>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-background opacity-0 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 items-center">
              <div className="md:col-span-2">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 tracking-tight">
                  ПОЧЕМУ МЫ
                </h2>
                <p className="text-lg text-foreground/70 mb-8">
                  Наша миссия: становимся проводниками изменений — от данных к результатам, от хаоса к порядку. Мы создаем решения, которые экономят ваше время и деньги.
                </p>
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Target" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Индивидуальный подход</h3>
                      <p className="text-foreground/70">Разрабатываем решения под ваши задачи, а не подгоняем бизнес под стандартные шаблоны</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Clock" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Быстрое внедрение</h3>
                      <p className="text-foreground/70">От идеи до запуска — всего несколько дней. Минимум бюрократии, максимум результата</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="Shield" className="text-primary" size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">Надежная поддержка</h3>
                      <p className="text-foreground/70">Всегда на связи после запуска. Помогаем, обучаем, развиваем ваши системы</p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                  {[
                    { number: '150+', label: 'Реализованных проектов' },
                    { number: '5 лет', label: 'На рынке автоматизации' },
                    { number: '98%', label: 'Довольных клиентов' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-foreground/70">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:col-span-1 flex justify-end">
                <div className="relative w-full max-w-sm">
                  <img 
                    src="https://cdn.poehali.dev/files/9b6a4782-8ae4-4cdb-901a-7b4cf7dab22e.jpg" 
                    alt="Основатель агентства Учет легко" 
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                  />
                  <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-sm rounded-lg p-3 border border-border">
                    <p className="font-semibold text-foreground text-sm mb-0.5">Анастасия Егорова</p>
                    <p className="text-xs text-foreground/70">Основатель «Учет&nbsp;легко»</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#1e1e1e]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-background text-center mb-4 tracking-tight">
              ОТЗЫВЫ
            </h2>
            <p className="text-secondary text-center mb-16 text-lg">Что говорят наши клиенты</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: 'Александр М.',
                  role: 'Директор IT-компании',
                  text: 'Отличная работа! Автоматизировали весь учет проектов. Теперь все данные в одном месте, отчеты формируются автоматически.'
                },
                {
                  name: 'Мария К.',
                  role: 'Владелица онлайн-школы',
                  text: 'Система CRM превзошла ожидания. Простая, понятная, все работает как часы. Команда всегда на связи и помогает.'
                },
                {
                  name: 'Дмитрий П.',
                  role: 'Руководитель сети магазинов',
                  text: 'Складской учет теперь не занимает часы работы. Все автоматизировано, ошибок стало в разы меньше. Рекомендую!'
                },
                {
                  name: 'Елена С.',
                  role: 'Финансовый директор',
                  text: 'Профессиональный подход на всех этапах. Система учета полностью закрыла наши потребности. Благодарим за качество!'
                }
              ].map((review, index) => (
                <Card key={index} className="bg-[#2d2d2d] border-muted">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                        {review.name[0]}
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-background text-lg mb-1">{review.name}</CardTitle>
                        <CardDescription className="text-secondary text-sm mb-3">{review.role}</CardDescription>
                        <p className="text-background/90">{review.text}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-4 tracking-tight">
              FAQ
            </h2>
            <p className="text-foreground/70 text-center mb-16 text-lg">Часто задаваемые вопросы</p>
            
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: 'Сколько времени занимает разработка?',
                  answer: 'Срок зависит от сложности проекта. Простые шаблоны — 3-5 дней, индивидуальные решения — от 1 до 4 недель.'
                },
                {
                  question: 'Нужны ли специальные знания для работы с системой?',
                  answer: 'Нет, все системы разрабатываются максимально просто. Мы предоставляем видеоинструкции и поддержку в период адаптации.'
                },
                {
                  question: 'Можно ли доработать систему в будущем?',
                  answer: 'Да, мы всегда готовы к сотрудничеству. Можем добавить новые функции или модифицировать существующие.'
                },
                {
                  question: 'Какие гарантии вы предоставляете?',
                  answer: 'Работаем официально по договору. Гарантируем исправление всех ошибок и корректную работу системы.'
                },
                {
                  question: 'Как происходит оплата?',
                  answer: 'Принимаем оплату любым удобным способом: на карту, по счету для ИП и ООО, через электронные платежные системы.'
                }
              ].map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6 bg-card">
                  <AccordionTrigger className="text-left text-foreground font-medium hover:text-primary">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-foreground/70">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-[#1e1e1e] opacity-0">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-background text-center mb-4 tracking-tight">
              СВЯЗАТЬСЯ С НАМИ
            </h2>
            <p className="text-secondary text-center mb-8 text-lg">Оставьте заявку и мы свяжемся с вами в течение часа</p>
            
            <div className="flex justify-center mb-8">
              <a 
                href="https://t.me/nastya_egorova" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0088cc] hover:bg-[#0088cc]/90 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                <Icon name="Send" size={24} />
                Написать в Telegram
              </a>
            </div>

            <div className="text-center mb-8">
              <p className="text-secondary">или заполните форму ниже</p>
            </div>
            
            <Card className="bg-[#2d2d2d] border-muted">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-background mb-2 block">Ваше имя</label>
                    <Input 
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[#3d3d3d] border-muted text-background placeholder:text-secondary"
                    />
                  </div>
                  <div>
                    <label className="text-background mb-2 block">Email или телефон</label>
                    <Input 
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#3d3d3d] border-muted text-background placeholder:text-secondary"
                    />
                  </div>
                  <div>
                    <label className="text-background mb-2 block">Ваша задача</label>
                    <Textarea 
                      placeholder="Расскажите о задаче, которую хотите автоматизировать"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-[#3d3d3d] border-muted text-background placeholder:text-secondary min-h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 flex justify-center gap-6">
              <a href="tel:+79999999999" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
                <span>+7 (999) 999-99-99</span>
              </a>
              <a href="mailto:info@uchet-legko.ru" className="flex items-center gap-2 text-secondary hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
                <span>info@uchet-legko.ru</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-[#0d0d0d] border-t border-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src="https://cdn.poehali.dev/files/f559d442-330a-4d21-b8e5-8a40f00d66ac.jpg" alt="Учёт легко" className="h-10 object-contain" />
            </div>
            <p className="text-secondary text-sm">© 2024 Учёт Легко. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-secondary hover:text-primary transition-colors">
                <Icon name="MessageCircle" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;