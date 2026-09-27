import React from "react";

const FeatureCard = ({ title, text, className = "" }) => (
  <div
    className={`bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-xl shadow-lg ${className}`}
  >
    <h3 className="font-extrabold uppercase leading-tight">{title}</h3>
    <p className="mt-1.5 leading-relaxed opacity-95">{text}</p>
  </div>
);

export default FeatureCard;
