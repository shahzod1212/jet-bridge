import React from "react";
import Navbar from "../components/Navbar";

const buttonBase =
  "w-full sm:w-auto text-white text-[length:clamp(0.75rem,1.1vw,1rem)] font-semibold px-[clamp(1.25rem,2.4vw,2rem)] py-[0.9em] rounded-full";

const Header = () => {
  return (
    <header
      className="relative min-h-screen bg-cover bg-center flex flex-col px-[clamp(1rem,5vw,5rem)] pb-[clamp(2.5rem,4vw,4rem)] pt-4"
      style={{
        backgroundImage: `url(${import.meta.env.BASE_URL}header.png)`,
      }}
    >
      <Navbar />

      <div className="mt-[clamp(2rem,6vw,6rem)] max-w-[clamp(20rem,60vw,56rem)]">
        <h1 className="text-yellow-500 text-[length:clamp(1.875rem,7vw,8rem)] font-extrabold tracking-wide leading-none break-words">
          JET BRIDGE
        </h1>

        <h2 className="text-white text-[length:clamp(1.125rem,2.8vw,3rem)] font-extrabold uppercase leading-tight mt-[clamp(0.5rem,0.8vw,0.75rem)]">
          — Доставка из Дубая <br />в Казахстан за 5–7 дней
        </h2>

        <p className="text-slate-200 text-[length:clamp(0.75rem,1.3vw,1.25rem)] mt-[clamp(0.75rem,1.2vw,1.25rem)] leading-relaxed">
          Посылки, техника и грузы для бизнеса. <br />
          Всё под ключ: склад, трекинг, таможня.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-[clamp(0.75rem,1.2vw,1.25rem)] mt-[clamp(2rem,4vw,4rem)] max-w-[clamp(20rem,60vw,56rem)]">
        <button className={`${buttonBase} bg-slate-800`}>
          РАССЧИТАТЬ СТОИМОСТЬ
        </button>

        <button
          className={`${buttonBase} flex items-center justify-center gap-[0.5em] bg-gradient-to-r from-orange-500 to-yellow-500`}
        >
          ОЗНАКОМИТЬСЯ С ТАРИФОМ <span>✈</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
