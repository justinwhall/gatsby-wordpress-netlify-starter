import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const PageTemplate = (props) => {

  const post = this.props.data.wordpressPage;
  const siteTitle = this.props.data.site.siteMetadata.title;

  return (
    <Layout location={this.props.location} title={siteTitle}>
      <SEO
        title={post.title}
        description={post.excerpt}
      />
        <h1>{post.title} </h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <hr
        style={{
          marginBottom: rhythm(1),
        }}
        />
      <Bio />
    </Layout>
  )
}

export default PageTemplate

export const pageQuery = graphql`
  query PageByID($id: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    wordpressPage(id: { eq: $id }) {
      slug
      title
      id
      # featured_media {
      #   source_url
      # }
      content
    }
  }
`
