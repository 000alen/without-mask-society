import { graphql } from "gatsby";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { Helmet } from "react-helmet";

import { AboutSection } from "../components/AboutSection";
import { Blob } from "../components/Blob";
import { Blog } from "../components/Blog";
import { City } from "../components/City";
import { FAQ } from "../components/FAQ";
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
    markdownRemark: {
      frontmatter: LandingFrontmatter;
    };
  };
}

export const isBrowser = typeof window !== "undefined";

export default ({ data }: Props) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  return (
    <div className="scroll-smooth">
      <Helmet>
        <title>Without Mask Society</title>
      </Helmet>

      <Stars />

      <a id="top"></a>

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
        city_text={frontmatter.city_text}
        city_members={frontmatter.city_members}
      />

      {/* Roadmap */}
      <Forest
        forest_title={frontmatter.forest_title}
        forest_text={frontmatter.forest_text}
        forest_milestones={frontmatter.forest_milestones}
      />

      <Stars />

      {/* Donations */}
      <Planets
        planets_title={frontmatter.planets_title}
        planets_text={frontmatter.planets_text}
      />

      {/* Benefits */}
      <Pool
        pool_title={frontmatter.pool_title}
        pool_text={frontmatter.pool_text}
      />

      {/* <div className="z-20 flex flex-col gap-32 lg:justify-around lg:items-start lg:flex-row"> */}
      <Blob>
        <FAQ
          faq_title={frontmatter.faq_title}
          faq_questions={frontmatter.faq_questions}
        />

        <Blog />
      </Blob>
      {/* </div> */}

      <Footer
        twitter_url={frontmatter.twitter_url}
        instagram_url={frontmatter.instagram_url}
        discord_url={frontmatter.discord_url}
        opensea_url={frontmatter.opensea_url}
        digitalrocket_url={frontmatter.digitalrocket_url}
        mailing_text={frontmatter.mailing_text}
      />
    </div>
  );
};

export const pageQuery = graphql`
  query LandingPageQuery {
    markdownRemark(frontmatter: { title: { eq: "landing" } }) {
      frontmatter {
        twitter_url
        instagram_url
        discord_url
        opensea_url
        digitalrocket_url

        hero_title
        hero_buttons {
          hero_button_icon
          hero_button_color
          hero_button_text
          hero_button_url
        }
        hero_showcase {
          hero_showcase_url
          hero_showcase_unmasked
          hero_showcase_masked
        }

        about_title
        about_text

        city_title
        city_text
        city_members {
          city_member_avatar
          city_member_description
          city_member_name
          # city_member_socials {
          #   city_member_social_name
          #   city_member_social_url
          # }
        }

        forest_title
        forest_text
        forest_milestones {
          forest_milestone_percent
          forest_milestone_text
          forest_milestone_icon
        }

        planets_title
        planets_text

        pool_title
        pool_text

        faq_title
        faq_questions {
          faq_answer
          faq_question
        }

        mailing_text
      }
    }
  }
`;
