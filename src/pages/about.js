import React from "react"

import Header from "../components/header"
import DivBlob from "../components/divBlob"
import Menu from "../components/menu"
import Layout from "../components/layout"

export default () => (
    <Layout pageName="about" >
        <Header headerText="About Page NOW" />
        <p>React - ful</p>
        <Header headerText="Second blop" />

        <DivBlob color="gold" />
    </Layout>
)