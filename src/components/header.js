import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

const Header = () => {

  const data = useStaticQuery( graphql`
    query {
        site {
            siteMetadata {
                title
                tagline
            }
        }
    }
  `)
    
  return (
    <header>
      <h1><Link to="/">{data.site.siteMetadata.title}</Link></h1>
      <p>{data.site.siteMetadata.tagline}</p>
    </header>
  )
}

export default Header