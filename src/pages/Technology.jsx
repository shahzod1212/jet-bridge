import React from "react";
import TechnologyCard from "../components/TechnologyCard";
import {
  MiniPackageIcon,
  StandardPackageIcon,
  BulkCargoIcon,
} from "../components/TechnologyIcons";
import CloudDecorations from "../components/CloudDecoration";

const plans = [
  {
    title: "Мини посылка",
    forText: "Для: личных заказов, техники, косметики, документов",
    features: [
      "Вес: до 2 кг",
      "Всё включено: склад, трекинг, таможня",
      "Удобно для маркетплейсов (Amazon, Noon, etc.)",
    ],
    price: "Цена: от $8 за отправление",
    duration: "Срок: 5–7 дней",
    Icon: MiniPackageIcon,
    color: "orange",
  },
  {
    title: "Стандартная доставка",
    forText: "Для: личных заказов, техники, косметики, документов",
    features: [
      "Вес: до 2 кг",
      "Всё включено: склад, трекинг, таможня",
      "Удобно для маркетплейсов (Amazon, Noon, etc.)",
    ],
    price: "Цена: от $8 за отправление",
    duration: "Срок: 5–7 дней",
    Icon: StandardPackageIcon,
    color: "blue",
  },
  {
    title: "Крупный груз / B2B",
    forText: "Для: личных заказов, техники, косметики, документов",
    features: [
      "Вес: до 2 кг",
      "Всё включено: склад, трекинг, таможня",
      "Удобно для маркетплейсов (Amazon, Noon, etc.)",
    ],
    price: "Цена: от $8 за отправление",
    duration: "Срок: 5–7 дней",
    Icon: BulkCargoIcon,
    color: "orange",
  },
];

const Technology = () => {
  return (
    <section className="relative overflow-x-clip px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 pt-10 pb-28 sm:pt-14 sm:pb-32 lg:pt-16 lg:pb-24 xl:pt-20 xl:pb-32">
      <h2 className="relative text-blue-900 text-xl min-[380px]:text-2xl sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold uppercase text-center mb-8 sm:mb-10 md:mb-14 xl:mb-16 leading-tight break-words">
        Технологии, которые работают на вас
      </h2>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 xl:gap-8 max-w-md sm:max-w-3xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto">
        {plans.map((plan, i) => (
          <TechnologyCard
            key={i}
            {...plan}
            className={
              i === 2
                ? "sm:col-span-2 sm:max-w-[calc(50%-0.75rem)] sm:mx-auto sm:w-full lg:col-span-1 lg:max-w-none"
                : ""
            }
          />
        ))}
      </div>

      <CloudDecorations />
    </section>
  );
};

export default Technology;