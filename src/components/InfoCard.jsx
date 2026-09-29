import React from "react";

const InfoCard = ({ title, text, Icon, className = "" }) => (
  <div
    className={`relative flex min-w-0 flex-col bg-gradient-to-b from-blue-950 to-blue-500 text-white rounded-[clamp(0.75rem,1.6vw,1.25rem)] [container-type:inline-size] ${className}`}
  >
    <div className="flex min-w-0 flex-1 flex-col min-h-[clamp(11rem,65cqw,17.5rem)] p-[clamp(0.875rem,6cqw,1.5rem)]">
      <div className="flex items-start justify-between gap-[clamp(0.5rem,3cqw,0.75rem)]">
        <h3 className="min-w-0 break-words text-[length:clamp(0.75rem,5cqw,1.125rem)] font-extrabold uppercase leading-tight [text-wrap:balance]">
          {title}
        </h3>
        <div className="bg-white rounded-lg p-[clamp(0.3rem,2.2cqw,0.5rem)] shrink-0">
          <Icon className="w-[clamp(1rem,6.5cqw,1.75rem)] h-[clamp(1rem,6.5cqw,1.75rem)] text-blue-800" />
        </div>
      </div>
      <p className="pt-[clamp(0.75rem,5cqw,1.25rem)] text-[length:clamp(0.6875rem,4cqw,0.9375rem)] leading-relaxed opacity-90 mt-auto break-words">
        {text}
      </p>
    </div>
  </div>
);

export default InfoCard;
