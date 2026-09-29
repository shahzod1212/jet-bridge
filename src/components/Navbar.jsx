import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-[clamp(0.5rem,2vw,2rem)] px-[clamp(1rem,5vw,5rem)] py-[clamp(0.75rem,2vw,1.5rem)] bg-transparent">
      <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt="Jet Bridge"
        className="shrink-0 object-contain w-[clamp(3rem,6vw,6rem)] h-[clamp(3rem,6vw,6rem)]"
      />

      <div className="flex items-center gap-[clamp(0.75rem,2.5vw,2rem)]">
        <span className="hidden sm:inline text-white text-[length:clamp(0.75rem,1.2vw,1.125rem)] font-medium whitespace-nowrap">
          RU / KZ
        </span>
        <button
          type="button"
          aria-label="Меню"
          className="flex items-center justify-center bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-base sm:text-[length:clamp(0.75rem,1.2vw,1.125rem)] font-semibold p-[0.75em] sm:px-[clamp(1rem,4.5vw,4rem)] sm:py-[0.6em] sm:gap-[0.5em] rounded-full"
        >
          <span className="hidden sm:inline">МЕНЮ</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-[1.5em] h-[1.5em] sm:w-[1.25em] sm:h-[1.25em]"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
