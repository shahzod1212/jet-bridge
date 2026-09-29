import React from "react";

const InfoCard = ({ title, text, Icon, className = "" }) => (
  <div
    className={`relative min-w-0 bg-gradient-to-b from-blue-950 to-blue-500 text-white rounded-xl xl:rounded-2xl p-4 sm:p-5 lg:p-4 xl:p-6 flex flex-col min-h-[180px] sm:min-h-[210px] xl:min-h-[250px] 2xl:min-h-[280px] ${className}`}
  >
    <div className="flex items-start justify-between gap-2 xl:gap-3">
      <h3 className="min-w-0 break-words text-sm sm:text-base lg:text-xs xl:text-sm 2xl:text-base font-extrabold uppercase leading-tight">
        {title}
      </h3>
      <div className="bg-white rounded-lg p-1.5 xl:p-2 shrink-0">
        <Icon className="w-4 h-4 sm:w-5 sm:h-5 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 text-blue-800" />
      </div>
    </div>
    <p className="pt-4 xl:pt-5 text-xs sm:text-sm lg:text-[11px] xl:text-xs 2xl:text-sm leading-relaxed opacity-90 mt-auto break-words">
      {text}
    </p>
  </div>
);

export default InfoCard;
