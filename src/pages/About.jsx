import React from "react";

const About = () => {
  return (
    <section className="w-full max-w-[100rem] mx-auto md:min-h-screen grid grid-cols-1 md:grid-cols-2 gap-[clamp(2rem,5vw,5rem)] items-center px-[clamp(1rem,5vw,5rem)] py-[clamp(2.5rem,6vw,5rem)]">
      <div className="min-w-0">
        <h2 className="text-blue-900 font-montserrat text-[length:clamp(1.5rem,4.6vw,4.5rem)] uppercase leading-tight break-words">
          О компании
          <br />
          JetBridge
        </h2>

        <p className="text-slate-600 text-[length:clamp(0.875rem,1.25vw,1.25rem)] mt-[clamp(1rem,1.6vw,1.5rem)] leading-relaxed">
          JetBridge — это международная логистическая компания, предоставляющая
          авиа-доставку из ОАЭ в Казахстан "под ключ". Мы обеспечиваем полный
          цикл: от приёмки и консолидации груза на собственном складе в Дубае до
          оформления всех документов и доставки получателю в РК. Работаем как с
          частными клиентами, так и с бизнесом: оформляем контракты, инвойсы,
          HS-коды и сопровождаем ВЭД.
        </p>

        <p className="text-slate-600 text-[length:clamp(0.875rem,1.25vw,1.25rem)] mt-[clamp(0.75rem,1.2vw,1.25rem)] leading-relaxed">
          Наш подход — это скорость, прозрачность и технологичность. Благодаря
          цифровым инструментам клиент всегда знает, где находится его груз,
          сколько он стоит и когда будет доставлен.
        </p>

        <button className="w-full sm:w-auto bg-blue-900 text-white text-[length:clamp(0.75rem,1.1vw,1rem)] font-semibold px-[clamp(1.5rem,3vw,2.5rem)] py-[0.9em] rounded-full mt-[clamp(1.5rem,2.4vw,2rem)]">
          РАССЧИТАТЬ СТОИМОСТЬ
        </button>
      </div>

      <div className="w-full aspect-[4/3] md:aspect-auto md:h-[clamp(20rem,42vw,42.5rem)] md:max-h-[85vh]">
        <img
          src={`${import.meta.env.BASE_URL}about.png`}
          alt="JetBridge"
          className="w-full h-full object-cover rounded-[clamp(1rem,1.6vw,1.75rem)]"
        />
      </div>
    </section>
  );
};

export default About;
