import React from "react";

const TestimonialCard = ({ name, location, text, avatar }) => {
  return (
    <div className="flex flex-shrink-0 snap-start w-[clamp(15rem,24vw,24rem)] rounded-[clamp(1rem,2vw,1.75rem)] bg-white shadow-lg shadow-black/20 [container-type:inline-size]">
      <div className="flex min-w-0 flex-1 flex-col p-[clamp(1rem,7cqw,1.75rem)]">
        <div className="flex items-center gap-[clamp(0.75rem,4.5cqw,1rem)]">
          <img
            src={avatar}
            alt=""
            loading="lazy"
            decoding="async"
            className="w-[clamp(3rem,18cqw,4rem)] h-[clamp(3rem,18cqw,4rem)] rounded-full object-cover flex-shrink-0 bg-slate-200"
          />
          <p className="min-w-0 break-words text-[length:clamp(0.875rem,5.4cqw,1.125rem)] font-bold leading-tight text-slate-950">
            {name}
            <br />
            {location}
          </p>
        </div>

        <div className="mt-[clamp(1rem,6cqw,1.25rem)] border-t border-slate-200" />

        <p className="mt-[clamp(1rem,6cqw,1.25rem)] text-[length:clamp(0.75rem,4.6cqw,1.125rem)] text-slate-600 leading-relaxed break-words">
          {text}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
