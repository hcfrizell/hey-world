import React from "react"

import Menu from "../components/menu"

export default ({ children }) => (
    <div>
        <Menu />

        <div style={{ margin:"3em auto", maxWidth: 650, padding: "0 1em" }} >

            {children}


            <h4>Anything in here</h4>
        </div>
    </div>
)