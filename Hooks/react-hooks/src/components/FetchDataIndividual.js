import React, {useState,useEffect} from 'react'
import axios from 'axios'

function FetchDataIndividual(){

    const [post,setPost] = useState({})
    const[id,setId] = useState(1)
    const[idOnButtonClick, setIdOnButtonClick] = useState(1)

    const getTheId = () =>{
        setIdOnButtonClick(id)
    }

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${idOnButtonClick}`)
        .then(res => {
            setPost(res.data)
        })
        .catch(err => {
            alert('Something Went Wrong')
        })
    },[idOnButtonClick])

    return(
        <div>
            <input value={id} onChange={e => setId(e.target.value)}></input>
            <button onClick={getTheId}>Fetch Post</button>
            <h1>Name: {post.name}</h1>
        </div>
    )
}
export default FetchDataIndividual