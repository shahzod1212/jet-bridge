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
    <section className="relative overflow-x-clip px-[clamp(1rem,5vw,5rem)] pt-[clamp(2.5rem,5vw,5rem)] pb-[clamp(7rem,9vw,8rem)]">
      <h2 className="relative text-blue-900 text-[length:clamp(1.25rem,3.4vw,3.75rem)] font-extrabold uppercase text-center mb-[clamp(2rem,3.5vw,4rem)] leading-tight break-words">
        Технологии, которые работают на вас
      </h2>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--gap)] [--gap:clamp(1.25rem,2vw,2rem)] max-w-md sm:max-w-3xl lg:max-w-[clamp(20rem,90vw,90rem)] mx-auto">
        {plans.map((plan, i) => (
          <TechnologyCard
            key={i}
            {...plan}
            className={
              i === 2
                ? "sm:col-span-2 sm:max-w-[calc(50%-var(--gap)/2)] sm:mx-auto sm:w-full lg:col-span-1 lg:max-w-none"
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
