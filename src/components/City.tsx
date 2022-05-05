import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export const City = () => {
  return (
    <section>
      <div className="relative">
        {/* group */}
        <div>
          {/* group-hover:scale-125 group-hover:drop-shadow-xl transition-all */}
          <StaticImage
            className="!absolute z-50 w-[34.3%] left-[5.9%] top-[60.2%]"
            src="../images/city/P1.png"
            alt=""
          />

          <StaticImage
            className="!absolute z-50 w-[34.5%] left-[4.1%] top-[60.6%]"
            src="../images/city/R1.png"
            alt=""
          />
        </div>

        <div className="group">
          <StaticImage
            className="!absolute peer z-50 w-[30.2%] left-[28.1%] top-[57.9%]"
            src="../images/city/P2.png"
            alt=""
          />

          <StaticImage
            className="!absolute peer z-50 w-[30.1%] left-[28.4%] top-[67%]"
            src="../images/city/R2.png"
            alt=""
          />
        </div>

        <div className="group">
          <StaticImage
            className="!absolute peer z-50 w-[31.2%] left-[54.3%] top-[59.8%]"
            src="../images/city/P3.png"
            alt=""
          />

          <StaticImage
            className="!absolute peer z-50 w-[31.4%] left-[54.4%] top-[68.7%]"
            src="../images/city/R3.png"
            alt=""
          />
        </div>

        <StaticImage
          className="w-full h-auto"
          src="../images/city/city.png"
          alt=""
        />
      </div>
    </section>
  );
};
