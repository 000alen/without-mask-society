import React, { useRef, useEffect } from "react";

import { AboutSection } from "../components/AboutSection";
import { City } from "../components/City";
import { Footer } from "../components/Footer";
import { Forest } from "../components/Forest";
import { Hero } from "../components/Hero";
import { Nav } from "../components/Nav";
import { Planets } from "../components/Planets";
import { Pool } from "../components/Pool";
import { Stars } from "../components/Stars";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const IndexPage = () => {
  return (
    <div>
      <Stars />

      <Nav />

      <Hero />

      <AboutSection />

      {/* Team */}
      <City />

      {/* Roadmap */}
      <Forest />

      <Stars />

      {/* TODO */}
      <Planets />

      {/* FAQ */}
      <Pool />

      <Footer />
    </div>
  );
};

export default IndexPage;
