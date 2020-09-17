import React,{useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchUseState() {

 const [loading,setLoading] = useState(true);
 const [error, setError] = useState('');
 const [post, setPost] = useState([]);


 useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        setLoading(false);
        setPost(response.data);
        setError('');
        
        
    })
    .catch(error =>{
        setLoading(false);
        setPost([]);
        setError('Something Went Wrong');
    })
 },[]);
 
  return (
    <div>
        <h1>{loading ? 'Data Loading' : post && post.length ? post[1].email : null}</h1>
        <h1>{error ? error : null}</h1>
    </div>
  )
 
      
}

export default DataFetchUseState
