import React from "react"
import {Link} from "gatsby"
import {graphql} from "gatsby"

import Console from "../components/console"
import Container from "../components/container"

const ListLink = props => (
    <li style={{ display: "inline-block", marginRight: "1em" }} >
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export const query = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`

export default (props) => (
    <Container >
        <Console log={props} />

        <header style={{ marginBottom: "1.5em" }} >
            <Link to="/" style={{ textShadow: "none" }} >
                <h3 style={{ display: "inline" }}>
                    TITLE HERE
                </h3>
            </Link>

            <div style={{ display:"inline-block", marginLeft: "4em" }} >{props.pageName}</div>

            <ul style={{ listStyle: "none", float: "right" }} >
                <ListLink to="/contact/">Contacts</ListLink>
                <ListLink to="/about/">About Page</ListLink>
            </ul>
        </header>
    </Container>
)
