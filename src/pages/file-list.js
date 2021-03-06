import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
    query {
        allFile(
            sort: { fields: [relativePath], order: ASC }
            , filter: { relativeDirectory: {ne: "utils"} }
        ) {
            edges {
                node {
                    relativePath
                    prettySize
                    extension
                    birthTime( fromNow: true )
                }
            }
        }
    }
`

export default ( {data} ) => {
    console.log( "The DATA", data );

    return ( 
        <Layout pageName="file-list" >
            <div > 
                <h2>File List </h2>

                <table >
                    <thead>
                        <tr>
                            <th>relativePatch</th>
                            <th>prettySize</th>
                            <th>extension</th>
                            <th>birthTime</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.allFile.edges.map( ( {node}, index ) => (
                        <tr key={index} >
                            <td>{node.relativePath}</td>
                            <td>{node.prettySize}</td>
                            <td>{node.extension}</td>
                            <td>{node.birthTime}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layout >
    )
}
