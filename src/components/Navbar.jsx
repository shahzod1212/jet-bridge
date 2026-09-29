import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between gap-3 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-20 py-3 sm:py-4 xl:py-6 bg-transparent">
      <img
        src={`${import.meta.env.BASE_URL}logo.png`}
        alt="Jet Bridge"
        className="shrink-0 object-contain h-12 w-12 sm:h-14 sm:w-14 lg:h-[3.75rem] lg:w-[3.75rem] xl:h-20 xl:w-20 2xl:h-24 2xl:w-24"
      />

      <div className="flex items-center gap-3 sm:gap-5 xl:gap-8">
        <span className="text-white text-xs sm:text-sm xl:text-base 2xl:text-lg font-medium whitespace-nowrap">
          RU / KZ
        </span>
        <button
          type="button"
          aria-label="Меню"
          className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs sm:text-sm xl:text-base 2xl:text-lg font-semibold px-4 sm:px-8 lg:px-[3.25rem] xl:px-16 py-2 xl:py-3 rounded-full"
        >
          МЕНЮ
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-4 h-4 xl:w-5 xl:h-5"
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