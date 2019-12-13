import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import RandomImg from "../components/randomImg"

export default () => (
    <Layout pageName="Home" >
        <h1>Hey ! world!</h1>
        <p>second line!</p>

        <RandomImg />

        <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
        <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
        </p>
    </Layout>
)
