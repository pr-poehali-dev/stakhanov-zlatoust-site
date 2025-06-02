import { Card, CardContent } from "@/components/ui/card";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const Timeline = () => {
  const events: TimelineEvent[] = [
    {
      year: "1935",
      title: "Начало стахановского движения",
      description:
        "Алексей Стаханов установил рекорд добычи угля, вдохновив рабочих по всему СССР",
    },
    {
      year: "1936",
      title: "Первые стахановцы Златоуста",
      description:
        "Металлурги завода начали показывать выдающиеся результаты производительности",
    },
    {
      year: "1937",
      title: "Массовое движение",
      description: "Более 50 рабочих Златоуста получили звание стахановцев",
    },
    {
      year: "1938",
      title: "Рекорды производства",
      description:
        "Златоустовский завод достиг рекордных показателей выплавки стали",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Хронология движения
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-300"></div>
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative flex items-center mb-8 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              <Card
                className={`w-5/12 ${index % 2 === 0 ? "mr-auto" : "ml-auto"} hover:shadow-lg transition-shadow duration-300`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                      {event.year}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">
                    {event.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
