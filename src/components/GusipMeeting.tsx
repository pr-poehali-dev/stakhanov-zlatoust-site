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

        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl">⚡</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Директор Золотов: практическое внедрение
              </h3>
              <p className="text-gray-600">
                Завод им. В.И. Ленина — пример системной работы
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-yellow-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-yellow-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                  📋
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Приказ от 1 декабря 1935 года
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Возложение на мастеров, бригадиров и инструкторов цехов
                    особой ответственности по организации незамедлительной
                    повседневной помощи стахановцам в настройке рабочего места и
                    бесперебойной работы станков-механизмов.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <span className="text-xl mr-2">💰</span>
                  <h4 className="font-semibold text-gray-800">
                    Контроль оплаты
                  </h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Велся строгий контроль за оплатой труда стахановцев
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <span className="text-xl mr-2">📰</span>
                  <h4 className="font-semibold text-gray-800">
                    Освещение в прессе
                  </h4>
                </div>
                <p className="text-gray-700 text-sm">
                  Публикации в «Пролетарской мысли» и «За индустриализацию»
                </p>
              </div>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">
                  🎨
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Визуальная пропаганда
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Достижения лучших работников оформлялись красочными
                    плакатами, которые наряду с портретами стахановцев (в рамках
                    под стеклом), вывешивались в цехах на всеобщее обозрение.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl">📈</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Результаты внедрения: октябрь 1935 — август 1936
              </h3>
              <p className="text-gray-600">
                Завод им. В.И. Ленина — достижения стахановского движения
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-emerald-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">👥</span>
                <div>
                  <div className="text-2xl font-bold text-emerald-800">926</div>
                  <div className="text-sm text-gray-600">стахановцев</div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-3xl mr-3">⚡</span>
                <div>
                  <div className="text-2xl font-bold text-emerald-800">
                    2487
                  </div>
                  <div className="text-sm text-gray-600">ударников</div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">💰</span>
                <div>
                  <div className="text-2xl font-bold text-blue-800">
                    700 000
                  </div>
                  <div className="text-sm text-gray-600">
                    рублей сэкономлено на металле
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-3xl mr-3">📉</span>
                <div>
                  <div className="text-2xl font-bold text-red-600">18%</div>
                  <div className="text-sm text-gray-600">
                    не выполняющих нормы
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="bg-purple-50 rounded-lg p-4 flex items-center">
              <span className="text-xl mr-3">📊</span>
              <span className="text-gray-700">
                Введена система дифференцирования статуса «стахановца –
                ударника»
              </span>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 flex items-center">
              <span className="text-xl mr-3">📝</span>
              <span className="text-gray-700">
                Введен оперативный учет сменной выработки стахановцев и
                ударников
              </span>
            </div>

            <div className="bg-indigo-50 rounded-lg p-4 flex items-center">
              <span className="text-xl mr-3">🎯</span>
              <span className="text-gray-700">
                Проведена общезаводская конференция стахановцев, ударников и
                инженерно-технического персонала
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-emerald-100 to-green-100 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🚀</span>
              <h4 className="text-xl font-semibold text-gray-800">
                Итоги к весне 1937 года
              </h4>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Производительность труда выросла в{" "}
              <span className="font-bold text-emerald-700">2-3 раза</span>, что
              стало ярким свидетельством эффективности стахановского движения на
              инструментальном заводе-комбинате им. В.И. Ленина.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl">🏆</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Первый квартал 1937 года: пик стахановского движения
              </h3>
              <p className="text-gray-600">
                Городской слет стахановцев 15 января — новые достижения
              </p>
            </div>
          </div>

          <div className="bg-amber-50 rounded-lg p-6 mb-8">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3">🤝</span>
              <h4 className="text-lg font-semibold text-gray-800">
                Городской слет стахановцев — 15 января 1937 года
              </h4>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Трудовые коллективы заключили договор и вступили в
              социалистическое соревнование за лучшие результаты труда.
              Стахановское движение стало еще более насыщенным и массовым.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">⚡</span>
                <h4 className="text-lg font-semibold text-gray-800">
                  Инструментальный завод
                </h4>
              </div>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">
                      И. Фефелов
                    </span>
                    <span className="text-2xl font-bold text-blue-600">
                      880%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Калибровщик, 15 января 1937 года выполнил норму по выработке
                    калибров на 880%
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-800">
                      И. Пронин
                    </span>
                    <span className="text-2xl font-bold text-green-600">
                      1000%
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Калибровщик, 17 января 1937 года повысил выработку на 1000%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🏭</span>
                <h4 className="text-lg font-semibold text-gray-800">
                  Металлургический завод
                </h4>
              </div>
              <div className="bg-white rounded-lg p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-800">
                    Прокатный цех
                  </span>
                  <span className="text-2xl font-bold text-orange-600">
                    653т
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  14 февраля 1937 года за сутки прокатали 653 тонны металла
                  вместо 528 тонн
                </p>
                <div className="text-xs text-gray-500">
                  <strong>Мастера прокатного стана «280»:</strong>
                  <br />
                  Павлов, Шумилов, Тырин — каждый прокатал по 35 тонн (при норме
                  30 тонн)
                </div>
              </div>
              <div className="bg-white rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <span className="font-semibold text-gray-800">
                    Мартеновский цех
                  </span>
                </div>
                <p className="text-xs text-gray-500">
                  <strong>Отличившиеся сталевары:</strong>
                  <br />
                  Ковкин, Танцеров, Шибаков, Тарбулатов
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mt-8">
          <div className="flex items-center mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mr-4">
              <span className="text-2xl">🔬</span>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">
                Новаторские изобретения металлургического завода
              </h3>
              <p className="text-gray-600">
                Рационализаторские решения всесоюзного значения
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-purple-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">⚡</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Новый тип электродов
                  </h4>
                  <div className="text-sm text-gray-600 mt-1">
                    Рационализаторы: Бондарь, Абрамов, Ощепков
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Революционное изобретение, освободившее страну от зарубежной
                экономической зависимости
              </p>
            </div>

            <div className="bg-orange-50 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">🔧</span>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    Система ремонта печей
                  </h4>
                  <div className="text-sm text-gray-600 mt-1">
                    Электросталеплавильное производство
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Новая система ремонта электросталеплавильной печи повысила
                эффективность производства
              </p>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">💧</span>
              <h4 className="text-lg font-semibold text-gray-800">
                Заслонки с водяным охлаждением
              </h4>
            </div>
            <p className="text-gray-700">
              Применение инновационных заслонок с водяным охлаждением
              значительно улучшило условия работы и безопасность производства
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-lg p-6 mt-6">
            <div className="flex items-center mb-4">
              <span className="text-3xl mr-3">🏭</span>
              <h4 className="text-xl font-semibold text-gray-800">
                Всесоюзное значение изобретений
              </h4>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Рабочими металлургического завода были сделаны многочисленные
              новаторские изобретения всесоюзного значения.
              <span className="font-bold text-purple-700">
                Внедрение нового типа электродов позволило освободить многие
                предприятия страны от зарубежной экономической зависимости
              </span>
              , что стало важнейшим достижением отечественной промышленности.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GusipMeeting;
