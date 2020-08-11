import React from 'react'

function Inline(){

    /*Inline Styles in React are not specified as Strings. We have to use and object whose key value will be a
    String and that Key NAME will be the CSS property name BUT will be written in camelCase. */
     
    const styleObj = {
        color: 'yellow',
        fontSize: '100px'
    }

    return(
        <div>
            <h1 style={styleObj}>This is Inline Stying</h1>
        </div>
    )
}

export default Inline