import React from "react";

const About = () => {
  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4 sm:px-6 md:px-10 py-12 md:py-16">
      <div>
        <h2 className="text-blue-900 font-montserrat text-3xl sm:text-4xl md:text-5xl  uppercase leading-tight">
          О компании
          <br />
          JetBridge
        </h2>

        <p className="text-slate-600 text-sm mt-5 leading-relaxed">
          JetBridge — это международная логистическая компания, предоставляющая
          авиа-доставку из ОАЭ в Казахстан "под ключ". Мы обеспечиваем полный
          цикл: от приёмки и консолидации груза на собственном складе в Дубае до
          оформления всех документов и доставки получателю в РК. Работаем как с
          частными клиентами, так и с бизнесом: оформляем контракты, инвойсы,
          HS-коды и сопровождаем ВЭД.
        </p>

        <p className="text-slate-600 text-sm mt-4 leading-relaxed">
          Наш подход — это скорость, прозрачность и технологичность. Благодаря
          цифровым инструментам клиент всегда знает, где находится его груз,
          сколько он стоит и когда будет доставлен.
        </p>

        <button className="bg-blue-900 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full mt-6">
          РАССЧИТАТЬ СТОИМОСТЬ
        </button>
      </div>

      <div>
        <img
          src={`${import.meta.env.BASE_URL}about.png`}
          alt="JetBridge"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </section>
  );
};

export default About;