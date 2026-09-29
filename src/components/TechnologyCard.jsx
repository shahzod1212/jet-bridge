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
    className={`relative rounded-2xl overflow-hidden text-white flex flex-col z-10 ${className}`}
  >
    <img
      src={`${import.meta.env.BASE_URL}/technology-card.png`}
      alt=""
      className="absolute inset-0 w-full h-full object-cover -z-20"
    />
    <div
      className={`absolute inset-0 bg-gradient-to-b ${overlayColors[color]} -z-10`}
    />

    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl sm:text-2xl font-extrabold uppercase text-center leading-tight">
        {title}
      </h3>

      <p className="text-xs sm:text-sm mt-5 leading-relaxed">{forText}</p>

      <ul className="text-xs sm:text-sm mt-4 space-y-2 list-disc list-inside marker:text-white">
        {features.map((f, i) => (
          <li key={i} className="leading-snug">
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-5 text-xs sm:text-sm space-y-0.5">
        <p>{price}</p>
        <p>{duration}</p>
      </div>

      <div className="flex-1 flex items-center justify-center py-6">
        <Icon className="h-16 sm:h-20 w-16 sm:w-20 text-white" />
      </div>

      <button className="bg-white text-blue-900 text-sm font-semibold rounded-full py-3 mt-auto shadow-md">
        Оставить заявку
      </button>
    </div>
  </div>
);

export default TechnologyCard;