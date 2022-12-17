import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Footer = () => {

  const data = useStaticQuery( graphql`
    query {
        site {
            siteMetadata {
                title
                template
            }
        }
    }
  `)

  return (
    <footer className="footer footer--dark center">
      <span className="footer__textLogo">
        &copy; {data.site.siteMetadata.title} &bull; Powered by <a href="http://actuallyakash.github.io/">{data.site.siteMetadata.template}</a>
      </span>
    </footer>
  )
}

export default Footer