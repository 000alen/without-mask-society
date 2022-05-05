import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const Pool = () => {
  return (
    <div className="relative bg-black">
      <StaticImage
        className="!absolute peer z-50 bottom-0 w-[14.6%] left-[61%] hover:scale-125 hover:drop-shadow-xl transition-all"
        src="../../images/old/pool/P1.png"
        alt=""
      />

      <StaticImage
        className="!absolute peer z-50 w-[3.2%] left-[81.0%] top-[49.4%] hover:scale-125 hover:drop-shadow-xl transition-all"
        src="../../images/old/pool/P4.png"
        alt=""
      />

      <StaticImage
        className="!absolute peer z-50 w-[9%] left-[54.7%] top-[33.3%] hover:scale-125 hover:drop-shadow-xl transition-all"
        src="../../images/old/pool/P2.png"
        alt=""
      />

      <StaticImage
        className="!absolute peer z-50 w-[7.8%] left-[78.3%] top-[58%] hover:scale-125 hover:drop-shadow-xl transition-all"
        src="../../images/old/pool/P3.png"
        alt=""
      />

      <StaticImage
        className="!absolute peer z-50 w-[17.5%] left-[33.9%] top-[61%] hover:scale-125 hover:drop-shadow-xl transition-all"
        src="../../images/old/pool/P5.png"
        alt=""
      />

      <StaticImage
        className="!absolute peer z-50 w-[15.7%] left-[19.6%] bottom-0 hover:scale-125 hover:drop-shadow-xl transition-all"
        src="../../images/old/pool/P6.png"
        alt=""
      />

      <StaticImage
        className="!absolute peer z-50 w-[13.8%] left-[6.1%] bottom-0 hover:scale-125 hover:drop-shadow-xl transition-all"
        src="../../images/old/pool/P7.png"
        alt=""
      />

      <StaticImage
        className="w-full h-auto peer-hover:opacity-25 transition-all"
        src="../../images/old/pool/pool.png"
        alt=""
      />
    </div>
  );
};
