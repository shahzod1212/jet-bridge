import React from "react";

const variantStyles = {
  orange: "bg-gradient-to-br from-orange-700 to-orange-400 text-white",
  white: "bg-white text-blue-900",
  navy: "bg-blue-900 text-white",
  gold: "bg-gradient-to-br from-orange-500 to-amber-300 text-white",
};

const AbilityCard = ({ variant, label, title, className = "" }) => {
  return (
    <div
      className={`flex flex-col justify-between gap-6 px-5 py-5 min-h-[150px] sm:min-h-[170px] shadow-xl shadow-blue-950/25 ${variantStyles[variant]} ${className}`}
    >
      <span className="self-start rounded-full border border-current px-3 py-1.5 text-[11px] sm:text-xs font-medium leading-tight">
        {label}
      </span>
      <p className="text-xs sm:text-sm font-extrabold uppercase leading-snug tracking-wide">
        {title}
      </p>
    </div>
  );
};

export default AbilityCard;
