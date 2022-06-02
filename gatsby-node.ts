import path from "path";

// @ts-ignore
export const createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  const blogTemplate = path.resolve("./src/templates/blog.tsx");

  // @ts-ignore
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.path) {
      createPage({
        path: `blog/${node.frontmatter.path}`,
        component: blogTemplate,
        context: {
          // Pass the path to the page component
          _path: node.frontmatter.path,
        }
      });
    }
  });
};
