import React from "react";
import FeatureCard from "../components/FeatureCard";

const features = [
  {
    title: "БЫСТРАЯ ДОСТАВКА ЗА 5–7 ДНЕЙ",
    text: "Авиа-отправка из ОАЭ без задержек и перегрузок! Вы точно знаете когда получите ваш груз",
  },
  {
    title: "ЦИФРОВОЙ СЕРВИС БЕЗ ЗВОНКОВ И ОЖИДАНИЙ",
    text: "Заявка, трекинг, уведомления — всё онлайн, в личном кабинете",
  },
  {
    title: "ГИБКИЕ ТАРИФЫ ДЛЯ B2C И B2B",
    text: "Лояльный подход к каждому клиенту!",
  },
  {
    title: "СОБСТВЕННЫЙ СКЛАД В ДУБАЕ",
    text: "Принимаем, проверяем, фотографируем, упаковываем и объединяем грузы.",
  },
  {
    title: "ПОЛНОЕ ТАМОЖЕННОЕ ОФОРМЛЕНИЕ И ВЭД",
    text: "Берём на себя документы, инвойсы, страхование",
  },
];

const Feature = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden px-4 sm:px-6 md:px-10 py-4">
      <img
        src={`${import.meta.env.BASE_URL}background-logo.png`}
        alt=""
        className="pointer-events-none select-none absolute inset-0 m-auto w-[85%] h-[85%] object-cover"
      />

      <div className="relative h-full flex flex-col md:block max-w-6xl mx-auto">
        <div className="flex flex-col md:block gap-2">
          <img
            src={`${import.meta.env.BASE_URL}/featureImage1.png`}
            alt="JetBridge"
            className="w-full md:w-[30%] h-40 md:h-48 object-cover md:absolute md:left-0 md:top-0 rounded-3xl"
          />
          <FeatureCard
            {...features[0]}
            className="z-10 md:absolute md:left-[26%] md:top-0 md:w-[38%] text-[10px] sm:text-xs px-3 py-2"
          />
          <FeatureCard
            {...features[1]}
            className="z-10 md:absolute md:left-[56%] md:top-[26%] md:w-[40%] text-[10px] sm:text-xs px-3 py-2"
          />
        </div>

        <h2 className="relative md:absolute md:left-1/2 md:top-[46%] md:-translate-x-1/2 md:-translate-y-1/2 md:w-[70%] text-blue-900 text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold uppercase text-center leading-tight my-4 md:my-0">
          Наши ключевые преимущества
          <br />— в каждом этапе логистики
        </h2>

        <div className="flex flex-col md:block gap-2">
          <FeatureCard
            {...features[2]}
            className="z-10 md:absolute md:left-0 md:top-[62%] md:w-[28%] text-[10px] sm:text-xs px-3 py-2"
          />
          <FeatureCard
            {...features[4]}
            className="z-10 md:absolute md:left-[12%] md:top-[80%] md:w-[32%] text-[10px] sm:text-xs px-3 py-2"
          />
          <img
            src={`${import.meta.env.BASE_URL}/featureImage2.png`}
            alt="JetBridge"
            className="w-full md:w-[42%] h-40 md:h-48 object-cover md:absolute md:left-[30%] md:top-[62%] rounded-3xl"
          />
          <FeatureCard
            {...features[3]}
            className="z-10 md:absolute md:left-[62%] md:top-[86%] md:w-[36%] text-[10px] sm:text-xs px-3 py-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;