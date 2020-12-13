import React from 'react'

import Layout from '../components/layout'
import Post from '../components/post'

import '../assets/css/bs-grid.css';
import '../assets/css/style.css';

const Index = () => {
  return (
      <Layout >
    
        {/* <?php if ( have_posts() ) : ?> */}
    
        <div class="app__inner app">
    
          <div class="main-section">
    
            <div class="evie-posts row">

              {/* looping the posts */}

              <Post id="1" />

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