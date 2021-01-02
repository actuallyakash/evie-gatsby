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
                            {/* todo: category link */}
                            <Link to="" className="category-link">{props.data.frontmatter.category}</Link>
                        </span>
                    }

                    {props.data.frontmatter.date &&
                    <span className="date">
                        {/* todo: date & time attributes */}
                        <time className="entry-date published updated" dateTime="2015-05-25T12:52:33+00:00">{props.data.frontmatter.date}</time>
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
                    <div className="user__img__container">
                        {/* todo: user image */}
                        <img src="https://streetviewhub.com/shots/100x100" alt="" />
                    </div>

                    
                    <span className="user__name">
                        by <span className="author stress">
                            {/* todo: user link */}
                            <Link to="#">{props.data.frontmatter.author}</Link>
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