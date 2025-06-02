const GusipMeeting = () => {
  const measures = [
    "Выявление новых стахановцев",
    "Изучение методов работы передовиков",
    "Распространение передового опыта",
    "Техническое переоснащение рабочих мест",
    "Улучшение организации труда",
    "Повышение квалификации рабочих",
    "Прогрессивная оплата труда",
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-yellow-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Совещание в ГУСИП — формализация движения
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            14 октября 1935 года в Москве состоялось ключевое совещание в
            Главном управлении станкостроительной и инструментальной
            промышленности
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl">📋</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Результаты совещания
              </h3>
              <p className="text-gray-600">
                Утверждение критериев стахановской организации работы
              </p>
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed">
            На совещании были определены основные принципы стахановского
            движения и разработана система его внедрения на промышленных
            предприятиях СССР.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            7 обязательных мер внедрения
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {measures.map((measure, index) => (
              <div
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
              >
                <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">
                  {index + 1}
                </div>
                <span className="text-gray-700">{measure}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GusipMeeting;
