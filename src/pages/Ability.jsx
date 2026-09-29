import React from "react";
import AbilityCard from "../components/AbilityCard";

const CARDS = [
  {
    variant: "orange",
    label: "Электроника и техника",
    title: "СМАРТФОНЫ, НОУТБУКИ, АКСЕССУАРЫ",
  },
  {
    variant: "white",
    label: "Запчасти и комплектующие",
    title: "АВТОЗАПЧАСТИ, ШИНЫ, ТЕХМОДУЛИ",
  },
  {
    variant: "navy",
    label: "Одежда, обувь и косметика",
    title: "ОДЕЖДА, ОБУВЬ, ТЕКСТИЛЬ, БЬЮТИ-ПРОДУКТЫ",
  },
  {
    variant: "gold",
    label: "Медицинские и автотовары",
    title: "МЕДПРИБОРЫ, АВТОАКСЕССУАРЫ",
  },
];

const Ability = () => {
  return (
    <section className="w-full px-[clamp(1rem,5vw,5rem)]">
      <h2 className="max-w-[clamp(20rem,90vw,90rem)] mx-auto mb-[clamp(0.75rem,1.5vw,1.5rem)] text-blue-900 text-[length:clamp(1.5rem,3.4vw,3.75rem)] leading-tight font-extrabold uppercase break-words">
        Что мы доставляем
      </h2>

      <div className="relative max-w-[clamp(20rem,90vw,90rem)] mx-auto">
        <div className="w-full h-[clamp(15rem,52vw,46rem)] max-h-[85vh] overflow-hidden rounded-[clamp(1.25rem,2.4vw,2.5rem)] bg-slate-900">
          <img
            src={`${import.meta.env.BASE_URL}ability.png`}
            alt="Загрузка карго в самолёт"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative -mt-[clamp(3.5rem,7vw,7rem)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <AbilityCard
            {...CARDS[0]}
            className="rounded-t-2xl sm:rounded-t-none sm:rounded-tl-2xl lg:rounded-l-2xl"
          />
          <AbilityCard
            {...CARDS[1]}
            className="sm:rounded-tr-2xl lg:rounded-none"
          />
          <AbilityCard
            {...CARDS[2]}
            className="sm:rounded-bl-2xl lg:rounded-none"
          />
          <AbilityCard
            {...CARDS[3]}
            className="rounded-b-2xl sm:rounded-b-none sm:rounded-br-2xl lg:rounded-r-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Ability;
