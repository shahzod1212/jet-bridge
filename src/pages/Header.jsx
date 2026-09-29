import React from "react";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <header
      className="relative min-h-screen bg-cover bg-center flex flex-col px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 pb-10 sm:pb-12 xl:pb-16 pt-4"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}header.png)`,
      }}
    >
      <Navbar />

      <div className="mt-8 sm:mt-10 md:mt-16 xl:mt-24 max-w-xl md:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
        <h1 className="text-yellow-500 text-3xl min-[380px]:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold tracking-wide leading-none break-words">
          JET BRIDGE
        </h1>

        <h2 className="text-white text-lg min-[380px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-extrabold uppercase leading-tight mt-2 xl:mt-3">
          — Доставка из Дубая <br />
          в Казахстан за 5–7 дней
        </h2>

        <p className="text-slate-200 text-xs min-[380px]:text-sm md:text-base xl:text-lg 2xl:text-xl mt-3 md:mt-4 xl:mt-5 leading-relaxed">
          Посылки, техника и грузы для бизнеса. <br />
          Всё под ключ: склад, трекинг, таможня.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 xl:gap-5 mt-8 sm:mt-10 md:mt-14 xl:mt-16 max-w-xl md:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
        <button className="w-full sm:w-auto bg-slate-800 text-white text-xs sm:text-sm xl:text-base font-semibold px-5 sm:px-6 xl:px-8 py-3 sm:py-3 xl:py-4 rounded-full min-[380px]:whitespace-nowrap">
          РАССЧИТАТЬ СТОИМОСТЬ
        </button>

        <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs sm:text-sm xl:text-base font-semibold px-5 sm:px-6 xl:px-8 py-3 sm:py-3 xl:py-4 rounded-full min-[380px]:whitespace-nowrap">
          ОЗНАКОМИТЬСЯ С ТАРИФОМ <span>✈</span>
        </button>
      </div>
    </header>
  );
};

export default Header;