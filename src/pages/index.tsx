import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { Nav } from "../components/Nav";
import { AboutSection } from "../components/AboutSection";
import { FAQSection } from "../components/FAQSection";
import { RoadmapSection } from "../components/RoadmapSection";
import { ShopSection } from "../components/ShopSection";
import { TeamSection } from "../components/TeamSection";
import { Footer } from "../components/Footer";
import { OpenseaIcon } from "../components/icons/OpenseaIcon";
import { DiscordIcon } from "../components/icons/DiscordIcon";
import { FancyButton } from "../components/FancyButton";
import { Showcase } from "../styles/Showcase";

const IndexPage = () => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <Nav />

      <section className="flex flex-col items-center">
        <StaticImage
          className="w-[50%] z-50"
          src="../images/logo.png"
          alt="Without Mask Society Logo"
        />

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
        src="../images/posters/night.jpg"
        alt=""
      />

      <StaticImage
        className="w-full h-auto"
        src="../images/posters/forest.jpg"
        alt=""
      />

      {/* Planets */}

      <div className="relative bg-black">
        <StaticImage
          className="!absolute peer z-50 bottom-0 w-[14.6%] left-[61%] hover:scale-125 hover:drop-shadow-xl transition-all"
          src="../images/pool/P1.png"
          alt=""
        />

        <StaticImage
          className="!absolute peer z-50 w-[3.2%] left-[81.0%] top-[49.4%] hover:scale-125 hover:drop-shadow-xl transition-all"
          src="../images/pool/P4.png"
          alt=""
        />

        <StaticImage
          className="!absolute peer z-50 w-[9%] left-[54.7%] top-[33.3%] hover:scale-125 hover:drop-shadow-xl transition-all"
          src="../images/pool/P2.png"
          alt=""
        />

        <StaticImage
          className="!absolute peer z-50 w-[7.8%] left-[78.3%] top-[58%] hover:scale-125 hover:drop-shadow-xl transition-all"
          src="../images/pool/P3.png"
          alt=""
        />

        <StaticImage
          className="!absolute peer z-50 w-[17.5%] left-[33.9%] top-[61%] hover:scale-125 hover:drop-shadow-xl transition-all"
          src="../images/pool/P5.png"
          alt=""
        />

        <StaticImage
          className="!absolute peer z-50 w-[15.7%] left-[19.6%] bottom-0 hover:scale-125 hover:drop-shadow-xl transition-all"
          src="../images/pool/P6.png"
          alt=""
        />

        <StaticImage
          className="!absolute peer z-50 w-[13.8%] left-[6.1%] bottom-0 hover:scale-125 hover:drop-shadow-xl transition-all"
          src="../images/pool/P7.png"
          alt=""
        />

        <StaticImage
          className="w-full h-auto peer-hover:opacity-25 transition-all"
          src="../images/EmptyPoolC.png"
          alt=""
        />
      </div>
    </>
  );
};

export default IndexPage;
