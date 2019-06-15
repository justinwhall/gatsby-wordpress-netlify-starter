const DEPLOY_ENV = process.env.DEPLOY_ENV || 'lbn_published_production';

/**
 * Generate node edges
 *
 * @param {any} { node, actions, getNode }
 */
exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;

  /**
   * If these don't exist, the LBN WordPress Plugin isn't installed – so build all posts.
   */
  if (
    !Object.prototype.hasOwnProperty.call(node, 'meta') ||
    !Object.prototype.hasOwnProperty.call(node.meta, 'lbn_published_production')
    ) {
    createNodeField({ node, name: 'deploy', value: true });
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


const createPosts = require('./gatsby/createPosts');
const createPages = require('./gatsby/createPages');
const createCategories = require('./gatsby/createCategories');

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql });
  await createPages({ actions, graphql });
  await createCategories({ actions, graphql });
}