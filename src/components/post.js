import React from 'react'
import { Link } from 'gatsby'

const Post = ( props ) => {

  return (
    <article id={props.id} className="col-md-4"> 
        <div className="evie__post">

            {props.data.frontmatter.thumbnail &&
            <div className="evie__img__container">
                <Link to={`/blog/${props.data.fields.slug}`}>
                    <img src={props.data.frontmatter.thumbnail.publicURL} alt={props.data.frontmatter.thumbnail.name} />
                </Link>
            </div>
            }

            <div className="post__details">

                <div className="post__meta">
                    
                    {props.data.frontmatter.category &&
                        <span className="evie__category">
                            <Link to={`/search?s=${props.data.frontmatter.category}`} className="category-link">{props.data.frontmatter.category}</Link>
                        </span>
                    }

                    {props.data.frontmatter.date &&
                    <span className="date">
                        <time dateTime={props.data.frontmatter.date}>{props.data.frontmatter.date}</time>
                    </span>
                    }
                </div>

                <div className="post__content">
                    
                    <h3 className="post__heading">
                        <Link to={`/blog/${props.data.fields.slug}`}>
                            {props.data.frontmatter.title}
                        </Link>
                    </h3>
                    
                    <Link to={`/blog/${props.data.fields.slug}`}>
                        <p className="excerpt"> {props.data.excerpt} </p>
                    </Link>
                    
                </div>
                
                {props.data.frontmatter.author &&
                <div className="user__info">
                    {props.data.frontmatter.authorPic &&
                    <div className="user__img__container">
                        <img src={props.data.frontmatter.authorPic} alt={props.data.frontmatter.author} />
                    </div>}
                    
                    <span className="user__name">
                        by <span className="author stress">
                            <Link to={`/search?s=${props.data.frontmatter.author}`}>{props.data.frontmatter.author}</Link>
                        </span>
                    </span>
                </div>
                }
            </div>
        </div>
    </article>
  )
}

export default Post