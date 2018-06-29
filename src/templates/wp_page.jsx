import React, { Component } from 'react'
import styled from 'styled-components'
import TopNavigation from '../components/Layout/Navigation/Navigation'

class wpPage extends Component {
  render() {
    const pageNode = {
      title: this.props.data.wordpressPage.title,
      content: this.props.data.wordpressPage.content,
      id: this.props.data.wordpressPage.id,
      slug: this.props.data.wordpressPage.slug
    }

    return (
      <div>
        <TopNavigation pages={this.props.data.allWordpressPage} />
        <MainContentContainer>
          <h1>{pageNode.title}</h1>
          <main>
            <div dangerouslySetInnerHTML={{ __html: pageNode.content }} />
          </main>
        </MainContentContainer>
      </div>
    )
  }
}

export default wpPage

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
  query WordpressPage($slug: String) {
    wordpressPage(slug: { eq: $slug }) {
      id
      wordpress_id
      slug
      title
      template
      content
    }
    allWordpressPage {
      edges {
        node {
          slug
          title
          id
        }
      }
    }
  }
`
