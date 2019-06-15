<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>

# Gatsby + Headless WordPress + Netlify Starter

A starter skeleton that leverages the WordPress API for [Gatsby](https://github.com/gatsbyjs/gatsby/). Support for Continuous integration with Netlify. Publishing posts call the Netlify build hook. Deploy to Netlify stage or production enviroment when updating a WordPress post or page.

## Dependencies

* [LittleBot Netlify](https://github.com/justinwhall/littlebot-netlify) installed and activated on the source WordPress installation.

#### This Project was forked from the default [Gatsby Starter](https://github.com/gatsbyjs/gatsby-starter-blog)


### [Production Demo](https://gatsby-wordpress-netlify-production.netlify.com/)
### [Stage Demo](https://gatsby-wordpress-netlify-stage.netlify.com/)

## Getting Started
1. Fork Gatsby WordPress Netlify
2. Clone your forked repository
3. `npm install --global gatsby-cli` (if you don't have Gatsby CLI installed)
4. In the root of your project yarn install
5. Open your `gatsby-config.js` file and change the baseUrl to your WordPress url
6. Run `yarn develop` -- _not_ `gatsby develop`

### Netlify
_Signup for a Netlify account if you don't already have one._

1. Create a new site
2. Select "GitHub" from "Continuous Deployment"
3. Search and select your repository
4. Click "show advanced"
5. Click "new variable"
6. Add a deploy key DEPLOY_ENV with a value of lbn_published_stage
7. Click "deploy site"
8. Under Settings > Build & Deploy click "add build hook"
9. Name something that signifies environment (stage or production)
10. (Optional) Click "site options" and then "change site name". Rename to something that signifies this is the environment (stage or production).
11. (Optional) Repeat the process above a second time to create a production environment. Change the DEPLOY_ENV to lbn_published_production Optionally rename accordingly.

### Install WordPress
Install WordPress on the server of your choice or use an existing site. I recommend a stripped down theme with no front end like this. For example, this site uses [https://gatsbynetlifydemo.justinwhall.com/](https://gatsbynetlifydemo.justinwhall.com/) for its data source. which is no more than a stripped down _s theme.

### Install LittleBot Netlify plugin (Optional. Can be used without this if you don't care about building on publish.)

1. Download or clone the [LittleBot Netlify plugin](https://github.com/justinwhall/littlebot-netlify) and install on your source WordPress site.
2. Find your build hooks on Netlify **Settings > Build & Deploy**
3. Add build hooks to your WordPress install under **WP Admin > Settings > LittleBot Netlify** 

### Publish!

Support for Gutenberg out of the box. If you are using the classic editor, the default "Publish" metabox has been replaced with:

<img src="https://gatsbynetliflydemo.justinwhall.com/wp-content/uploads/2018/06/Screenshot-2018-06-29-18.50.37_preview-300x180.png" alt="publish"  />

If you update or publish a post with an environment checked, your post will be published to that environment. Likewise, if you update/publish with an environment unchecked, A post will be removed from that environment. For example, if you uncheck both environments and update, the post will be removed from both. If you publish/update with both environments checked, the post will be published to both.

### Example:

Using this starter requires configuring the gatsby-config.js file. You really only need to change BaseUrl, and hostingWPCOM if you're using WP.com rather than WP.org

```javascript
{
  resolve: 'gatsby-source-wordpress',
  options: {
    // The base url to your WP site.
    baseUrl: 'YOUR_WORDPRESS_URL',
    // WP.com sites set to true, WP.org set to false
    hostingWPCOM: false,
    // The protocol. This can be http or https.
    protocol: 'http',
    // Use 'Advanced Custom Fields' Wordpress plugin
    useACF: true,
    auth: {},
    // Set to true to debug endpoints on 'gatsby build'
    verboseOutput: false
  }
},
```

* Update GraphQL queries to match your WordPress Content. This is the query currently on the index page. You either need to add ACF's in your WordPress to match the query (in this case Project and Date), or you need to remove those aspects of the query. The featured_media isn't a problem -- it'll work even if you have posts without featured images.

```javascript
allWordpressPost {
      edges {
        node {
          featured_media {
            source_url
          }
          author {
            name
            avatar_urls {
              wordpress_24
              wordpress_48
              wordpress_96
            }
          }
          date
          slug
          title
          modified
          excerpt
          id
          acf {
            project
            date
          }
          categories {
            name
          }
          tags {
            name
          }
          content
        }
      }
    }
```

* Finally, you'll probably want to update the SiteConfig to match your info, because right now it has mine. 🤠
* Suggestions:
  * Use the Prism WP Plugin to pass code blocks down.
  * If you give an ACF to a single post, you must give it to EVERY post, or GraphQL gets confused.

### Notes

[Ruben Harutyunyan](https://github.com/Vagr9K) did most of the hard work with [Gatsby Advanced Starter](https://github.com/Vagr9K/gatsby-advanced-starter).
The rest of the credit is due to [Gatsby](https://github.com/gatsbyjs/gatsby/).

WARNING: Make sure to edit `static/robots.txt` to include your domain for the sitemap!
