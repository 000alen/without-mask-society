import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { BlogEntryFrontmatter } from "../typings";

export const useBlogEntries = () => {
  return useStaticQuery(graphql`
    query {
      allMarkdownRemark(filter: { frontmatter: { title: { ne: "landing" } } }) {
        edges {
          node {
            frontmatter {
              title
              path
              date(formatString: "MMMM DD, YYYY")
            }
          }
        }
      }
    }
  `)
    .allMarkdownRemark.edges.map(({ node }: { node: any }) => node)
    .map(
      ({ frontmatter }: { frontmatter: any }) => frontmatter
    ) as BlogEntryFrontmatter[];
};
