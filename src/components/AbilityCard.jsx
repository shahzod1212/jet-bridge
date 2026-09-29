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
      className={`flex flex-col justify-between gap-4 sm:gap-6 px-4 py-4 sm:px-5 sm:py-5 xl:px-6 xl:py-6 min-h-[140px] sm:min-h-[160px] xl:min-h-[190px] 2xl:min-h-[210px] min-w-0 shadow-xl shadow-blue-950/25 ${
        variantStyles[variant] ?? variantStyles.white
      } ${className}`}
    >
      <span className="self-start max-w-full break-words rounded-full border border-current px-3 py-1.5 xl:px-4 xl:py-2 text-xs sm:text-sm lg:text-[11px] xl:text-xs 2xl:text-sm font-medium leading-tight">
        {label}
      </span>
      <p className="text-sm sm:text-base lg:text-xs xl:text-sm 2xl:text-base font-extrabold uppercase leading-snug tracking-wide break-words">
        {title}
      </p>
    </div>
  );
};

export default AbilityCard;