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
    const { createPage } = actions
    const singlePostTemplate = path.resolve('./src/components/single.js')
    const res = await graphql(`
        query {
            allMarkdownRemark {
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

    res.data.allMarkdownRemark.edges.forEach( (edge) => {
        createPage({
            component: singlePostTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}