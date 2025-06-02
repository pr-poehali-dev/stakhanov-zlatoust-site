const MovementFormation = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-red-50 to-amber-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Образование стахановского движения
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-6">
            <div className="text-6xl">⛏️</div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-red-700">
                Рекорд Алексея Стаханова — 31 августа 1935 года
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Забойщик шахты «Центральная-Ирмино» в Донбассе Алексей
                Григорьевич Стаханов за одну смену добыл 102 тонны угля при
                норме 7 тонн — превысил план в 14,5 раз. Этот трудовой подвиг
                положил начало массовому движению за повышение
                производительности труда.
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🚀</span>
              <h3 className="text-lg font-semibold text-gray-800">
                Распространение по стране
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              После рекорда Стаханова движение молниеносно распространилось по
              всему Советскому Союзу. Рабочие различных отраслей стремились
              превзойти установленные нормы выработки, совершенствовать
              технологии и организацию труда.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">⚔️</span>
              <h3 className="text-lg font-semibold text-gray-800">
                Приход в Златоуст
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed">
              В 1936-1937 годах стахановское движение охватило Златоустовский
              металлургический завод. Местные рабочие, вдохновленные примером
              шахтёра, начали устанавливать собственные производственные рекорды
              в металлургии и машиностроении.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-red-100 border-l-4 border-red-500 p-6 rounded-r-lg">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">📈</span>
            <h4 className="font-semibold text-red-800">Принципы движения</h4>
          </div>
          <p className="text-red-700">
            <strong>Новаторство, инициатива, овладение техникой</strong> — три
            кита стахановского движения, которые помогли советским рабочим
            достичь невиданных ранее показателей производительности труда.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MovementFormation;
