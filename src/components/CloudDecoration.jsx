import React from "react";

const CloudDecorations = () => (
  <>
    <img
      src={`${import.meta.env.BASE_URL}cloud.png`}
      alt=""
      className="pointer-events-none select-none absolute left-0 top-0 translate-y-[190%] -translate-x-[30%] w-[clamp(8rem,22vw,20rem)] z-20"
    />

    <img
      src={`${import.meta.env.BASE_URL}cloud.png`}
      alt=""
      className="pointer-events-none select-none absolute left-0 bottom-0 translate-y-[30%] w-[clamp(14rem,42vw,40rem)]"
    />
    <img
      src={`${import.meta.env.BASE_URL}cloud.png`}
      alt=""
      className="pointer-events-none select-none absolute right-0 bottom-0 translate-y-[30%] w-[clamp(14rem,42vw,40rem)]"
    />
  </>
);

export default CloudDecorations;
