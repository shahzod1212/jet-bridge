import React from "react";

const CloudDecorations = () => (
  <>
    <img
      src={`${import.meta.env.BASE_URL}cloud.png`}
      alt=""
      className="pointer-events-none select-none absolute left-0 top-0 translate-y-[190%] -translate-x-[30%] w-32 sm:w-44 md:w-56 lg:w-64 xl:w-72 2xl:w-80 z-20"
    />

    <img
      src={`${import.meta.env.BASE_URL}cloud.png`}
      alt=""
      className="pointer-events-none select-none absolute left-0 bottom-0 translate-y-[30%] w-56 sm:w-72 md:w-80 lg:w-[28rem] xl:w-[34rem] 2xl:w-[40rem]"
    />
    <img
      src={`${import.meta.env.BASE_URL}cloud.png`}
      alt=""
      className="pointer-events-none select-none absolute right-0 bottom-0 translate-y-[30%] w-56 sm:w-72 md:w-80 lg:w-[28rem] xl:w-[34rem] 2xl:w-[40rem]"
    />
  </>
);

export default CloudDecorations;
