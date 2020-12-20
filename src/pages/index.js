import React, {Fragment} from 'react'
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
  `)

  return (
      <Layout class="container" >
    
        {/* <?php if ( have_posts() ) : ?> */}
    
        <div className="app__inner app">
    
          <div className="main-section">
    
            <div className="evie-posts row">

              {/* looping the posts */}
              {posts.allMarkdownRemark.edges.map( (post, index) => {
                
                // Clearfix Fix
                if( index === 3 ) {
                  return(
                    <Fragment>
                      <div className="clearfix"></div>
                      <Post key={post.node.id} id={post.node.id} data={post.node} />
                    </Fragment>
                  )
                }
                
                return <Post key={post.node.id} id={post.node.id} data={post.node} />
              })}

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