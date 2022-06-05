import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";
import { Helmet } from "react-helmet";

import { City } from "../components/City";
import { Forest } from "../components/Forest";
import { Hero } from "../components/Hero";
import { LandingFooter } from "../components/LandingFooter";
import { Nav } from "../components/Nav";
import { Planets } from "../components/Planets";
import { Pool } from "../components/Pool";
import { Stars } from "../components/Stars";
import { LandingFrontmatter } from "../typings";

gsap.registerPlugin(ScrollTrigger);

export const isBrowser = typeof window !== "undefined";

export const IndexLayout = (frontmatter: LandingFrontmatter) => {
  return (
    <div>
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

      <Stars />

      {/* About & Team */}
      <City
        about_title={frontmatter.about_title}
        about_text={frontmatter.about_text}
        team_title={frontmatter.team_title}
        team_text={frontmatter.team_text}
        team={frontmatter.team}
      />

      {/* Roadmap */}
      <Forest
        roadmap_title={frontmatter.roadmap_title}
        roadmap_text={frontmatter.roadmap_text}
        roadmap={frontmatter.roadmap}
      />

      <Stars />

      {/* Donations & Benefits */}
      <Planets
        donations_title={frontmatter.donations_title}
        donations_text={frontmatter.donations_text}
        benefits_title={frontmatter.benefits_title}
        benefits={frontmatter.benefits}
      />

      {/* FAQ & Blogs */}
      <Pool
        faq_title={frontmatter.faq_title}
        faq_questions={frontmatter.faq_questions}
      />

      <LandingFooter
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

// export const pageQuery = graphql`
//   query LandingPageQuery {
//     markdownRemark(frontmatter: { title: { eq: "landing" } }) {
//       frontmatter {
//         twitter_url
//         instagram_url
//         discord_url
//         opensea_url
//         digitalrocket_url

//         hero_title
//         hero_buttons {
//           button_icon
//           button_color
//           button_text
//           button_url
//         }
//         hero_showcase {
//           showcase_url
//           showcase_unmasked
//           showcase_masked
//         }

//         about_title
//         about_text
//         team_title
//         team_text
//         team {
//           member_avatar
//           member_description
//           member_name
//           # member_socials {
//           #   social_name
//           #   social_url
//           # }
//         }

//         roadmap_title
//         roadmap_text
//         roadmap {
//           milestone_percent
//           milestone_text
//           milestone_icon
//         }

//         donations_title
//         donations_text
//         benefits_title
//         benefits {
//           benefit_title
//           benefit_text
//         }

//         faq_title
//         faq_questions {
//           answer
//           question
//         }

//         mailing_text
//       }
//     }
//   }
// `;
