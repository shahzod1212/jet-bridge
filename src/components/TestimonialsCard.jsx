import React from "react";

const TestimonialCard = ({ name, location, text, avatar }) => {
  return (
    <div className="flex flex-col flex-shrink-0 snap-start w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px] xl:w-[340px] 2xl:w-[380px] rounded-2xl xl:rounded-3xl bg-white p-4 sm:p-5 xl:p-6 2xl:p-7 shadow-lg shadow-black/20">
      <div className="flex items-center gap-3 xl:gap-4">
        <img
          src={avatar}
          alt=""
          loading="lazy"
          decoding="async"
          className="w-12 h-12 xl:w-14 xl:h-14 2xl:w-16 2xl:h-16 rounded-full object-cover flex-shrink-0 bg-slate-200"
        />
        <p className="min-w-0 break-words text-sm xl:text-base 2xl:text-lg font-bold leading-tight text-slate-950">
          {name}
          <br />
          {location}
        </p>
      </div>

      <div className="mt-4 xl:mt-5 border-t border-slate-200" />

      <p className="mt-4 xl:mt-5 text-xs sm:text-sm xl:text-base 2xl:text-lg text-slate-600 leading-relaxed break-words">
        {text}
      </p>
    </div>
  );
};

export default TestimonialCard;