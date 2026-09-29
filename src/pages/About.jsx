import React from "react";

const About = () => {
  return (
    <section className="w-full max-w-screen-2xl mx-auto md:min-h-screen grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-14 xl:gap-20 items-center px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-10 sm:py-14 lg:py-20">
      <div className="min-w-0">
        <h2 className="text-blue-900 font-montserrat text-2xl min-[380px]:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl uppercase leading-tight break-words">
          О компании
          <br />
          JetBridge
        </h2>

        <p className="text-slate-600 text-sm sm:text-base xl:text-lg 2xl:text-xl mt-4 sm:mt-5 leading-relaxed">
          JetBridge — это международная логистическая компания, предоставляющая
          авиа-доставку из ОАЭ в Казахстан "под ключ". Мы обеспечиваем полный
          цикл: от приёмки и консолидации груза на собственном складе в Дубае до
          оформления всех документов и доставки получателю в РК. Работаем как с
          частными клиентами, так и с бизнесом: оформляем контракты, инвойсы,
          HS-коды и сопровождаем ВЭД.
        </p>

        <p className="text-slate-600 text-sm sm:text-base xl:text-lg 2xl:text-xl mt-3 sm:mt-4 leading-relaxed">
          Наш подход — это скорость, прозрачность и технологичность. Благодаря
          цифровым инструментам клиент всегда знает, где находится его груз,
          сколько он стоит и когда будет доставлен.
        </p>

        <button className="w-full sm:w-auto bg-blue-900 text-white text-xs sm:text-sm xl:text-base font-semibold px-6 sm:px-8 xl:px-10 py-3 sm:py-3.5 xl:py-4 rounded-full mt-6 sm:mt-8">
          РАССЧИТАТЬ СТОИМОСТЬ
        </button>
      </div>

      <div className="w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-auto md:h-[60vh] md:min-h-[320px] md:max-h-[680px]">
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
