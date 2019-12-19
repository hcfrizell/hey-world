import React from "react"
import {graphql} from "gatsby"

//import {Link} from "gatsby"
import {rythm} from "../utils/typography"
import Header from "../components/header"
import Menu from "../components/menu"
import Layout from "../components/layout"

export const query = graphql`
query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
            node {
                id
                frontmatter {
                    title
                    date(formatString: "DD MMMM, YYYY")
                }
                excerpt
            }
        }
    }
}
`

export default ( {data} ) => {
    console.log("DATA", data);

    return (
        <Layout pageName="contact" >
            <Header headerText="Contacts" />
            <h1>Amazing poop pandas</h1>

            <h4>{data.allMarkdownRemark.totalCount} Posts</h4>

            {data.allMarkdownRemark.edges.map( ({ node }) => (
                <div key={node.id} >
                    <h3>
                        {node.frontmatter.title}{" "}
                        <span style={{color:"#bbb", fontSize:"small"}} > - {node.frontmatter.date}</span>
                    </h3>
                    
                    <p>{node.excerpt}</p>
                </div>
            ))}

        </Layout>
    )
}