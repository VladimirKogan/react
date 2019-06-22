import React from 'react'
import './styles/myStyles.css'

function Stylesheet(props){

    let className = props.primary ? 'primary' : ''
    return (
        <div><h1 className = "primary">Stylesheet</h1></div>
    )
}

export default Stylesheet
