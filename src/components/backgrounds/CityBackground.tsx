import React from "react";
import { StaticImage } from "gatsby-plugin-image";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const CityBackground: React.FC<Props> = ({
  className = "",
  style = {},
}) => {
  return (
    <div className={`${className} select-none`} style={style}>
      {/* <div>
        <StaticImage
          className="!absolute w-[34.3%] left-[5.9%] top-[60.2%]"
          src="../../images/city/P1.png"
          alt=""
        /> 

        <StaticImage
          className="!absolute w-[34.5%] left-[4.1%] top-[60.6%]"
          src="../../images/city/R1.png"
          alt=""
        />
      </div> */}

      {/* <div>
        <StaticImage
          className="!absolute peer w-[30.2%] left-[28.1%] top-[57.9%]"
          src="../../images/city/P2.png"
          alt=""
        />

        <StaticImage
          className="!absolute peer w-[30.1%] left-[28.4%] top-[67%]"
          src="../../images/city/R2.png"
          alt=""
        />
      </div> */}

      {/* <div>
        <StaticImage
          className="!absolute peer w-[31.2%] left-[54.3%] top-[59.8%]"
          src="../../images/city/P3.png"
          alt=""
        />

        <StaticImage
          className="!absolute peer w-[31.4%] left-[54.4%] top-[68.7%]"
          src="../../images/city/R3.png"
          alt=""
        />
      </div> */}

      {/* <StaticImage
        className="!absolute bottom-0 w-full"
        src="../../images/city/P.png"
        alt=""
      /> */}

      {/* <StaticImage
        className="top-0 left-0 w-full"
        src="../../images/city/city.png"
        alt=""
      /> */}

      {/* <img
        className="!absolute bottom-0 w-full parallax"
        src={PR}
        alt=""
        data-depth="0.9"
      /> */}

      {/* <img
        className="!absolute bottom-0 w-full parallax"
        src={P}
        alt=""
        data-depth="0.9"
      /> */}

      {/* <img
        className="top-0 left-0 w-full parallax"
        src={B}
        alt=""
        data-depth="0.1"
      /> */}

      <StaticImage
        className="w-full -z-10"
        src="../../images/city/static.png"
        alt=""
      />
    </div>
  );
};
