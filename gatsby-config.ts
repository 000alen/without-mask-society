import type { GatsbyConfig } from "gatsby";
import languages from "./src/data/languages";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Without Mask Society`,
    siteUrl: `https://without-mask-society.netlify.app/`,
    languages,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
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
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "showcase",
        path: `${__dirname}/showcase`,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-HG5RTYTJWH"],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyForNull: "any",
        langKeyDefault: languages.defaultLangKey,
        useLangKeyLayout: true,
        prefixDefault: false,
        markdownRemark: {
          postPage: "src/templates/blog.tsx",
          query: `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    path,
                  }
                }
              }
            }
          }
          `,
        },
      },
    },
  ],
};

export default config;
