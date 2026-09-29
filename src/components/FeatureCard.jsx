import React from "react";

const FeatureCard = ({ title, text, className = "" }) => (
  <div
    className={`min-w-0 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-[clamp(0.75rem,4cqw,1.25rem)] shadow-lg [container-type:inline-size] ${className}`}
  >
    <div className="min-w-0 p-[clamp(0.625rem,4.5cqw,1.25rem)]">
      <h3 className="text-[length:clamp(0.6875rem,4.6cqw,1.125rem)] font-extrabold uppercase leading-tight break-words [text-wrap:balance]">
        {title}
      </h3>
      <p className="mt-[clamp(0.25rem,1.8cqw,0.5rem)] text-[length:clamp(0.6875rem,4.2cqw,1rem)] leading-relaxed opacity-95 break-words">
        {text}
      </p>
    </div>
  </div>
);

export default FeatureCard;
