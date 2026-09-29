import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-blue-900 pt-[clamp(3rem,6vw,5rem)] pb-[clamp(2rem,4vw,3rem)] px-[clamp(1rem,5vw,5rem)] min-h-[clamp(15rem,20vw,17.5rem)]">
      <img
        src={`${import.meta.env.BASE_URL}cloud.png`}
        alt=""
        className="pointer-events-none select-none absolute -top-2 -translate-y-[40%] translate-x-[-20%] left-0 w-[clamp(10rem,32vw,44rem)] rotate-180"
      />
      <img
        src={`${import.meta.env.BASE_URL}cloud.png`}
        alt=""
        className="pointer-events-none select-none absolute -top-2 -translate-y-[50%] translate-x-[40%] right-0 w-[clamp(10rem,38vw,55rem)] rotate-180"
      />

      <div className="relative z-10 max-w-[clamp(20rem,90vw,90rem)] mx-auto text-white"></div>
    </footer>
  );
};

export default Footer;
