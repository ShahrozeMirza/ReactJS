import React from 'react'

//This is Destructuring in Function Components Tutorial
//There are 2 ways of doing it.

//1. Destructure it into Function Parameter
const FunctionParameter = ({name,heroName}) =>{
return (
    <div>
        <h1>Hello {name} a.k.a {heroName}</h1>
    </div>
) 
}

//2. Destructure it inside Function Body

export const FunctionBody = (props) => {
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
        </div>
    )
}

export default FunctionParameter