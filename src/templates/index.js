import React from 'react'
import { graphql } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'
import Archive from '../components/archive'
import Pagination from '../components/pagination'

import '../assets/css/bs-grid.css';
import '../assets/css/style.css';

export const posts = graphql`
  query ($skip: Int!, $limit: Int!) {
      allMarkdownRemark (
        sort: { fields: [frontmatter___date], order: ASC }
        skip: $skip
        limit: $limit
      ) {
        edges {
          node {
            frontmatter {
              title
              date
              category
              author
              authorPic
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

            <Archive data={props.data.allMarkdownRemark.edges} />
            
            <Pagination data={props.pageContext} />

          </div>

        </div>
        
      </Layout>
  )
}

export default Index