const DEPLOY_ENV  = process.env.DEPLOY_ENV || 'lbn_published_production';


/**
 * Generate node edges
 *
 * @param {any} { node, actions, getNode }
 */
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  if (!Object.prototype.hasOwnProperty.call(node, 'meta')) {
    return;
  }

  let deploy;

  if (node.meta[DEPLOY_ENV]) {
    deploy = true;
  } else {
    deploy = false;
  }

  createNodeField({ node, name: 'deploy', value: deploy });
};


exports.sourceNodes = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    # Define the featured_media type so we know it's in the schema
    type wordpress__POST implements Node {
      featured_media: featImg
    }
    type featImg implements Node {
      source_url: String
    }
  `
  createTypes(typeDefs)
}

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
      wordpress__POST: {
        featured_media: {
          resolve: (source, args, context, info) => {

            console.log(JSON.stringify(source._links, null, 4));
            /**
             * Check to see if we have a featured image. If not, set a default.
             * We Could also set it to false if wanted to support logic like -> if (featured_image) { // do stuff }
             */
            if (source._links && source._links.self.wp_featuredmedia) {
              return info.originalResolver(source, args, context, info)
            } else {
              return info.originalResolver(
                {
                  ...source,
                  featured_media: {
                    source_url: "https://sendgrid.com/wp-content/uploads/2019/06/iStock-1011506076-2340x1000.jpg"
                  }
                },
                args,
                context,
                info
              )
            }
          }
        }
      }
  }
  createResolvers(resolvers)
}


const createPosts = require('./gatsby/createPosts');
const createPages = require('./gatsby/createPages');
const createCategories = require('./gatsby/createCategories');

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql })
  await createPages({ actions, graphql })
  await createCategories({ actions, graphql })
}
