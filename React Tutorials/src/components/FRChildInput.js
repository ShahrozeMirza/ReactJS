import React from 'react'

//We know Refs point to class components only.

//So, Here we will receive the Ref from parent class component directly into the native DOM element. Instead of pointing to the component the parent class component will point to the native DOM element in the functional component.

// function FRChildInput() {
//   return (
//     <div>
//         <input type="text"/>
//     </div>
//   )
// }

//First we redefine the way we creata a functional component. Instead of creating a functional component using regular functions we will create it using Arrow Function.

//React.creatRef() method takes a component as a parameter.In our case we have functional component so we as it as a parameter to the React.forwardRef() method.

//We know that functional components take props as parameter but when a component is passed as parameter to forwardRef/createRef method it receives "ref" as its second parameter.

const FRChildInput = React.forwardRef((props, ref) => {
    return(
        //the ref attribute receive the ref from parent class component as its value.
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}) 

export default FRChildInput
