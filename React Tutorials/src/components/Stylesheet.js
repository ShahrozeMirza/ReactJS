import React from 'react'
import './myStyle.css'

function Stylesheet(){
    return(
        <div>
            <h1 className='text-color fs-48'>Stylesheet</h1>
        </div>
    )
}

//This is Conditional Styling

export function ConditionalStyling (props){
    
    let className = props.fontSize ? 'text-color' : ''

    return (
        //Backticks from Template Literals is the simplest option to add multipla classes
        <div>
            <p className={`${className} fs-48`}>This is Conditional Styling</p>
        </div>
    )
}

export default Stylesheet
