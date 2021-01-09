const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if ( node.internal.type === 'MarkdownRemark' ) {
        const slug = path.basename( node.fileAbsolutePath, '.md' )

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions
    const singlePostTemplate = path.resolve('./src/components/single.js')

    // Fixing /blog redirect
    createRedirect({
        fromPath: `/blog`,
        toPath: `/`,
        redirectInBrowser: true,
        isPermanent: true,
    })
    
    const res = await graphql(`
        query {
            allMarkdownRemark (
                sort: { fields: [frontmatter___date], order: DESC }
                limit: 1000
            ) {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }    
    `)

    const posts = res.data.allMarkdownRemark.edges

    posts.forEach( (edge) => {
        createPage({
            component: singlePostTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })

    // Paginating the posts
    const postsPerPage = 6
    const numPages = Math.ceil( posts.length / postsPerPage )
    const blogTemplate = path.resolve('./src/templates/index.js')
    
    Array.from({ length: numPages }).forEach(( _, i ) => {
        createPage({
            path: i == 0 ? `/` : `/${i + 1}`,
            component: blogTemplate,
            context: {
                skip: i * postsPerPage,
                limit: postsPerPage,
                numPages,
                currentPage: i + 1,
            }
        })
    })
    
}