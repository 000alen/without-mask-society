import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Nav } from "../components/Nav";
import { AboutSection } from "../components/AboutSection";
import { OpenseaIcon } from "../components/icons/OpenseaIcon";
import { DiscordIcon } from "../components/icons/DiscordIcon";
import { FancyButton } from "../components/FancyButton";
import { Showcase } from "../components/Showcase";
import { WMSLogo } from "../components/WMSLogo";
import { Pool } from "../components/Pool";

const IndexPage = () => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <Nav />

      <section className="flex flex-col items-center">
        <WMSLogo className="w-[50%]" />

        <p className="text-6xl font-bold text-center">
          THE NFTS THAT <br /> CLEAN THE WORLD
        </p>

        <div className="flex flex-row justify-center space-x-2">
          <FancyButton className="mt-24" label="Buy on OpenSea">
            <OpenseaIcon />
          </FancyButton>

          <FancyButton className="mt-24" label="Go to Discord" color="#5865F2">
            <DiscordIcon />
          </FancyButton>
        </div>

        <Showcase className="mt-24" />
      </section>

      <AboutSection />

      <StaticImage
        className="w-full h-auto"
        src="../images/city_bg.png"
        alt=""
      />

      <StaticImage
        className="w-full h-auto"
        src="../images/forest_bg.png"
        alt=""
      />

      <StaticImage
        className="w-full h-auto"
        src="../images/planets_bg.png"
        alt=""
      />

      <StaticImage
        className="w-full h-auto"
        src="../images/pool_bg.png"
        alt=""
      />

      {/* TODO: Planets */}

      {/* <Pool /> */}
    </>
  );
};

export default IndexPage;
