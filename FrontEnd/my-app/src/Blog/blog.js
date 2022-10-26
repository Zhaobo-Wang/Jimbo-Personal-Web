import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {

  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/blog/').then((response) => {
      console.log(response)
      setBlogs(response.data)
    }).catch((e) => {
      console.log(e)
    })
  }, []);

  return (
    <ul>
      {
        blogs?.map((blog) => {
          return (
            <li>
              <Link to={`/blog/${blog?.id}`}>{blog?.title}</Link>
              <h6>{blog?.post_date}</h6>
              <h6>{blog?.tags}</h6>
              {/* <img>{blog.image}</img> */}
            </li>
          )
        })
      }
    </ul>
  )

}

export default Blog
