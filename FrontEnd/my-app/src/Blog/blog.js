import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination, Input, Alert, Button } from 'antd';

const Blog = () => {

  const [blogs, setBlogs] = useState(null);
  const { Search } = Input;

  const handleSearch = (value) => {
    console.log(value)
    axios.get(`http://127.0.0.1:8000/blog/?ordering=-post_date&search=${value}`).then((response) => {
      console.log(response.data.results)
      setBlogs(response.data.results)
    }).catch((e) => {
      <Alert message="Error" type="error" description={`${e}`} />
    })
  }

  const handlePagination = (value) => {
    console.log(value)
    axios.get(`http://127.0.0.1:8000/blog/?ordering=-post_date&page=${value}`).then((response) => {
      console.log(response.data.results)
      setBlogs(response.data.results)
    }).catch((e) => {
      <Alert message="Error" type="error" description={`${e}`} />
    })
  }

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/blog/?ordering=-post_date').then((response) => {
      console.log(response.data.results)
      setBlogs(response.data.results)
    }).catch((e) => {
      <Alert message="Error" type="error" description={`${e}`} />
    })
  }, []);


  return (
    <>
      <Search placeholder="input search text" enterButton="Search" size="large" onSearch={handleSearch} style={{ width: 400 }} allowClear />
      <div>
        <Button onClick={() => { handleSearch('') }} type="text" style={{ color: '#097969' }}>AllPosts</Button>
        <Button onClick={() => { handleSearch('django') }} type="text" style={{ color: '#097969' }}>BackEnd</Button>
        <Button onClick={() => { handleSearch('react') }} type="text" style={{ color: '#097969' }}>FrontEnd</Button>
        <Button onClick={() => { handleSearch('css') }} type="text" style={{ color: '#097969' }}>CSS</Button>
        <Button onClick={() => { handleSearch('algorithm') }} type="text" style={{ color: '#097969' }}>Algorithm</Button>
      </div>
      <ul>
        {
          blogs?.map((blog) => {
            return (
              <li>
                <Link to={`/blog/${blog?.id}`}>{blog?.title}</Link>
                <h6>{blog?.post_date}</h6>
                <h6>{blog?.tags}</h6>
              </li >
            )
          })
        }
      </ul >
      <Pagination defaultCurrent={1} total={100} onChange={handlePagination} />;
    </>
  )

}

export default Blog

