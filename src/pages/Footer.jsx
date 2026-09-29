import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-blue-900 pt-20 pb-12 px-6 sm:px-10 md:px-14 min-h-[320px] sm:min-h-[380px] md:min-h-[440px] lg:min-h-[200px]">
      <img
        src={`${import.meta.env.BASE_URL}/cloud.png`}
        alt=""
        className="pointer-events-none select-none absolute -top-2 -translate-y-[40%] translate-x-[-20%] left-0 w-40 sm:w-56 md:w-64 lg:w-120 rotate-180"
      />
      <img
        src={`${import.meta.env.BASE_URL}/cloud.png`}
        alt=""
        className="pointer-events-none select-none absolute -top-2 -translate-y-[50%] translate-x-[40%] right-0 w-40 sm:w-56 md:w-64 lg:w-150 rotate-180"
      />

      <div className="relative z-10 max-w-6xl  mx-auto text-white"></div>
    </footer>
  );
};

export default Footer;