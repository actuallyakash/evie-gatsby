import React from 'react'
import { graphql } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'

import Head from '../components/head'
import Layout from '../components/layout'
import Archive from '../components/archive'

export const postQuery = graphql`
  query {
    localSearchPosts {
      index
      store
    }
    allMarkdownRemark (
      sort: { fields: [frontmatter___date], order: ASC }
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
          fields {
            slug
          }
        }
      }
    }
  }
  `

const Search = ( props ) => {

  const { search } = window.location
  const query = new URLSearchParams(search).get('s')

  const reconcileObject = ( results ) => {
    return results.map(post => {
      const { id, title, excerpt, date, slug, category, author, thumbnail } = post;
      return { node: { id, excerpt, fields: { slug }, frontmatter: { title, date, category, author, thumbnail } } };
    })
  }
  
  const results = useFlexSearch( query, props.data.localSearchPosts.index, props.data.localSearchPosts.store )
  const posts = reconcileObject( results )

  return (
    <Layout layoutClass="container">

      <Head title={`${query} | Search`} />

      <div className="app__inner app">
    
        <div className="main-section">

          <Archive data={posts} />

        </div>

      </div>
      
    </Layout>
  )
}

export default Search