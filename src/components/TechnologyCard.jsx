import React from "react";

const overlayColors = {
  orange: "from-orange-500 via-orange-400/15 to-orange-300",
  blue: "from-blue-900 via-cyan-700/20 to-blue-500",
};

const TechnologyCard = ({
  title,
  forText,
  features,
  price,
  duration,
  Icon,
  color,
  className = "",
}) => (
  <div
    className={`relative min-w-0 rounded-[clamp(1rem,2vw,1.75rem)] overflow-hidden text-white flex flex-col z-10 [container-type:inline-size] ${className}`}
  >
    <img
      src={`${import.meta.env.BASE_URL}technology-card.png`}
      alt=""
      className="absolute inset-0 w-full h-full object-cover -z-20"
    />
    <div
      className={`absolute inset-0 bg-gradient-to-b ${
        overlayColors[color] ?? overlayColors.orange
      } -z-10`}
    />

    <div className="flex flex-1 flex-col min-w-0 p-[clamp(1.25rem,7cqw,2.5rem)]">
      <h3 className="text-[length:clamp(1.125rem,7cqw,1.875rem)] font-extrabold uppercase text-center leading-tight break-words [text-wrap:balance]">
        {title}
      </h3>

      <p className="text-[length:clamp(0.75rem,4.2cqw,1rem)] mt-[clamp(1rem,5.5cqw,1.5rem)] leading-relaxed break-words">
        {forText}
      </p>

      <ul className="text-[length:clamp(0.75rem,4.2cqw,1rem)] mt-[clamp(0.75rem,4.5cqw,1.25rem)] space-y-[clamp(0.5rem,2.5cqw,0.75rem)] list-disc list-inside marker:text-white">
        {features.map((f, i) => (
          <li key={i} className="leading-snug break-words">
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-[clamp(1rem,5cqw,1.5rem)] text-[length:clamp(0.75rem,4.2cqw,1rem)] space-y-[0.2em]">
        <p className="break-words">{price}</p>
        <p className="break-words">{duration}</p>
      </div>

      <div className="flex-1 flex items-center justify-center py-[clamp(1.25rem,6cqw,2rem)]">
        <Icon className="w-[clamp(3.5rem,20cqw,6rem)] h-[clamp(3.5rem,20cqw,6rem)] text-white" />
      </div>

      <button
        type="button"
        className="bg-white text-blue-900 text-[length:clamp(0.875rem,4.4cqw,1.125rem)] font-semibold rounded-full py-[0.85em] mt-auto shadow-md hover:bg-blue-50 transition-colors"
      >
        Оставить заявку
      </button>
    </div>
  </div>
);

export default TechnologyCard;
