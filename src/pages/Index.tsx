import HeroSection from "@/components/HeroSection";
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
      name: "Мария Волкова",
      role: "Рабочая",
      achievement: "280% выполнения нормы",
      description:
        "Первая женщина-стахановка завода, показавшая пример трудового героизма для всех работниц",
      year: "1937",
    },
    {
      name: "Сергей Кузнецов",
      role: "Кузнец",
      achievement: "Мастер 12 видов оружия",
      description:
        "Потомственный златоустовский оружейник, освоивший уникальные техники ковки булатной стали",
      year: "1937",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

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
