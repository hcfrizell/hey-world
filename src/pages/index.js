import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

import Menu from "../components/menu"
import RandomImg from "../components/randomImg"

export default () => (
    <div style={{ color:"purple", fontSize: "12pt" }}>
        <Menu pageName="/" />

        <h1>Hey ! world!</h1>
        <p>second line!</p>

        <RandomImg />

        <Layout >
            <h1>Hi! I'm building a fake Gatsby site as part of a tutorial!</h1>
            <p>
            What do I like to do? Lots of course but definitely enjoy building
            websites.
            </p>
        </Layout>
  </div>
)
