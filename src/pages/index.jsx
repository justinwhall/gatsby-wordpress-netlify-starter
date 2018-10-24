import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import PostListing from '../components/Posts/PostListing/PostListing'
import SEO from '../components/Accessories/SEO/SEO'
import config from '../../data/SiteConfig'
import TopNavigation from '../components/Layout/Navigation/Navigation'

class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allWordpressPost.edges
    return (
      <HomeContainer>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <TopNavigation />
        <MainContentContainer>
          <h1>Gatsby + WordPress + Netlifly</h1>
          <p style={{ textAlign: 'center' }}>
            Created by{' '}
            <a
              style={{ fontSize: '1.6rem' }}
              href="https://www.justinwhall.com"
            >
            Justin W. Hall
            </a>.
            {' '}You should follow him on{' '}
            <a
              style={{ fontSize: '1.6rem' }}
              href="https://twitter.com/justinwhall"
            >
              Twitter.
            </a>
          </p>
          <Divider />
          <PostListing postEdges={postEdges} />
        </MainContentContainer>
      </HomeContainer>
    )
  }
}

export default Index

const HomeContainer = styled.div``

const Divider = styled.div`
  margin: 50px 0;
  border-bottom: 1px solid darkgray;
`

const MainContentContainer = styled.main`
  width: 600px;
  margin: 50px auto;

  h1 {
    text-align: center;
    font-weight: 700;
    margin-bottom: 25px;
  }

  p {
    font-size: 16px;
    margin-bottom: 25px;
  }

  pre {
    background-color: grey;
  }
`

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allWordpressPost(filter: {fields: {deploy: {eq: true}}}) {
      edges {
        node {
          date
          slug
          title
          modified
          excerpt
          id
          featured_media {
            source_url
          }
          author {
            name
          }
          categories {
            name
          }
          content
        }
      }
    }
  }
`
