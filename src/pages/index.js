import React, {Fragment} from 'react'
import { graphql, Link } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import Post from '../components/post'

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

  const { currentPage, numPages } = props.pageContext
  const firstPage = currentPage === 1
  const lastPage = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
  const nextPage = (currentPage + 1).toString()

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
            
            {/* todo: Pagination */}
            <nav className="navigation pagination" role="navigation" aria-label="Posts">
                <h2 className="screen-reader-text">Posts navigation</h2>
                <div className="nav-links">
                  {!firstPage &&
                    <Link className="next page-numbers" to={`/${prevPage}`} rel="prev">&lt; Prev</Link>
                  }
                  {!lastPage &&
                    <Link className="next page-numbers" to={`/${nextPage}`} rel="next">Next &gt;</Link>
                  }
                </div>
            </nav>

          </div>
        </div>

        {/* else */}

        {/* when no posts */}
      </Layout>
  )
}

export default Index