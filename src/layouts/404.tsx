import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-google-gtag";
import React from "react";

import { Footer } from "../components/Footer";
import { DiscordIcon } from "../components/icons/DiscordIcon";
import { InstagramIcon } from "../components/icons/InstagramIcon";
import { OpenseaIcon } from "../components/icons/OpenseaIcon";
import { TwitterIcon } from "../components/icons/TwitterIcon";
import { Title } from "../components/Title";
import { WMSLogo } from "../components/WMSLogo";

interface Props {
  twitter_url: string;
  instagram_url: string;
  discord_url: string;
  opensea_url: string;
  digitalrocket_url: string;
  mailing_text: string;
}

export const NotFoundLayout = ({
  twitter_url,
  instagram_url,
  discord_url,
  opensea_url,
  digitalrocket_url,
  mailing_text,
}: Props) => {
  return (
    <div>
      <div className="flex flex-col items-end gap-2 p-12 lg:flex-row lg:justify-around">
        <Link to="/">
          <WMSLogo className="w-24" />
        </Link>

        <div className="flex flex-row gap-4">
          <OutboundLink href={twitter_url} target="_blank">
            <TwitterIcon />
          </OutboundLink>
          <OutboundLink href={instagram_url} target="_blank">
            <InstagramIcon />
          </OutboundLink>
          {/* <OutboundLink href={discord_url} target="_blank">
            <DiscordIcon />
          </OutboundLink> */}
          <OutboundLink href={opensea_url}>
            <OpenseaIcon />
          </OutboundLink>
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
        twitter_url={twitter_url}
        instagram_url={instagram_url}
        discord_url={discord_url}
        opensea_url={opensea_url}
        digitalrocket_url={digitalrocket_url}
        mailing_text={mailing_text}
      />
    </div>
  );
};

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
