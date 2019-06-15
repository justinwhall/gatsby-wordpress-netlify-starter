
const _ = require(`lodash`)
const path = require(`path`)

/**
 * Create WordPress Category Pages
 */
module.exports = async ({ actions, graphql }) => {

  const { createPage } = actions
  const categoriesTemplate = path.resolve(`./src/templates/category.js`)

  return graphql(
    `
    {
      allWordpressCategory {
        edges {
          node {
            id
            link
            path
            name
            count
            slug
          }
        }
      }
    }
  `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const categories = result.data.allWordpressCategory.edges;
    categories.forEach(cat => {
      createPage({
        path: `/category/${cat.node.slug}/`,
        component: categoriesTemplate,
        context: {
          slug: cat.node.slug,
          name: cat.node.name,
        }
      })
    })

    // ==== END POSTS ====
    return null
  })
}