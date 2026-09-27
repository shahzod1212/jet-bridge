import React from "react";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <header
      className="relative min-h-screen bg-cover bg-center flex flex-col px-4 sm:px-6 md:px-10 pb-12 pt-4"
      style={{ backgroundImage: "url('/header.png')" }}
    >
      <Navbar />

      <div className="mt-8 sm:mt-10 md:mt-16 max-w-xl md:max-w-2xl">
        <h1 className="text-yellow-500 text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-extrabold tracking-wide leading-none">
          JET BRIDGE
        </h1>
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl font-extrabold uppercase leading-tight mt-2">
          — Доставка из Дубая
          <br />в Казахстан за 5–7 дней
        </h2>

        <p className="text-slate-200 text-xs sm:text-sm md:text-base mt-3 md:mt-4 leading-relaxed">
          Посылки, техника и грузы для бизнеса.
          <br />
          Всё под ключ: склад, трекинг, таможня.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-10 md:mt-14 max-w-xl md:max-w-2xl">
        <button className="bg-slate-800 text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full whitespace-nowrap">
          РАССЧИТАТЬ СТОИМОСТЬ
        </button>
        <button className="flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-full whitespace-nowrap">
          ОЗНАКОМИТЬСЯ С ТАРИФОМ
          <span>✈</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
