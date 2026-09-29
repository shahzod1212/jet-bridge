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

const cardText = "z-10";
const photo =
  "w-full sm:col-span-2 lg:w-[30%] h-[clamp(11rem,38vw,20rem)] lg:h-[20%] object-cover lg:absolute rounded-[clamp(1.25rem,2.4vw,2rem)]";

const Feature = () => {
  return (
    <section className="relative w-full overflow-hidden px-[clamp(1rem,4vw,4rem)] py-[clamp(2rem,4vw,3rem)] lg:py-4 lg:h-screen lg:min-h-[45rem]">
      <img
        src={`${import.meta.env.BASE_URL}background-logo.png`}
        alt=""
        className="pointer-events-none select-none absolute inset-0 m-auto w-[85%] h-[85%] object-contain lg:object-cover"
      />

      <div className="relative lg:h-full max-w-[clamp(20rem,90vw,90rem)] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(0.75rem,1.6vw,1.25rem)] lg:block">
          <img
            src={`${import.meta.env.BASE_URL}featureImage1.png`}
            alt="JetBridge"
            className={`${photo} lg:left-0 lg:top-0`}
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

        <h2 className="relative lg:absolute lg:left-1/2 lg:top-[46%] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:w-[70%] text-blue-900 text-[length:clamp(1.125rem,2.6vw,2.5rem)] font-extrabold uppercase text-center leading-tight my-[clamp(1.5rem,3vw,2rem)] lg:my-0 break-words">
          Наши ключевые преимущества
          <br />— в каждом этапе логистики
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(0.75rem,1.6vw,1.25rem)] lg:block">
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
            className={`${photo} lg:w-[42%] lg:left-[30%] lg:top-[62%]`}
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
