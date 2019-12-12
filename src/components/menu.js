import React from "react"
import {Link} from "gatsby"
import Container from "../components/container"

const ListLink = props => (
    <li style={{ display: "inline-block", marginRight: "1em" }} >
        <Link to={props.to}>{props.children}</Link>
    </li>
)

export default props => (
    <Container >
        <header style={{ marginBottom: "1.5em" }} >
            <Link to="/" style={{ textShadow: "none" }} >
                <h3 style={{ display: "inline" }}>SITE</h3>
            </Link>

            <ul style={{ listStyle: "none", float: "right" }} >
            <ListLink to="/">Home</ListLink>
            <ListLink to="/contact/">Contanct</ListLink>
            <ListLink to="/about/">About Page</ListLink>
            </ul>
        </header>
    </Container>

)