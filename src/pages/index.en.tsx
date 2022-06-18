import { graphql } from "gatsby";
import React from "react";

import { usePreferredLanguage } from "../components/usePreferredLanguage";
import { IndexLayout } from "../layouts";
import { LandingFrontmatter } from "../typings";

interface Props {
  data: {
    markdownRemark: {
      frontmatter: LandingFrontmatter;
    };
  };
}

export default ({ data }: Props) => {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  usePreferredLanguage();

  return <IndexLayout {...frontmatter} />;
};

export const pageQuery = graphql`
  {
    markdownRemark(
      frontmatter: { title: { eq: "landing" }, language: { eq: "en" } }
    ) {
      frontmatter {
        twitter_url
        instagram_url
        discord_url
        opensea_url
        digitalrocket_url
        hero_title
        hero_buttons {
          button_icon
          button_color
          button_text
          button_url
        }
        hero_showcase {
          showcase_url
          showcase_unmasked
          showcase_masked
        }
        welcome_title
        welcome_text
        about_title
        about_text
        team_title
        team_text
        team {
          member_avatar
          member_description
          member_name
        }
        roadmap_title
        roadmap_text
        roadmap {
          milestone_percent
          milestone_text
          milestone_icon
        }
        donations_title
        donations_text
        benefits_title
        benefits {
          benefit_title
          benefit_text
        }
        faq_title
        faq_questions {
          answer
          question
        }
        mailing_text
        shop_nav_title
        blog_nav_title
      }
    }
  }
`;
