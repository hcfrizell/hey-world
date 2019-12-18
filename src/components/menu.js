import React from "react"
import {Link} from "gatsby"
import {graphql} from "gatsby"

import Console from "../components/console"
import Container from "../components/container"

const menuList = [
    {path:"about", name: "About Page 2"}
    ,{path:"contact", name: "Contact"}
    ,{path:"file-list", name: "File List"}
]

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
                    SITE
                </h3>
            </Link>

            <div style={{ display:"inline-block", marginLeft: "4em" }} >{props.pageName}</div>

            {/*
            <ul style={{ listStyle: "none", float: "right" }} >
                <ListLink to="/file-list/">File List</ListLink>
                <ListLink to="/contact/">Contacts</ListLink>
                <ListLink to="/about/">About Page</ListLink>
            </ul>
            */}

            <ul style={{ listStyle: "none", float: "right" }} >
                {menuList.map( function(obj) {
                    console.log( "OBJ", obj)
                    let path = `/${obj.path}/`;
                    console.log( "OBJ PATH", path)

                    return <ListLink to={path} >{obj.name}</ListLink>
                })}
            </ul>

        </header>
    </Container>
)
