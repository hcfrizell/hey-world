import React from "react"

export default props => (
    <div style={{background: props.color}} >
        <div>divBlob</div>
        <div>The color is: {props.color}</div>
    </div>
)