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
      className={`flex min-w-0 flex-col shadow-xl shadow-blue-950/25 [container-type:inline-size] ${
        variantStyles[variant] ?? variantStyles.white
      } ${className}`}
    >
      <div className="flex min-w-0 flex-1 flex-col justify-between min-h-[clamp(8.75rem,52cqw,13rem)] gap-[clamp(1rem,7cqw,1.75rem)] p-[clamp(0.875rem,6cqw,1.5rem)]">
        <span className="self-start max-w-full break-words rounded-full border border-current px-[0.9em] py-[0.45em] text-[length:clamp(0.6875rem,4.4cqw,0.9375rem)] font-medium leading-tight">
          {label}
        </span>
        <p className="text-[length:clamp(0.75rem,5.4cqw,1.25rem)] font-extrabold uppercase leading-snug tracking-wide break-words [text-wrap:balance]">
          {title}
        </p>
      </div>
    </div>
  );
};

export default AbilityCard;
