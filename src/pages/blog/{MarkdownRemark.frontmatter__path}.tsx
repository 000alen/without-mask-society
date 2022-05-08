import { graphql } from "gatsby";
import React from "react";
import { DiscordIcon } from "../../components/icons/DiscordIcon";
import { InstagramIcon } from "../../components/icons/InstagramIcon";
import { OpenseaIcon } from "../../components/icons/OpenseaIcon";
import { TwitterIcon } from "../../components/icons/TwitterIcon";
import { Title } from "../../components/Title";
import { WMSLogo } from "../../components/WMSLogo";

interface Props {
  data: {
    markdownRemark: {
      frontmatter: {
        path: string;
        date: string;
        title: string;
      };
      html: string;
    };
  };
}

export default function Template({ data }: Props) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <div>
      <div className="flex flex-col items-end gap-2 p-12 lg:flex-row lg:justify-around">
        <WMSLogo className="w-24" />

        <div className="flex flex-row gap-4">
          <a>
            <TwitterIcon />
          </a>
          <a>
            <InstagramIcon />
          </a>
          <a>
            <DiscordIcon />
          </a>
          <a>
            <OpenseaIcon />
          </a>
        </div>
      </div>

      <main className="flex flex-col items-center p-8">
        <Title>{frontmatter.title}</Title>

        <p className="italic">{frontmatter.date}</p>

        <div
          className="max-w-2xl mt-24 prose prose-invert lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>
    </div>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;
