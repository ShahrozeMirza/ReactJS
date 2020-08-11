import React, {Component} from 'react'

class RefsOldDemo extends Component{
   constructor(props){
       super(props)

       //1. Create a property and assign assign the value "null" to that property.
       this.cbRef = null

       //2. Create a method that will assign the DOM element to the Ref we created in step 1.
       this.setCbRef = (element) =>{
           this.cbRef = element
       }
   }

   componentDidMount(){

    //4. Call the method to the DOM.
    //React will call the Ref callback with the DOM element when the component mounts and call it with null when the element unmounts.
    //That's why in callback Ref it is important to check that a value exists on the Ref property and is not null.
     
    //In this method we directly access the DOM node using the Ref property. We don't need "current".
    if(this.cbRef){
        this.cbRef.focus()
    }
   }

 

    render(){
        return(

            //3.Attach the ref to the DOM node
            //The element is implicitly passed as a paremeter which is assigned to the callback ref property
            //In callback Ref approach we attach the Ref to an element using the method that in turn assigns the element to the property
            <div>
                <input type="text" ref={this.setCbRef} />
            </div>
        )
    }
}

export default RefsOldDemo