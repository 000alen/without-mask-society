import { graphql } from "gatsby";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

import { AboutSection } from "../components/AboutSection";
import { Blogs } from "../components/Blogs";
import { City } from "../components/City";
import { Footer } from "../components/Footer";
import { Forest } from "../components/Forest";
import { Hero } from "../components/Hero";
import { Nav } from "../components/Nav";
import { Planets } from "../components/Planets";
import { Pool } from "../components/Pool";
import { Stars } from "../components/Stars";
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
    <div className="scroll-smooth">
      {/* <div className="fixed w-6 h-6 p-4 bg-gray-600 text-center rounded-full z-[1000] bottom-8 right-8">
        up
      </div> */}

      <Stars />

      <Nav
        twitter_url={frontmatter.twitter_url}
        instagram_url={frontmatter.instagram_url}
        discord_url={frontmatter.discord_url}
        opensea_url={frontmatter.opensea_url}
        digitalrocket_url={frontmatter.digitalrocket_url}
      />

      <Hero
        hero_title={frontmatter.hero_title}
        hero_buttons={frontmatter.hero_buttons}
        hero_showcase_title={frontmatter.hero_showcase_title}
        hero_showcase={frontmatter.hero_showcase}
      />

      <AboutSection
        about_title={frontmatter.about_title}
        about_text={frontmatter.about_text}
      />

      <Stars />

      {/* Team */}
      <City
        city_title={frontmatter.city_title}
        city_members={frontmatter.city_members}
      />

      {/* Roadmap */}
      <Forest
        forest_title={frontmatter.forest_title}
        forest_milestones={frontmatter.forest_milestones}
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

      {/* Blogs */}
      <Blogs />

      <Footer
        twitter_url={frontmatter.twitter_url}
        instagram_url={frontmatter.instagram_url}
        discord_url={frontmatter.discord_url}
        opensea_url={frontmatter.opensea_url}
        digitalrocket_url={frontmatter.digitalrocket_url}
      />
    </div>
  );
};

export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            twitter_url
            instagram_url
            discord_url
            opensea_url
            digitalrocket_url

            hero_title
            hero_buttons {
              hero_button_color
              hero_button_icon
              hero_button_text
              hero_button_url
            }
            hero_showcase_title
            hero_showcase {
              hero_showcase_unmasked
              hero_showcase_masked
              hero_showcase_url
            }

            about_text
            about_title

            city_title
            city_members {
              city_member_avatar
              city_member_description
              city_member_name
              city_member_socials {
                city_member_social_name
                city_member_social_url
              }
            }

            forest_title
            forest_milestones {
              forest_milestone_direction
              forest_milestone_image
              forest_milestone_text
              forest_milestone_title
              forest_milestone_buttons {
                forest_milestone_button_icon
                forest_milestone_button_color
                forest_milestone_button_text
                forest_milestone_button_url
              }
            }

            planets_text
            planets_title

            pool_title
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
