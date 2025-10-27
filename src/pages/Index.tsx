import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const gradeData = [
    { month: 'Сент', математика: 4.2, программирование: 4.5, английский: 4.0, физика: 4.3 },
    { month: 'Окт', математика: 4.4, программирование: 4.6, английский: 4.2, физика: 4.4 },
    { month: 'Нояб', математика: 4.6, программирование: 4.7, английский: 4.3, физика: 4.5 },
    { month: 'Дек', математика: 4.7, программирование: 4.8, английский: 4.5, физика: 4.6 },
    { month: 'Янв', математика: 4.8, программирование: 4.9, английский: 4.6, физика: 4.7 },
  ];

  const timeDistribution = [
    { name: 'Лекции', value: 30, color: '#0EA5E9' },
    { name: 'Практика', value: 25, color: '#1A1F2C' },
    { name: 'Самостоятельная работа', value: 20, color: '#8E9196' },
    { name: 'Проекты', value: 15, color: '#0284C7' },
    { name: 'Отдых', value: 10, color: '#BAE6FD' },
  ];

  const subjects = [
    { name: 'Высшая математика', hours: 120, professor: 'Иванов И.И.', grade: 4.8 },
    { name: 'Программирование', hours: 140, professor: 'Петрова М.А.', grade: 4.9 },
    { name: 'Английский язык', hours: 80, professor: 'Смирнов А.В.', grade: 4.6 },
    { name: 'Физика', hours: 100, professor: 'Козлова Е.П.', grade: 4.7 },
    { name: 'История России', hours: 60, professor: 'Морозов В.С.', grade: 4.5 },
    { name: 'Основы экономики', hours: 70, professor: 'Новикова О.Д.', grade: 4.4 },
  ];

  const achievements = [
    { title: 'Конкурс по программированию', place: '2 место', date: 'Октябрь 2024', icon: 'Trophy' },
    { title: 'Научная конференция', place: 'Диплом участника', date: 'Ноябрь 2024', icon: 'Award' },
    { title: 'Олимпиада по математике', place: '1 место', date: 'Декабрь 2024', icon: 'Medal' },
    { title: 'Проектная работа', place: 'Отлично', date: 'Январь 2025', icon: 'Star' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Мой Первый Курс</h1>
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная', icon: 'Home' },
                { id: 'college', label: 'О колледже', icon: 'School' },
                { id: 'subjects', label: 'Предметы', icon: 'BookOpen' },
                { id: 'achievements', label: 'Достижения', icon: 'Trophy' },
                { id: 'contact', label: 'Контакты', icon: 'Mail' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  <Icon name={item.icon as any} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20">Курс 1, 2024-2025</Badge>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Мой Путь в <span className="text-primary">ПГНИУ</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Добро пожаловать на мой сайт! Здесь я делюсь своим опытом обучения на первом курсе колледжа ПГНИУ,
                достижениями и планами на будущее.
              </p>
              <div className="flex gap-4">
                <Button size="lg" onClick={() => scrollToSection('subjects')}>
                  <Icon name="BookOpen" size={20} className="mr-2" />
                  Мои предметы
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('achievements')}>
                  <Icon name="Trophy" size={20} className="mr-2" />
                  Достижения
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://cdn.poehali.dev/projects/54cdc5a9-9455-437d-975e-670c33d26d66/files/0951a16e-071a-4b04-a848-9e81419a0988.jpg"
                alt="ПГНИУ Кампус"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mt-20">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="BookOpen" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-4xl font-bold">6</CardTitle>
                <CardDescription>Изучаемых предметов</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-4xl font-bold">4.7</CardTitle>
                <CardDescription>Средний балл</CardDescription>
              </CardHeader>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Trophy" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-4xl font-bold">4</CardTitle>
                <CardDescription>Достижения</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      <section id="college" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">О колледже</Badge>
            <h2 className="text-4xl font-bold mb-4">ПГНИУ - Пермский Государственный Университет</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Один из ведущих вузов Пермского края с богатой историей и современными образовательными программами
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Building2" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">История университета</h3>
                  <p className="text-muted-foreground">
                    ПГНИУ был основан в 1916 году и является одним из старейших университетов Урала. 
                    За более чем 100 лет существования университет выпустил тысячи квалифицированных специалистов.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Users" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Современное образование</h3>
                  <p className="text-muted-foreground">
                    Колледж ПГНИУ предлагает качественное среднее профессиональное образование по современным 
                    стандартам с использованием новейших технологий и методик обучения.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="GraduationCap" size={20} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Карьерные перспективы</h3>
                  <p className="text-muted-foreground">
                    Выпускники колледжа имеют отличные возможности для продолжения обучения в университете 
                    или начала карьеры в ведущих компаниях региона.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Видео о ПГНИУ"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full aspect-video"
                ></iframe>
              </div>
              <p className="text-sm text-muted-foreground text-center italic">
                Виртуальная экскурсия по кампусу ПГНИУ
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="subjects" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Учебный процесс</Badge>
            <h2 className="text-4xl font-bold mb-4">Изучаемые предметы</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Насыщенная программа первого курса включает фундаментальные и специализированные дисциплины
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {subjects.map((subject, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="mb-2">{subject.name}</CardTitle>
                      <CardDescription className="flex items-center gap-2 mb-1">
                        <Icon name="User" size={14} />
                        {subject.professor}
                      </CardDescription>
                      <CardDescription className="flex items-center gap-2">
                        <Icon name="Clock" size={14} />
                        {subject.hours} часов
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="text-lg font-bold">
                      {subject.grade}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="TrendingUp" size={24} />
                  Динамика успеваемости
                </CardTitle>
                <CardDescription>
                  График изменения средних оценок по ключевым предметам за семестр
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={gradeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis domain={[3.5, 5]} stroke="#6b7280" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: 'white',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                      }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="математика" stroke="#0EA5E9" strokeWidth={2} />
                    <Line type="monotone" dataKey="программирование" stroke="#1A1F2C" strokeWidth={2} />
                    <Line type="monotone" dataKey="английский" stroke="#8E9196" strokeWidth={2} />
                    <Line type="monotone" dataKey="физика" stroke="#0284C7" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="PieChart" size={24} />
                  Распределение времени
                </CardTitle>
                <CardDescription>
                  Как распределяется учебное и свободное время в течение недели
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={timeDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {timeDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4">Мои успехи</Badge>
            <h2 className="text-4xl font-bold mb-4">Достижения за курс</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Участие в конкурсах, олимпиадах и научных мероприятиях
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={achievement.icon as any} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                  <CardDescription className="text-base">
                    <div className="font-semibold text-foreground mt-2">{achievement.place}</div>
                    <div className="flex items-center gap-2 mt-1">
                      <Icon name="Calendar" size={14} />
                      {achievement.date}
                    </div>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="max-w-4xl mx-auto">
            <img
              src="https://cdn.poehali.dev/projects/54cdc5a9-9455-437d-975e-670c33d26d66/files/6e5a7e51-6156-4361-8c77-f8e4ae41af9c.jpg"
              alt="Достижения"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <Badge className="mb-4">Связаться</Badge>
            <h2 className="text-4xl font-bold mb-4">Контактная информация</h2>
            <p className="text-xl text-muted-foreground">
              Свяжитесь со мной для обсуждения учебных проектов или сотрудничества
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <CardTitle>Email</CardTitle>
                <CardDescription className="text-base">
                  <a href="mailto:student@psu.ru" className="text-primary hover:underline">
                    student@psu.ru
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Phone" size={24} className="text-primary" />
                </div>
                <CardTitle>Телефон</CardTitle>
                <CardDescription className="text-base">
                  <a href="tel:+79123456789" className="text-primary hover:underline">
                    +7 (912) 345-67-89
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="MapPin" size={24} className="text-primary" />
                </div>
                <CardTitle>Адрес</CardTitle>
                <CardDescription className="text-base">
                  г. Пермь, ул. Букирева, 15
                  <br />
                  ПГНИУ, корпус №1
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Globe" size={24} className="text-primary" />
                </div>
                <CardTitle>Социальные сети</CardTitle>
                <CardDescription className="text-base space-y-1">
                  <a href="https://vk.com" className="text-primary hover:underline block">
                    VK: @student_psu
                  </a>
                  <a href="https://t.me" className="text-primary hover:underline block">
                    Telegram: @student_psu
                  </a>
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card className="mt-8">
            <CardHeader>
              <img
                src="https://cdn.poehali.dev/projects/54cdc5a9-9455-437d-975e-670c33d26d66/files/c011e25e-2e64-4b04-9f8b-a11a350fa813.jpg"
                alt="Учебная аудитория"
                className="rounded-lg w-full h-auto"
              />
            </CardHeader>
          </Card>
        </div>
      </section>

      <footer className="bg-secondary/50 py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024-2025 Мой Первый Курс в ПГНИУ. Создано с помощью React и TypeScript
          </p>
          <div className="flex items-center justify-center gap-4 mt-4">
            <Button variant="ghost" size="sm">
              <Icon name="Github" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Linkedin" size={20} />
            </Button>
            <Button variant="ghost" size="sm">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
