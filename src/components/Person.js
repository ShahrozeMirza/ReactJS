import React from 'react'

//This is the Refactored JSX file fonr NameList file and will only be responsible for rendering the HTML.

function Person({person}){
    return(
        <div>
            <h2>I am {person.name}. I am {person.age} years old. I know {person.skill}</h2>
        </div>
    )
}

export default Person