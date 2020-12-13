import React from 'react'
import { Link } from 'gatsby'

const Post = ( props ) => {
  return (
    <article id={props.id}> 
        <div class="evie__post">

        {/* todo: article thumbnail */}

            <div class="post__details">

                <div class="post__meta">
                    
                    {/* todo: dynamic category */}
                    <span class="evie__category">
                        <a href="category-link" title="">Category</a>
                    </span>

                    {/* dynamic date */}
                    <span class="date">
                        <a href="http://evie.local/?p=2314" rel="bookmark">
                            <time class="entry-date published updated" datetime="2015-05-25T12:52:33+00:00">May 25, 2015</time>
                        </a>
                    </span> 
                    
                </div>

                <div class="post__content">
                    
                    <h3 class="post__heading">
                        <a href="' . esc_url( get_permalink() ) . '" rel="bookmark">Title goes here</a>
                    </h3>
                    
                    
                    <a href="#">
                        <p class="excerpt"> excerpt goes here.. </p>
                    </a>
                    
                </div>

                <div class="user__info">
                    <div class="user__img__container">
                        <img src="https://streetviewhub.com/shots/100x100" alt="" />
                    </div>

                    <span class="user__name">
                        by <span class="author stress">
                            <a class="url fn n" href="#">Ladiz Washroom</a>
                        </span>
                    </span>
                </div>

            </div>

        </div>

    </article>
  )
}

export default Post