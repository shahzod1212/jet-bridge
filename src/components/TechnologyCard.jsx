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
    className={`relative min-w-0 rounded-2xl xl:rounded-3xl overflow-hidden text-white flex flex-col z-10 ${className}`}
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

    <div className="p-5 sm:p-6 lg:p-5 xl:p-8 2xl:p-10 flex flex-col flex-1">
      <h3 className="text-lg min-[380px]:text-xl sm:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl font-extrabold uppercase text-center leading-tight break-words">
        {title}
      </h3>

      <p className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base mt-4 sm:mt-5 xl:mt-6 leading-relaxed break-words">
        {forText}
      </p>

      <ul className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base mt-3 sm:mt-4 xl:mt-5 space-y-2 xl:space-y-3 list-disc list-inside marker:text-white">
        {features.map((f, i) => (
          <li key={i} className="leading-snug break-words">
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-4 sm:mt-5 xl:mt-6 text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base space-y-0.5 xl:space-y-1">
        <p className="break-words">{price}</p>
        <p className="break-words">{duration}</p>
      </div>

      <div className="flex-1 flex items-center justify-center py-5 sm:py-6 xl:py-8">
        <Icon className="h-14 w-14 sm:h-20 sm:w-20 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24 text-white" />
      </div>

      <button
        type="button"
        className="bg-white text-blue-900 text-sm xl:text-base 2xl:text-lg font-semibold rounded-full py-3 xl:py-4 mt-auto shadow-md hover:bg-blue-50 transition-colors"
      >
        Оставить заявку
      </button>
    </div>
  </div>
);

export default TechnologyCard;