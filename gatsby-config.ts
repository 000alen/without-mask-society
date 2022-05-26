import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Without Mask Society`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Without Mask Society",
        short_name: "WMS",
        start_url: "/",
        background_color: "#000000",
        theme_color: "#4ade80",
        display: "standalone",
        icon: "src/images/favicon.jpg",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "landing",
        path: `${__dirname}/landing`,
      },
    },
    "gatsby-transformer-remark",
  ],
};

export default config;
