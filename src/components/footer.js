import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

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
    <footer>
      <h1>&copy; {data.site.siteMetadata.title} &bull; Powered by <Link to="/">{data.site.siteMetadata.template}</Link></h1>
    </footer>
  )
}

export default Footer