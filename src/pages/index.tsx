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
import { graphql } from "gatsby";
import { LandingFrontmatter } from "../typings";

gsap.registerPlugin(ScrollTrigger);

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: LandingFrontmatter;
        };
      }[];
    };
  };
}

export default ({ data }: Props) => {
  const { allMarkdownRemark } = data;
  const { edges } = allMarkdownRemark;
  const nodes = edges.map(({ node }) => node);
  const frontmatters = nodes.map(({ frontmatter }) => frontmatter);
  const frontmatter = frontmatters.find(
    (frontmatter: any) => !Object.values(frontmatter).includes(null)
  )!;

  return (
    <div>
      <Stars />

      <Nav />

      <Hero
        hero_title={frontmatter.hero_title}
        hero_buttons={frontmatter.hero_buttons}
      />

      <AboutSection
        about_title={frontmatter.about_title}
        about_text={frontmatter.about_text}
      />

      {/* Team */}
      <City
        city_title={frontmatter.city_title}
        city_team={frontmatter.city_team}
      />

      {/* Roadmap */}
      <Forest
        forest_title={frontmatter.forest_title}
        forest_roadmap={frontmatter.forest_roadmap}
      />

      <Stars />

      {/* TODO */}
      <Planets
        planets_title={frontmatter.planets_title}
        planets_text={frontmatter.planets_text}
      />

      {/* FAQ */}
      <Pool
        pool_title={frontmatter.pool_title}
        pool_questions={frontmatter.pool_questions}
      />

      <Footer />
    </div>
  );
};

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            about_text
            about_title
            city_title
            pool_title
            planets_text
            planets_title
            hero_title
            forest_title
            city_team {
              member_avatar
              member_description
              member_name
              member_social {
                social_name
                social_url
              }
            }
            forest_roadmap {
              roadmap_image
              roadmap_direction
              roadmap_title
              roadmap_text
              roadmap_buttons {
                roadmap_button_color
                roadmap_button_icon
                roadmap_button_text
                roadmap_button_url
              }
            }
            hero_buttons {
              button_color
              button_icon
              button_text
              button_url
            }
            pool_questions {
              pool_answer
              pool_question
            }
          }
        }
      }
    }
  }
`;
