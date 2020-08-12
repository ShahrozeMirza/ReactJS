import React from 'react'

function HeroErrBound({heroName}){

    if(heroName === 'Joker'){
        throw new Error('Joker is not a Hero')
    }
    return(
        <div>
            <h1>{heroName}</h1>
        </div>
    )
}

export default HeroErrBound