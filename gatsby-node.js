/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

console.log("DOES THIS WORK?")

exports.onCreateNode = ( {node} ) => {
    if ( node.internal.type === `MarkdownRemark` ) {
        const fileNode = getNode( node.parent );
        console.log( "\n", fileNode.relativePath )
        console.log( "node.internal.type", node.internal.type )
    }
}
        