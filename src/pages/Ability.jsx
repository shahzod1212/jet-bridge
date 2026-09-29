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
    <section className="w-full px-4 sm:px-6 md:px-10 ">
      <h2 className="max-w-6xl mx-auto mb-3 text-blue-900 text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase">
        Что мы доставляем
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div className="w-full h-[44vh] sm:h-[50vh] md:h-[75vh] max-h-screen overflow-hidden rounded-3xl bg-slate-900">
          <img
            src={`${import.meta.env.BASE_URL}/ability.png`}
            alt="Загрузка карго в самолёт"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative -mt-14 sm:-mt-16 md:-mt-20 grid grid-cols-1 md:grid-cols-4">
          <AbilityCard
            {...CARDS[0]}
            className="rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
          />
          <AbilityCard {...CARDS[1]} />
          <AbilityCard {...CARDS[2]} />
          <AbilityCard
            {...CARDS[3]}
            className="rounded-b-2xl md:rounded-b-none md:rounded-r-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Ability;