import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ContentHeader from '../components/content-header'

export const query = graphql`
    query( $slug: String! ) {
        markdownRemark ( fields: { slug: { eq: $slug } } )
        {
            frontmatter {
                title
                date
            }
            html
        }
    }  
`

const SinglePost = ( props ) => {
    return (
        <Layout className="single__post">

            <ContentHeader />

            <div className="container text-container text-container--center">
                <h1>{props.data.markdownRemark.frontmatter.title}</h1>
                <p>{props.data.markdownRemark.frontmatter.date}</p>
            </div>

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

					<h4><a href="#" title="Posts by todo: author_name" rel="author"> author name</a> </h4>
                    
                    {/* todo: author_description. */}
					<p> Lorem ipsum dolor sit amet </p>
					
					{/* Author links */}
					<div className="author-links">

                        <a href="#" target="_blank">
                            <i className="fab fa-facebook-f" aria-hidden="true"></i>
                        </a>

                        <a href="#" target="_blank">
                            <i className="fab fa-twitter" aria-hidden="true"></i>
                        </a>

                        <a href="#" target="_blank">
                            <i className="fab fa-instagram" aria-hidden="true"></i>
                        </a>

                        <a href="#" target="_blank">
                            <i className="fab fa-youtube" aria-hidden="true"></i>
                        </a>

                        <a href="#" target="_blank">
                            <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                        </a>

                        <a href="#" target="_blank">
                            <i className="fab fa-spotify" aria-hidden="true"></i>
                        </a>

                        <a href="#" target="_blank">
                            <i className="fab fa-github" aria-hidden="true"></i>
                        </a>

                        <a href="#" target="_blank">
                            <i className="fab fa-whatsapp" aria-hidden="true"></i>
                        </a>

                        <a href="#" target="_blank">
                            <i className="fab fa-telegram-plane" aria-hidden="true"></i>
                        </a>

                        <a href="mailto: #" target="_blank">
                            <i className="far fa-envelope" aria-hidden="true"></i>
                        </a>

					</div>
				</div>

			</div>
        </Layout>
    )
}

export default SinglePost