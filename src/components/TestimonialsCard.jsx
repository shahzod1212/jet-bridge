import React from "react";

const TestimonialCard = ({ name, location, text, avatar }) => {
  return (
    <div className="flex-shrink-0 snap-start w-[240px] sm:w-[260px] rounded-2xl bg-white p-5 shadow-lg shadow-black/20">
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
        <p className="text-sm font-bold leading-tight text-slate-950">
          {name}
          <br />
          {location}
        </p>
      </div>

      <div className="mt-4 border-t border-slate-200" />

      <p className="mt-4 text-xs text-slate-600 leading-relaxed">{text}</p>
    </div>
  );
};

export default TestimonialCard;
