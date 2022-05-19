import { StaticImage } from "gatsby-plugin-image";
import React from "react";

interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ForestBackground: React.FC<Props> = ({
  className = "",
  style = {},
}) => {
  return (
    <div className={`${className} select-none`} style={style}>
      {/* <StaticImage
        className="!absolute w-[37.6%] left-0 top-[69.6%]"
        src="../../images/forest/P1.png"
        alt=""
      /> */}

      {/*<StaticImage
        className="!absolute w-[32.8%] left-[20.6%] top-[72.8%]"
        src="../../images/forest/P2.png"
        alt=""
      />*/}

      {/* <StaticImage
        className="!absolute w-[32.4%] left-[35.1%] top-[74%]"
        src="../../images/forest/P3.png"
        alt=""
      /> */}

      {/* <StaticImage
        className="!absolute w-[37.8%] left-[46.2%] top-[70.4%]"
        src="../../images/forest/P4.png"
        alt=""
      /> */}

      {/* <StaticImage
        className="!absolute w-[31.9%] left-[68.3%] top-[72.3%]"
        src="../../images/forest/P5.png"
        alt=""
      /> */}

      {/* <StaticImage
        className="w-full h-auto"
        src="../../images/forest/forest.png"
        alt=""
      /> */}

      {/* <img
        className="!absolute bottom-0 w-full parallax"
        src={P}
        alt=""
        data-depth="1"
      /> */}

      {/* <img
        className="top-0 left-0 w-full parallax"
        src={B}
        alt=""
        data-depth="0.2"
      /> */}

      {/* <StaticImage
        className="w-full -z-10"
        src="../../images/forest/static.png"
        alt=""
      /> */}

      {/* <StaticImage
        className="w-full -z-20"
        src="../../images/forest/static2.png"
        alt=""
      /> */}

      <StaticImage
        className="w-full -z-20"
        src="../../images/forest/empty.png"
        alt=""
      />
    </div>
  );
};
