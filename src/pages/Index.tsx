import HeroSection from "@/components/HeroSection";
import MovementFormation from "@/components/MovementFormation";
import FactCard from "@/components/FactCard";
import PersonCard from "@/components/PersonCard";
import Timeline from "@/components/Timeline";

const Index = () => {
  const facts = [
    {
      title: "Рекорд сталевара Ивана Петрова",
      description:
        "Выплавил за смену 47 тонн стали вместо нормы 15 тонн, превысив план в 3,1 раза",
      year: "1936",
      category: "Металлургия",
      icon: "🔥",
    },
    {
      title: "Бригада кузнецов",
      description:
        "Артель златоустовских кузнецов освоила изготовление 12 видов оружия за одну смену",
      year: "1937",
      category: "Оружейное дело",
      icon: "⚒️",
    },
    {
      title: "Женщины-стахановки",
      description:
        "Мария Волкова стала первой женщиной-стахановкой завода, превысив норму на 280%",
      year: "1937",
      category: "Трудовой рекорд",
      icon: "⭐",
    },
    {
      title: "Молодёжное движение",
      description:
        "Комсомольцы завода создали ударную бригаду, показавшую образцы дисциплины и качества",
      year: "1938",
      category: "Молодёжь",
      icon: "🚀",
    },
  ];

  const people = [
    {
      name: "Иван Петров",
      role: "Сталевар",
      achievement: "Превышение нормы в 3,1 раза",
      description:
        "Легендарный сталевар Златоустовского завода, первый стахановец металлургического производства города",
      year: "1936",
    },
    {
      name: "Варганов",
      role: "Рабочий машстроя",
      achievement: "264% выполнения нормы",
      description:
        "Выдающийся стахановец цеха машиностроения, показавший одни из лучших результатов производительности",
      year: "1937",
    },
    {
      name: "Изгагин",
      role: "Рабочий машстроя",
      achievement: "261,1% выполнения нормы",
      description:
        "Один из передовиков стахановского движения в машиностроительном цехе завода",
      year: "1937",
    },
    {
      name: "Дьячков А.",
      role: "Рабочий цеха им. Фрунзе",
      achievement: "303% выполнения нормы",
      description:
        "Рекордсмен стахановского движения, достигший невиданных показателей производительности труда",
      year: "1937",
    },
    {
      name: "Стахеев",
      role: "Токарь цеха им. Фрунзе",
      achievement: "300% выполнения нормы",
      description:
        "Выдающийся токарь, мастер своего дела, показавший образцовые результаты в стахановском движении",
      year: "1937",
    },
    {
      name: "Чикалов",
      role: "Рабочий цеха им. Фрунзе",
      achievement: "275% выполнения нормы",
      description:
        "Один из лидеров стахановского движения, внёсший значительный вклад в развитие производства",
      year: "1937",
    },
    {
      name: "Кочетов",
      role: "Шлифовальщик сверлового цеха",
      achievement: "150% выполнения нормы",
      description:
        "Молодой допризывник 1923 года рождения, один из дисциплинированных рабочих цеха, освоивший производство",
      year: "1937",
    },
    {
      name: "Шабардина",
      role: "Фрезеровщица сверлового цеха",
      achievement: "207% выполнения нормы",
      description:
        "Выдающаяся работница фрезерного отделения, показавшая один из лучших результатов в цехе",
      year: "1937",
    },
    {
      name: "Толстых",
      role: "Работница цеха №11",
      achievement: "250% выполнения нормы",
      description:
        "Установила новый рекорд выработки, производя 4000 колпачков в смену вместо нормы 1600 штук",
      year: "1937",
    },
    {
      name: "Иванов",
      role: "Сварщик сверлового цеха",
      achievement: "203% выполнения нормы",
      description:
        "Квалифицированный сварщик, демонстрировавший высокие показатели производительности",
      year: "1937",
    },
    {
      name: "Рохмистров",
      role: "Сварщик сверлового цеха",
      achievement: "188% выполнения нормы",
      description:
        "Опытный сварщик, внёсший значительный вклад в развитие сварочного производства",
      year: "1937",
    },
    {
      name: "Плинков",
      role: "Фрезеровщик сверлового цеха",
      achievement: "176% выполнения нормы",
      description:
        "Мастер фрезерного дела, показавший отличные результаты в обработке металла",
      year: "1937",
    },
    {
      name: "Мухтерова",
      role: "Токарь сверлового цеха",
      achievement: "163% выполнения нормы",
      description:
        "Талантливая работница токарного отделения, освоившая сложные операции",
      year: "1937",
    },
    {
      name: "Тронов",
      role: "Рабочий машстроя",
      achievement: "231,6% выполнения нормы",
      description:
        "Талантливый работник машиностроительного цеха, превысивший плановые показатели более чем в 2 раза",
      year: "1937",
    },
    {
      name: "Просвирин",
      role: "Токарь цеха им. Фрунзе",
      achievement: "230% выполнения нормы",
      description:
        "Квалифицированный токарь, демонстрировавший высокое мастерство и трудовую дисциплину",
      year: "1937",
    },
    {
      name: "Просвирин",
      role: "Токарь цеха им. Фрунзе",
      achievement: "230% выполнения нормы",
      description:
        "Квалифицированный токарь, демонстрировавший высокое мастерство и трудовую дисциплину",
      year: "1937",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      <MovementFormation />

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Интересные факты
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facts.map((fact, index) => (
              <FactCard key={index} {...fact} />
            ))}
          </div>
        </div>
      </section>

      <Timeline />

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Выдающиеся личности
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {people.map((person, index) => (
              <PersonCard key={index} {...person} />
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-300">
            © 2024 Стахановское движение в Златоусте. Исторический портал.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
