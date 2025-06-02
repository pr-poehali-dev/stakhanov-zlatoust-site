import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-red-700 via-red-600 to-red-800 text-white py-20 px-4">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6 tracking-tight">
          Стахановское движение в Златоусте
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
          Город оружейников и мастеров стали стал одним из центров трудового
          героизма 1930-х годов. Златоустовские металлурги показали выдающиеся
          примеры производительности труда.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
            <div className="text-3xl font-bold">1935</div>
            <div className="text-sm opacity-90">Начало движения</div>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
            <div className="text-3xl font-bold">300%</div>
            <div className="text-sm opacity-90">Превышение нормы</div>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 p-6 text-center">
            <div className="text-3xl font-bold">926</div>
            <div className="text-sm opacity-90">Стахановцев</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
