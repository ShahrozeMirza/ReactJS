import React from 'react'

function MemoComp({name}){

    console.log('Memo Component')
    return(
        <div>
           This is from Functional Component {name} and is from React Memo Tutorial
        </div>
    )
}

export default React.memo(MemoComp) 