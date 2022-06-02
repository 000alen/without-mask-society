import { graphql, Link } from "gatsby";
import React from "react";

import { Footer } from "../components/Footer";
import { DiscordIcon } from "../components/icons/DiscordIcon";
import { InstagramIcon } from "../components/icons/InstagramIcon";
import { OpenseaIcon } from "../components/icons/OpenseaIcon";
import { TwitterIcon } from "../components/icons/TwitterIcon";
import { Title } from "../components/Title";
import { WMSLogo } from "../components/WMSLogo";

interface Props {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            twitter_url: string;
            instagram_url: string;
            discord_url: string;
            opensea_url: string;
            digitalrocket_url: string;
            mailing_text: string;
          };
        };
      }[];
    };
  };
}

export default function Template({ data }: Props) {
  const { allMarkdownRemark } = data;
  const globalFrontmatter = allMarkdownRemark.edges
    .map(({ node }) => node)
    .map(({ frontmatter }) => frontmatter)
    .find((frontmatter: any) => !Object.values(frontmatter).includes(null))!;

  return (
    <div>
      <div className="flex flex-col items-end gap-2 p-12 lg:flex-row lg:justify-around">
        <Link to="/">
          <WMSLogo className="w-24" />
        </Link>

        <div className="flex flex-row gap-4">
          <a href={globalFrontmatter.twitter_url} target="_blank">
            <TwitterIcon />
          </a>
          <a href={globalFrontmatter.instagram_url} target="_blank">
            <InstagramIcon />
          </a>
          <a href={globalFrontmatter.discord_url} target="_blank">
            <DiscordIcon />
          </a>
          <a href={globalFrontmatter.opensea_url}>
            <OpenseaIcon />
          </a>
        </div>
      </div>

      <main className="flex flex-col items-center p-8">
        <Title>Not Found 😥</Title>

        <p className="font-mono italic">
          We cannot find the page you requested.
        </p>
      </main>

      <Footer
        landing={false}
        twitter_url={globalFrontmatter.twitter_url}
        instagram_url={globalFrontmatter.instagram_url}
        discord_url={globalFrontmatter.discord_url}
        opensea_url={globalFrontmatter.opensea_url}
        digitalrocket_url={globalFrontmatter.digitalrocket_url}
        mailing_text={globalFrontmatter.mailing_text}
      />
    </div>
  );
}

// export const pageQuery = graphql`
//   query {
//     allMarkdownRemark {
//       edges {
//         node {
//           frontmatter {
//             twitter_url
//             instagram_url
//             discord_url
//             opensea_url
//             digitalrocket_url
//             mailing_text
//           }
//         }
//       }
//     }
//   }
// `;
