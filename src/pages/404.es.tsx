import { graphql } from "gatsby";
import React from "react";

import { usePreferredLanguage } from "../components/usePreferredLanguage";
import { NotFoundLayout } from "../layouts/404";

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        twitter_url: string;
        instagram_url: string;
        discord_url: string;
        opensea_url: string;
        digitalrocket_url: string;
        mailing_text: string;
      };
    };
  };
}

export default function Template({ data }: Props) {
  const { markdownRemark } = data;
  const { frontmatter } = markdownRemark;

  usePreferredLanguage();

  return <NotFoundLayout {...frontmatter} />;
}

export const pageQuery = graphql`
  {
    markdownRemark(
      frontmatter: { title: { eq: "landing" }, language: { eq: "es" } }
    ) {
      frontmatter {
        twitter_url
        instagram_url
        discord_url
        opensea_url
        digitalrocket_url
        mailing_text
      }
    }
  }
`;
