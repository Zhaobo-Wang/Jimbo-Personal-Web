import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';


const Blog = () => {
  
    const [post,setPost] = useState(null);

    useEffect(() =>{
        axios.get('http://127.0.0.1:8000/blog/').then((response) =>{
            console.log(response)
            setPost(response.data)
        }).catch((e)=>{
            console.log(e)
        })
    },[]);
  
  return (
    <div>{post}</div>
  )
}

export default Blog
