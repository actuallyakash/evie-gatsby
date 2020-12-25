import React from 'react'
import { graphql } from 'gatsby'

import Head from '../components/head'
import Layout from '../components/layout'

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

const About = () => {
    return (
        <Layout layoutClass="single__page">

            <Head title="About" />

            <div className="container center article__header">
                <h1 className="article__header__title">About Us</h1>
                
                <img className="featured-image" src="https://streetviewhub.com/shots/" alt="" />

                <div className="container text-container text-container--center">
                    <div className="page__inner">
                        <div className="page__main">

                            <p>This is some dummy copy. You’re not really supposed to read this dummy copy, it is just a place holder for people who need some type to visualize what the actual copy might look like if it were real content.</p>

                            <p>If you want to read, I might suggest a good book, perhaps <a title="Hemingway" href="http://en.wikipedia.org/wiki/Ernest_Hemingway">Hemingway</a> or <a title="Melville" href="http://en.wikipedia.org/wiki/Herman_Melville">Melville</a>. That’s why they call it, the dummy copy. This, of course, is not the real copy for this entry. Rest assured, the words will expand the concept. With clarity. Conviction. And a little wit.</p>

                            <p>In today’s competitive <a title="market environment" href="http://en.wikipedia.org/wiki/Market_environment">market environment</a>, the body copy of your entry must lead the reader through a series of <strong>disarmingly simple thoughts</strong>.</p>

                            <p>All your supporting arguments must be communicated with simplicity and charm. And in such a way that the reader will read on. (After all, that’s a reader’s job: to read, isn’t it?) And by the time your readers have reached this point in the finished copy, you will have convinced them that you not only respect their intelligence, but you also <strong>understand their needs as consumers</strong>.</p>

                            <p>As a result of which, your entry will repay your <a title="writing" href="http://en.wikipedia.org/wiki/Writing">efforts</a>. Take your sales; simply put, they will rise. Likewise your credibility. There’s every chance your competitors will wish they’d placed this entry, not you. While your customers will have probably forgotten that your competitors even exist. Which brings us, by a somewhat circuitous route, to another small point, but one which we feel should be raised.</p>

                        </div>
                    </div>
                </div>
            </div>


        </Layout>
    )
}

export default About