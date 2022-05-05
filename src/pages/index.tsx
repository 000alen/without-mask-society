import * as React from "react";
import { Nav } from "../components/Nav";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { City } from "../components/City";
import { Forest } from "../components/Forest";
import { Planets } from "../components/Planets";
import { Pool } from "../components/Pool";
import { Hero } from "../components/Hero";
import { Stars } from "../components/Stars";

const IndexPage = () => {
  return (
    <>
      <Stars />

      <Nav />

      <Hero />

      <AboutSection />

      <City />

      {/* Roadmap */}
      <Forest />

      <Stars />

      <Planets />

      <Pool />

      <Footer />
    </>
  );
};

export default IndexPage;
