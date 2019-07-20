import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

const CategoryTemplate = (props) => {
  const {
    title,
    postPrefix,
  } = props.data.site.siteMetadata;
  const posts = props.data.allWordpressPost.edges;

  return (
    <Layout location={props.location} title={title}>
      <SEO
        title={`Archive | ${props.pageContext.name}`}
        description={`Archive for ${props.pageContext.name} category`}
      />
      <h1>Archive | {props.pageContext.name}</h1>
        {posts.map(({ node }) => {
          return (
            <div key={node.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
              <Link style={{ boxShadow: `none` }} to={`${postPrefix}/${node.slug}`}>
                  {node.title}
                </Link>
              </h3>
              <small>{node.date}</small>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
              />
            </div>
          )
        })}
        <hr
        style={{
          marginBottom: rhythm(1),
        }}
        />
      <Bio />
    </Layout>
  )
}

export default CategoryTemplate;

export const pageQuery = graphql`
query category($slug: String) {
  site {
    siteMetadata {
      title
      author
      postPrefix
    }
  }
  allWordpressPost(filter: {categories: {elemMatch: {slug: {eq: $slug}}}}) {
    edges {
      node {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        modified
        excerpt
        id
        categories {
          name
          id
          slug
        }
        content
      }
    }
  }
}
`
