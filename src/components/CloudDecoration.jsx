import React from "react";

const CloudDecorations = () => (
  <>
    <img
      src="/cloud.png"
      alt=""
      className="pointer-events-none select-none absolute left-0 top-0 translate-y-[190%] -translate-x-[30%] w-40 sm:w-52 md:w-64 z-20"
    />
    <img
      src="/cloud.png"
      alt=""
      className="pointer-events-none select-none absolute right-0 top-0 translate-y-[180%] translate-x-[30%] w-40 sm:w-52 md:w-64 z-20"
    />

    <img
      src="/cloud.png"
      alt=""
      className="pointer-events-none select-none absolute left-0 bottom-0 translate-y-[30%] w-64 sm:w-80 md:w-[28rem] "
    />
    <img
      src="/cloud.png"
      alt=""
      className="pointer-events-none select-none absolute right-0 bottom-0 translate-y-[30%] w-64 sm:w-80 md:w-[28rem] "
    />
  </>
);

export default CloudDecorations;
