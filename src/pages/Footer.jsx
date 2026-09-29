import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-blue-900 pt-12 pb-8 sm:pt-16 sm:pb-10 lg:pt-20 lg:pb-12 px-4 sm:px-8 md:px-12 lg:px-14 xl:px-20 min-h-[240px] sm:min-h-[280px] md:min-h-[320px] lg:min-h-[200px] xl:min-h-[240px] 2xl:min-h-[280px]">
      <img
        src={`${import.meta.env.BASE_URL}cloud.png`}
        alt=""
        className="pointer-events-none select-none absolute -top-2 -translate-y-[40%] translate-x-[-20%] left-0 w-40 sm:w-56 md:w-64 lg:w-[30rem] xl:w-[36rem] 2xl:w-[44rem] rotate-180"
      />
      <img
        src={`${import.meta.env.BASE_URL}cloud.png`}
        alt=""
        className="pointer-events-none select-none absolute -top-2 -translate-y-[50%] translate-x-[40%] right-0 w-40 sm:w-56 md:w-64 lg:w-[37.5rem] xl:w-[45rem] 2xl:w-[55rem] rotate-180"
      />

      <div className="relative z-10 max-w-6xl xl:max-w-7xl 2xl:max-w-screen-2xl mx-auto text-white"></div>
    </footer>
  );
};

export default Footer;