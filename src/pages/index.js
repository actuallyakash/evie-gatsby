import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/layout'
import Post from '../components/post'

import '../assets/css/bs-grid.css';
import '../assets/css/style.css';

const Index = () => {

  const posts = useStaticQuery( graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
              category
              thumbnail {
                id
                name
                publicURL
                relativePath
              }
            }
            excerpt
            id
          }
        }
      }
    }
  `)

  return (
      <Layout class="container" >
    
        {/* <?php if ( have_posts() ) : ?> */}
    
        <div class="app__inner app">
    
          <div class="main-section">
    
            <div class="evie-posts row">

              {/* looping the posts */}
              {posts.allMarkdownRemark.edges.map( post => (
                <Post id={post.node.id} data={post.node} />
              ))}

              {/* end loop */}
          
              
    
            </div>
            
            {/* todo: Pagination */}
            
          </div>
        </div>

        {/* else */}

        {/* when no posts - get_template_part( 'template-parts/content', 'none' ); */}
      </Layout>
  )
}

export default Index