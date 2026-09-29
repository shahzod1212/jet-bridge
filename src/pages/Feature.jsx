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

const cardText =
  "z-10 text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base px-4 py-3 lg:px-3 lg:py-2 xl:px-4 xl:py-3";

const Feature = () => {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 md:px-10 lg:px-10 xl:px-14 py-8 sm:py-10 lg:py-4 lg:h-screen lg:min-h-[720px]">
      <img
        src={`${import.meta.env.BASE_URL}background-logo.png`}
        alt=""
        className="pointer-events-none select-none absolute inset-0 m-auto w-[85%] h-[85%] object-contain lg:object-cover"
      />

      <div className="relative lg:h-full max-w-2xl sm:max-w-3xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:block">
          <img
            src={`${import.meta.env.BASE_URL}featureImage1.png`}
            alt="JetBridge"
            className="w-full sm:col-span-2 lg:w-[30%] h-44 sm:h-56 md:h-64 lg:h-[20%] object-cover lg:absolute lg:left-0 lg:top-0 rounded-3xl"
          />
          <FeatureCard
            {...features[0]}
            className={`${cardText} lg:absolute lg:left-[26%] lg:top-0 lg:w-[38%]`}
          />
          <FeatureCard
            {...features[1]}
            className={`${cardText} lg:absolute lg:left-[56%] lg:top-[26%] lg:w-[40%]`}
          />
        </div>

        <h2 className="relative lg:absolute lg:left-1/2 lg:top-[46%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[70%] text-blue-900 text-lg min-[380px]:text-xl sm:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold uppercase text-center leading-tight my-6 sm:my-8 lg:my-0">
          Наши ключевые преимущества
          <br />— в каждом этапе логистики
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:block">
          <FeatureCard
            {...features[2]}
            className={`${cardText} lg:absolute lg:left-0 lg:top-[62%] lg:w-[28%]`}
          />
          <FeatureCard
            {...features[4]}
            className={`${cardText} lg:absolute lg:left-[12%] lg:top-[80%] lg:w-[32%]`}
          />
          <img
            src={`${import.meta.env.BASE_URL}featureImage2.png`}
            alt="JetBridge"
            className="w-full sm:col-span-2 lg:w-[42%] h-44 sm:h-56 md:h-64 lg:h-[20%] object-cover lg:absolute lg:left-[30%] lg:top-[62%] rounded-3xl"
          />
          <FeatureCard
            {...features[3]}
            className={`${cardText} sm:col-span-2 lg:col-span-1 lg:absolute lg:left-[62%] lg:top-[86%] lg:w-[36%]`}
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
