import React from 'react';
import { ShoppingBag, Rocket, Users, Trophy, ChevronRight, CheckCircle, Play } from 'lucide-react';
import { TestimonialCard } from './components/TestimonialCard';
import { AnimatedBackground } from './components/AnimatedBackground';

function App() {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Владелец магазина косметики",
      content: "Благодаря курсу я смогла запустить свой магазин косметики всего за 2 месяца. Особенно ценными оказались знания по маркетингу и работе с поставщиками. Сейчас мой бизнес активно растёт!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
      rating: 5
    },
    {
      name: "Михаил Соколов",
      role: "Предприниматель",
      content: "Структурированная программа и поддержка менторов помогли избежать типичных ошибок при запуске. За первый месяц после окончания курса я уже вышел на стабильные продажи.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
      rating: 5
    },
    {
      name: "Елена Васильева",
      role: "Директор интернет-магазина",
      content: "Отличная программа! Особенно впечатлила практическая часть и разбор реальных кейсов. Знания по автоматизации процессов сэкономили мне много времени и ресурсов.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=200&h=200",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <AnimatedBackground className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
        <nav className="container mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-white" />
              <span className="text-xl font-bold text-white">EcomAcademy</span>
            </div>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#programs" className="hover:text-white/80">Программы</a>
              <a href="#benefits" className="hover:text-white/80">Преимущества</a>
              <a href="#testimonials" className="hover:text-white/80">Отзывы</a>
            </div>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-white/90 transition">
              Начать обучение
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-6 py-20 relative">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Создайте успешный интернет-магазин с нуля
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Практические навыки от экспертов электронной коммерции для запуска вашего прибыльного бизнеса
              </p>
              <div className="flex space-x-4">
                <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition flex items-center">
                  Записаться на курс
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition flex items-center">
                  <Play className="mr-2 h-5 w-5" />
                  Демо урок
                </button>
              </div>
            </div>
            <div className="md:w-[450px] md:h-[450px] relative">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-lg"></div>
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800&h=800"
                alt="Student learning e-commerce"
                className="rounded-lg shadow-2xl w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
        </div>
      </AnimatedBackground>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50" id="benefits">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Почему выбирают нас</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: <Rocket className="h-12 w-12 text-indigo-600" />,
                title: "Быстрый старт",
                description: "От базовых знаний до запуска магазина за 8 недель"
              },
              {
                icon: <Users className="h-12 w-12 text-indigo-600" />,
                title: "Поддержка экспертов",
                description: "Персональные менторы с опытом в e-commerce"
              },
              {
                icon: <Trophy className="h-12 w-12 text-indigo-600" />,
                title: "Реальные проекты",
                description: "Создайте работающий магазин во время обучения"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20" id="programs">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-16">Программа обучения</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              "Основы электронной коммерции",
              "Выбор ниши и анализ конкурентов",
              "Создание магазина на популярных платформах",
              "SEO и маркетинговые стратегии",
              "Управление товарами и складом",
              "Автоматизация процессов",
              "Аналитика и масштабирование",
              "Работа с клиентами"
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 border rounded-lg hover:border-indigo-500 transition">
                <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                <span className="text-lg text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50" id="testimonials">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Отзывы наших выпускников</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Узнайте, как наши студенты успешно запустили свои онлайн-магазины и развивают бизнес
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedBackground className="py-20 relative">
        <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]"></div>
        <div className="container mx-auto px-6 text-center relative">
          <h2 className="text-3xl font-bold text-white mb-8">Готовы начать свой путь в e-commerce?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Присоединяйтесь к сообществу успешных предпринимателей. Старт нового потока уже скоро!
          </p>
          <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-white/90 transition">
            Забронировать место
          </button>
        </div>
      </AnimatedBackground>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <ShoppingBag className="h-8 w-8" />
              <span className="text-xl font-bold">EcomAcademy</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-indigo-400">О нас</a>
              <a href="#" className="hover:text-indigo-400">Блог</a>
              <a href="#" className="hover:text-indigo-400">Контакты</a>
              <a href="#" className="hover:text-indigo-400">Политика конфиденциальности</a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © 2024 EcomAcademy. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;