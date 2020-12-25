import React from 'react'
import { graphql, Link } from 'gatsby'

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
            }
            html
        }
    }  
`

const SinglePost = ( props ) => {
    return (
        <Layout layoutClass="single__post">

            <Head title={props.data.markdownRemark.frontmatter.title} />

            <ContentHeader data={props.data.markdownRemark.frontmatter} />

            <div className="container text-container text-container--center">

				{/* Article Section */}
				<div className="app__inner">
                    <div className="app__main" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
				</div>

				{/* todo: Tags */}
				{/* evie_get_tags(); */}

				{/* Author Card */}
				<div className="author__card">
                    <img src="https://streetviewhub.com/shots/100x100" alt="" height="110" width="110" />
					
					<span className="about-heading">About Author</span>

					<h4><Link to="#" title="Posts by todo: author_name" rel="author"> author name</Link> </h4>
                    
                    {/* todo: author_description. */}
					<p> Lorem ipsum dolor sit amet </p>
					
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

			</div>
        </Layout>
    )
}

export default SinglePost