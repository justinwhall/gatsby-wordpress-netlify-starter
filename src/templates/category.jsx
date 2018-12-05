// import React from 'react'
// import Helmet from 'react-helmet'
// import styled from 'styled-components'
// import config from '../../data/SiteConfig'
// import Layout from "../components/Layout/layout"
// import TopNavigation from '../components/Layout/Navigation/Navigation'
// import PostListing from '../components/Posts/PostListing/PostListing'

// export default class CategoryTemplate extends React.Component {
//   render() {
//     const category = this.props.pageContext.id
//     const postEdges = this.props.data.allWordpressPost.edges
//     return (
//       <Layout location={props.location}>
//         <div className="tag-container">
//           <Helmet title={`Posts tagged as "${category}" | ${config.siteTitle}`} />
//           <TopNavigation />
//           <MainContentContainer>
//             <h1>Category: {category}</h1>
//             <PostListing postEdges={postEdges} />
//           </MainContentContainer>
//         </div>
//       </Layout>
//     )
//   }
// }
// const MainContentContainer = styled.main`
//   max-width: 600px;
//   margin: 50px auto;

//   h1 {
//     text-align: center;
//     font-weight: 700;
//     margin-bottom: 25px;
//   }

//   p {
//     font-size: 16px;
//     margin-bottom: 25px;
//   }

//   pre {
//     background-color: grey;
//   }
// `

// /* eslint no-undef: "off" */
// export const pageQuery = graphql`
// query category($id: String) {
//   allWordpressPost (
//     filter: {
//       categories: {
//         name: {
//           eq: $id
//         }
//       }
//     }
//   ) {
//     edges {
//       node {
//         author {
//           name
//           avatar_urls {
//             wordpress_24
//             wordpress_48
//             wordpress_96
//           }
//         }
//         date
//         slug
//         title
//         modified
//         excerpt
//         id
//         categories {
//           name
//         }
//         content
//       }
//     }
//   }
// }
// `
