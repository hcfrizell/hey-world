import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import RandomImg from "../components/randomImg"

export default () => (
    <Layout pageName="Home" >
        <h1>Hey ! world!</h1>
        <p>second line!</p>

        <RandomImg />

        <h1>Hi! This ia Gatsby site - Just trying to learn things...!</h1>
        <p>
        Paragraph here about items, things, objects, places... 
        websites.
        </p>
    </Layout>
)
