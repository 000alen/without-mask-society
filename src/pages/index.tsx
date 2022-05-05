import * as React from "react";
import { Nav } from "../components/Nav";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { City } from "../components/City";
import { Forest } from "../components/Forest";
import { Planets } from "../components/Planets";
import { Pool } from "../components/Pool";
import { Hero } from "../components/Hero";

const IndexPage = () => {
  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>

      <Nav />

      <Hero />

      <AboutSection />

      <City />

      <Forest />

      <Planets />

      <Pool />

      <Footer />
    </>
  );
};

export default IndexPage;
