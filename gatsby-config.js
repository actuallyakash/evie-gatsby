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
        name: 'Learnn jQuery',
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
    }
  ],
}
