import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination, Input, Alert, Button } from 'antd';
import './blog.css';
import { AudioOutlined } from '@ant-design/icons';

const Blog = () => {

  const [blogs, setBlogs] = useState(null);
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

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
    <div className='blog-panel'>
      <div className="blog-left-panel">
        <Search placeholder="input search text" size="large" onSearch={handleSearch} style={{ width: 400 }} allowClear className='blog-search'/>
        <div className='blog-categories'>
          <Button onClick={() => { handleSearch('') }} type="text" style={{ color: '#097969' }}>AllPosts</Button>
          <Button onClick={() => { handleSearch('django') }} type="text" style={{ color: '#097969' }}>BackEnd</Button>
          <Button onClick={() => { handleSearch('react') }} type="text" style={{ color: '#097969' }}>FrontEnd</Button>
          <Button onClick={() => { handleSearch('css') }} type="text" style={{ color: '#097969' }}>CSS</Button>
          <Button onClick={() => { handleSearch('algorithm') }} type="text" style={{ color: '#097969' }}>Algorithm</Button>
        </div>
      </div>
      <div className="blog-right-panel">
        <div className="blog-posts">
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
        </div>
        <Pagination defaultCurrent={1} total={100} onChange={handlePagination} className="blog-pagination"/>
      </div>
    </div>
  )

}

export default Blog

