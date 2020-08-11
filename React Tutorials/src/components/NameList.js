import React from 'react'
import Person from './Person'

//This is List Rendering tutorial using map method

function NameList(){
  
// const names = ['Shahroze','Aneeq', 'Waleed']
// const nameList = names.map(name =>(<h2>{name}</h2>))
// return <div>{nameList}</div>

const persons = [
    {
        id: 1,
        name: 'Shahroze',
        age:26,
        skill:'React'
    },
    {
        id: 2,
        name: 'Husnain',
        age:26,
        skill:'Android'
    },
    {
        id: 3,
        name: 'Omer',
        age:26,
        skill:'Ruby'
    }
    
]

const personList = persons.map(person => <Person key={person.id} person={person} />)
return <div>{personList}</div>
}

export default NameList