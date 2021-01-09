import React from 'react'
import { graphql, Link } from 'gatsby'
import { Helmet } from 'react-helmet'

import Head from '../components/head'
import Layout from '../components/layout'
import ContentHeader from '../components/content-header'

export const query = graphql`
    query( $slug: String! ) {
        markdownRemark ( fields: { slug: { eq: $slug } } )
        {
            frontmatter {
                title
                date
                thumbnail {
                    id
                    name
                    publicURL
                    relativePath
                }
                category
                tags
                author
                authorPic
                authorBio
            }
            html
        }
    }
`

const SinglePost = ( props ) => {
    
    return (
        <Layout layoutClass="single__post">

            {/* Fix for header navbar scroll animation */}
            {props.data.markdownRemark.frontmatter.thumbnail ?
                ''
                :
                <Helmet>
                    <script>document.getElementsByTagName('header')[0].classList.add('navbar--extended')</script>
                </Helmet>
            }

            <Head isThumbnail={props.data.markdownRemark.frontmatter.thumbnail} title={props.data.markdownRemark.frontmatter.title} />

            <ContentHeader data={props.data.markdownRemark.frontmatter} />

            <div className="container text-container text-container--center">

				{/* Article Section */}
				<div className="app__inner">
                    <div className="app__main" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
				</div>

                {props.data.markdownRemark.frontmatter.tags &&
				<div className="evie__tags">
                    {props.data.markdownRemark.frontmatter.tags.split(',').map( (tag, index) => (
                        <span id={index} className="evie__tag">
                            <a href={`/search?s=${tag.trim()}`} title={`Tag: ${tag.trim()}`}>{tag.trim().charAt(0).toUpperCase() + tag.trim().slice(1)}</a>
                        </span>
                    ))}
                </div>}

				{/* Author Card */}
                {props.data.markdownRemark.frontmatter.author &&
				<div className="author__card">
                    {props.data.markdownRemark.frontmatter.authorPic &&
                    <img src={props.data.markdownRemark.frontmatter.authorPic} alt={props.data.markdownRemark.frontmatter.author} height="110" width="110" />
                    }
					
					<span className="about-heading">About Author</span>

					<h4>
                        <Link to={`/search?s=${props.data.markdownRemark.frontmatter.author}`} title={`Posts by ${props.data.markdownRemark.frontmatter.author}`} rel="author">{props.data.markdownRemark.frontmatter.author}</Link>
                    </h4>
                    
                    {props.data.markdownRemark.frontmatter.authorBio &&
					<p>{props.data.markdownRemark.frontmatter.authorBio}</p>
                    }
					
					{/* Author links */}
					<div className="author-links">

                        <Link to="#" target="_blank">
                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                        </Link>

                        <Link to="#" target="_blank">
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </Link>

                        <Link to="#" target="_blank">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </Link>

                        <Link to="#" target="_blank">
                            <i className="fab fa-youtube" aria-hidden="true"></i>
                        </Link>

                        <Link to="#" target="_blank">
                            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                        </Link>

                        <Link to="#" target="_blank">
                            <i className="fab fa-spotify" aria-hidden="true"></i>
                        </Link>

                        <Link to="#" target="_blank">
                            <i className="fab fa-github" aria-hidden="true"></i>
                        </Link>

                        <Link to="#" target="_blank">
                            <i className="fab fa-whatsapp" aria-hidden="true"></i>
                        </Link>

                        <Link to="#" target="_blank">
                            <i className="fab fa-telegram-plane" aria-hidden="true"></i>
                        </Link>

                        <Link to="mailto: #" target="_blank">
                            <i className="far fa-envelope" aria-hidden="true"></i>
                        </Link>

					</div>
				</div>
                }

			</div>
        </Layout>
    )
}

export default SinglePost