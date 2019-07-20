const path = require(`path`);

/**
 * Create WordPress Posts
 */
module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions;
  const postTemplate = path.resolve(`./src/templates/page.js`);

  return graphql(
    `
    {
      site {
        siteMetadata {
          pagePrefix
        }
      }
      allWordpressPage {
        edges {
          node {
            id
            slug
            fields {
              deploy
            }
          }
        }
      }
    }
  `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const { pagePrefix } = result.data.site.siteMetadata;
    const { edges } = result.data.allWordpressPage;

    edges.forEach( edge => {
      if (edge.node.fields.deploy) {
        createPage({
          path: `${pagePrefix}/${edge.node.slug}`,
          component: postTemplate,
          context: {
            id: edge.node.id,
          }
        })
      }
    })
    // ==== END POSTS ====
    return null;
  })
}