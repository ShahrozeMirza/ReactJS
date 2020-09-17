import React,{useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: []
}

const reducer = (state,action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return{
                loading: false,
                error: '',
                post: action.payload

            }

        case 'FETCH_ERR':
            return{
                loading: false,
                error: 'Something Went Wrong !!',
                post: []
            }
        default:
            return state
    }
}

function DataFetchUseReducer () {
   const [state, dispatch] = useReducer(reducer,initialState);

   useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/users')
           .then(response =>{
               dispatch({
                   type: 'FETCH_SUCCESS',
                   payload: response.data
               })
           })
           .catch(error =>{
               dispatch({
                   type: 'FETCH_ERR'
               })
           })
   },[])
    return(
        <div>
            <h1>{state.loading ? 'Data Loading' : state.post && state.post.length ? state.post[1].email : null}</h1>
            <h1>{state.error ? state.error : null}</h1>
        </div>
    )
}
export default DataFetchUseReducer