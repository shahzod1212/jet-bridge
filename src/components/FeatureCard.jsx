import React from "react";

const FeatureCard = ({ title, text, className = "" }) => (
  <div
    className={`min-w-0 px-4 py-3 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-xl xl:rounded-2xl shadow-lg ${className}`}
  >
    <h3 className="text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base font-extrabold uppercase leading-tight break-words">
      {title}
    </h3>
    <p className="mt-1.5 xl:mt-2 text-xs sm:text-sm lg:text-xs xl:text-sm 2xl:text-base leading-relaxed opacity-95 break-words">
      {text}
    </p>
  </div>
);

export default FeatureCard;