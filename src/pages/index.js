import React, {Fragment} from 'react'
import { graphql } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import Post from '../components/post'
import Pagination from '../components/pagination'

import '../assets/css/bs-grid.css';
import '../assets/css/style.css';

export const posts = graphql`
  query( $skip: Int!, $limit: Int! ) {
      allMarkdownRemark (
        sort: { fields: [frontmatter___date], order: ASC }
        limit: $limit
        skip: $skip
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              category
              author
              thumbnail {
                id
                name
                publicURL
                relativePath
              }
            }
            excerpt
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `

const Index = ( props ) => {

  return (
      <Layout layoutClass="container" >

        <Head title="Home" />
    
        <div className="app__inner app">
    
          <div className="main-section">
    
            <div className="evie-posts row">

              {/* looping the posts */}
              {props.data.allMarkdownRemark.edges.map( (post, index) => {
                
                // Clearfix Fix
                if( ( ( index + 1 ) % 3 ) === 0 ) {
                  return(
                    <Fragment key={index}>
                      <Post key={post.node.id} id={post.node.id} data={post.node} />
                      <div className="clearfix"></div>
                    </Fragment>
                  )
                }
                
                return <Post key={post.node.id} id={post.node.id} data={post.node} />
              })}

              {/* end loop */}

            </div>
            
            <Pagination data={props.pageContext} />

          </div>
        </div>

        {/* else */}

        {/* when no posts */}
      </Layout>
  )
}

export default Index