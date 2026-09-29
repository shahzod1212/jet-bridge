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
    <section className="relative px-4 sm:px-6 md:px-10 py-14 md:py-20">
      <h2 className="relative text-blue-900 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase text-center mb-10 md:mb-14">
        Технологии, которые работают на вас
      </h2>

      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <TechnologyCard key={i} {...plan} />
        ))}
      </div>

      <CloudDecorations />
    </section>
  );
};

export default Technology;
