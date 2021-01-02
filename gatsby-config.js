/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Evie',
    tagline: 'A production-ready theme',
    author: 'actuallyakash',
    template: 'Evie',
    showLogo: true, // true/false to show the logo.png in the static folder
    menuLinks: [
      {
        name:'Home',
        link:'/'
      },
      {
        name:'About',
        link:'/about'
      },
      { 
        name: 'Learn Gatsby',
        link: '/blog/gatsby'
      },
      { 
        name: 'Learn React',
        link: '/blog/react'
      },
      { 
        name: 'Learn PHP',
        link: '/blog/php'
      },
      { 
        name: 'Learn jQuery',
        link: '/blog/jquery'
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 750,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'posts',
        engine: 'flexsearch',
        query: `
          query {
            allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
              edges {
                node {
                  id
                  excerpt
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    date
                    category
                    author
                    thumbnail {
                      id
                      name
                      publicURL
                      relativePath
                    }
                  }
                }
              }
            }
          }
        `,
        ref: 'slug',
        index: [ 'title', 'excerpt', 'category', 'author' ],
        store: ['id', 'title', 'excerpt', 'date', 'slug', 'category', 'author', 'thumbnail'],
        normalizer: ({ data }) =>
        data.allMarkdownRemark.edges.map(post => ({
          id: post.node.id,
          title: post.node.frontmatter.title,
          category: post.node.frontmatter.category,
          author: post.node.frontmatter.author,
          date: post.node.frontmatter.date,
          thumbnail: post.node.frontmatter.thumbnail,
          excerpt: post.node.excerpt,
          slug: post.node.fields.slug,
        }))
      }
    }
  ],
}
