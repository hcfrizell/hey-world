import React from "react"

import Menu from "../components/menu"
import Console from "../components/console"

//console.log("Menu",Menu())
export default (props) => (
    <div>
        <Console log={props} />

        <Menu pageName={props.pageName}  />

        <div style={{ margin:"3em auto", maxWidth: 650, padding: "0 1em" }} >

            {props.children}

            <h5 class="line-top" >Data</h5>
            <p>props.pageName: {props.pageName}</p>
        </div>
    </div>
)