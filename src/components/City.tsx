import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { Avatar } from "./Avatar";
import { DiscordIcon } from "./icons/DiscordIcon";
import { TwitterIcon } from "./icons/TwitterIcon";
import { Lorem } from "./Lorem";
import { RoadmapLeft } from "./RoadmapLeft";
import { RoadmapRight } from "./RoadmapRight";

export const City = () => {
  return (
    <section className="relative">
      <div>
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

      <div>
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

      <div>
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

      <div className="absolute z-[100] w-full top-0 flex flex-col justify-center">
        <h1 className="mb-8 text-8xl max-w-3xl font-bold italic text-center self-center">
          MEET THE TEAM
        </h1>

        <div className="flex flex-col space-y-4">
          <div className="flex justify-center space-x-4">
            <Avatar name="Juanito" description="3D Artist" />
            <Avatar name="Juanito" description="3D Artist" />
            <Avatar name="Juanito" description="3D Artist" />
            <Avatar name="Juanito" description="3D Artist" />
          </div>
          <div className="flex justify-center space-x-4">
            <Avatar name="Juanito" description="3D Artist" />
            <Avatar name="Juanito" description="3D Artist" />
            <Avatar name="Juanito" description="3D Artist" />
            <Avatar name="Juanito" description="3D Artist" />
          </div>
          <div className="flex justify-center space-x-4">
            <Avatar name="Juanito" description="3D Artist" />
            <Avatar name="Juanito" description="3D Artist" />
          </div>
        </div>
      </div>

      <StaticImage
        className="w-full left-0 top-0"
        src="../images/city/city.png"
        alt=""
      />
    </section>
  );
};
