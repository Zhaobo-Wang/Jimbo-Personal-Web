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
  const [total, setTotal] = useState(0);
  const [latest_date, setLatest_date] = useState(null);

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
      setTotal(response.data.results[0].id)
      setLatest_date(response.data.results[0].post_date)
    }).catch((e) => {
      <Alert message="Error" type="error" description={`${e}`} />
    })
  }, []);


  return (
    <div className='blog-panel'>
      <div className="blog-left-panel">
        <Search placeholder="Search Blog" size="large" onSearch={handleSearch} style={{ width: 400 }} allowClear className='blog-search' />
        <div className='blog-categories'>
          <Button onClick={() => { handleSearch('') }} type="text" style={{ color: 'black' }} className="blog-category">AllPosts</Button>
          <Button onClick={() => { handleSearch('django') }} type="text" style={{ color: 'black' }} className="blog-category">BackEnd</Button>
          <Button onClick={() => { handleSearch('react') }} type="text" style={{ color: 'black' }} className="blog-category">FrontEnd</Button>
          <Button onClick={() => { handleSearch('css') }} type="text" style={{ color: 'black' }} className="blog-category">CSS</Button>
          <Button onClick={() => { handleSearch('algorithm') }} type="text" style={{ color: 'black' }} className="blog-category">Algorithm</Button>
        </div>
        <div className="blog-total-posts">
          <h3 className="blog-total">
            Total Posts: {total}<br />
            Latest Post Date: {latest_date}
          </h3>
        </div>
      </div>
      <div className="blog-right-panel">
        <div className="blog-posts-panel">
          <ul className="blog-posts">
            {
              blogs?.map((blog) => {
                return (
                  <li className='blog-post'>
                    <Link to={`/blog/${blog?.id}`} className="blog-title">{blog?.title}</Link>
                    <h6 className="blog-post_date">{blog?.post_date}</h6>
                    <h6 className="blog-tags">{blog?.tags}</h6>
                  </li>
                )
              })
            }
          </ul >
        </div>
        <Pagination defaultCurrent={1} total={100} onChange={handlePagination} className="blog-pagination" />
      </div>
    </div>
  )

}

export default Blog

