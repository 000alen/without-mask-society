import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const PoolBackground: React.FC<Props> = ({
  className = "",
  style = {},
}) => {
  return (
    <div className={`${className} select-none`} style={style}>
      {/* <StaticImage
        className="!absolute w-[6.3%] left-[40.2%] top-[55.8%]"
        src="../../images/pool/P1.png"
        alt=""
      />

      <StaticImage
        className="!absolute w-[82.9.8%] left-[0.4%] top-[66.8%]"
        src="../../images/pool/P2.png"
        alt=""
      />

      <StaticImage
        className="!absolute w-[12%] left-[63.7%] top-[40.6%]"
        src="../../images/pool/P3.png"
        alt=""
      />

      <StaticImage
        className="!absolute w-[43.6%] left-[56.3%] top-[63.5%]"
        src="../../images/pool/P4.png"
        alt=""
      />

      <StaticImage
        className="!absolute w-[17.2%] left-[72.5%] top-[53.5%]"
        src="../../images/pool/P5.png"
        alt=""
      />

      <StaticImage
        className="!absolute w-[22.3%] left-[49.2%] top-[54.4%]"
        src="../../images/pool/P6.png"
        alt=""
      />

      <StaticImage
        className="!absolute w-[18.5%] left-[11.8%] top-[56.5%]"
        src="../../images/pool/P7.png"
        alt=""
      /> */}

      {/* <StaticImage
        className="w-full h-auto"
        src="../../images/pool/pool.png"
        alt=""
      /> */}

      {/* <StaticImage
        className="w-full -z-10"
        src="../../images/pool/static.png"
        alt=""
      /> */}

      <StaticImage
        className="w-full -z-10"
        src="../../images/pool/empty.png"
        alt=""
      />
    </div>
  );
};
