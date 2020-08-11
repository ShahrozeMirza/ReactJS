import React from 'react'

//With JSX Syntax
const Hello = () => {
    return (
        <div className="ClassJSX">
            <h1>Hello JSX Code</h1>
        </div>
    )

}

//Without JSX Sytnax
export const PlainJS = () => {
    return React.createElement('div',
    {id: 'withoutJSX', className: 'vanillaJS'}, 
    React.createElement('h1', null, 'Vanilla JavaScript'))
}

export default Hello
