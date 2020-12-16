import React from 'react'
import { Link } from 'gatsby'

const Post = ( props ) => {
  return (
    <article id={props.id} class="col-md-4"> 
        <div class="evie__post">

            {/* todo: article thumbnail */}
            {/* <img src={props.data.frontmatter.thumbnail.relativePath} alt={props.data.frontmatter.thumbnail.name} /> */}

            <div class="post__details">

                <div class="post__meta">
                    
                    {props.data.frontmatter.category &&
                        <span class="evie__category">
                            <a href="category-link" title="">{props.data.frontmatter.category}</a>
                        </span>
                    }

                    {props.data.frontmatter.date &&
                    <span class="date">
                        <Link to="#">
                            <time class="entry-date published updated" datetime="2015-05-25T12:52:33+00:00">{props.data.frontmatter.date}</time>
                        </Link>
                    </span> 
                    }
                </div>

                <div class="post__content">
                    
                    <h3 class="post__heading">
                        <Link to="#">
                            {props.data.frontmatter.title}
                        </Link>
                    </h3>
                    
                    <Link to="#">
                        <p class="excerpt"> {props.data.excerpt} </p>
                    </Link>
                    
                </div>

                <div class="user__info">
                    <div class="user__img__container">
                        <img src="https://streetviewhub.com/shots/100x100" alt="" />
                    </div>

                    {props.data.frontmatter.author &&
                        <span class="user__name">
                            by <span class="author stress">
                                <a class="url fn n" href="#">{props.data.frontmatter.author}</a>
                            </span>
                        </span>
                    }
                </div>

            </div>

        </div>

    </article>
  )
}

export default Post