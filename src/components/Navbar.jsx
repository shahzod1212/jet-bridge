import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-transparent">
      <img
        src={`${import.meta.env.BASE_URL}/logo.png`}
        alt="Jet Bridge"
        className="h-15 w-15"
      />

      <div className="flex items-center gap-6">
        <span className="text-white text-sm font-medium">RU / KZ</span>
        <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500  text-white text-sm font-semibold px-13 py-2 rounded-full">
          МЕНЮ
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
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