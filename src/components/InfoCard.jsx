import React from "react";

const InfoCard = ({ title, text, Icon, className = "" }) => (
  <div
    className={`relative bg-gradient-to-b from-blue-950 to-blue-500 text-white rounded-xl p-4 flex flex-col min-h-[190px] sm:min-h-[220px] ${className}`}
  >
    <div className="flex items-start justify-between gap-2">
      <h3 className="text-xs sm:text-sm font-extrabold uppercase leading-tight">
        {title}
      </h3>
      <div className="bg-white rounded-lg p-1.5 shrink-0">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-blue-800" />
      </div>
    </div>
    <p className="text-[11px] sm:text-xs leading-relaxed opacity-90 mt-auto">
      {text}
    </p>
  </div>
);

export default InfoCard;
