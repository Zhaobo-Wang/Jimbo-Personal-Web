import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import { Pagination, Input, Alert, Button } from 'antd';
import './blog.css';
import { AudioOutlined } from '@ant-design/icons';
import Navigation from '../Navigation/navigation'

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
    axios.get(`https://zhaobo-web-backend.herokuapp.com/blog/?ordering=-post_date&search=${value}`).then((response) => {
      console.log(response.data.results)
      setBlogs(response.data.results)
    }).catch((e) => {
      <Alert message="Error" type="error" description={`${e}`} />
    })
  }

  const handlePagination = (value) => {
    console.log(value)
    axios.get(`https://zhaobo-web-backend.herokuapp.com/blog/?ordering=-post_date&page=${value}`).then((response) => {
      console.log(response.data.results)
      setBlogs(response.data.results)
    }).catch((e) => {
      <Alert message="Error" type="error" description={`${e}`} />
    })
  }

  useEffect(() => {
    axios.get('https://zhaobo-web-backend.herokuapp.com/blog/?ordering=-post_date').then((response) => {
      console.log(response.data.results)
      setBlogs(response.data.results)
      setTotal(response.data.count)
      setLatest_date(response.data.results[0].post_date)
    }).catch((e) => {
      <Alert message="Error" type="error" description={`${e}`} />
    })
  }, []);


  return (
    <div className='blog-panel'>
      <div className="blog-main-nav-container">
        <Navigation />
      </div>
      <div className="blog-main-panel">
        <div className="blog-left-panel">
          <Search placeholder="Search Blog" size="large" onSearch={handleSearch} allowClear className='blog-search' />
          <div className='blog-categories'>
            <Button onClick={() => { handleSearch('') }} type="text" style={{ color: 'black' }} className="blog-category">AllPosts</Button>
            <Button onClick={() => { handleSearch('backend') }} type="text" style={{ color: 'black' }} className="blog-category">BackEnd</Button>
            <Button onClick={() => { handleSearch('frontend') }} type="text" style={{ color: 'black' }} className="blog-category">FrontEnd</Button>
            <Button onClick={() => { handleSearch('react') }} type="text" style={{ color: 'black' }} className="blog-category">React</Button>
            <Button onClick={() => { handleSearch('django') }} type="text" style={{ color: 'black' }} className="blog-category">Django</Button>
            <Button onClick={() => { handleSearch('algorithm') }} type="text" style={{ color: 'black' }} className="blog-category">Algorithm</Button>
            <Button onClick={() => { handleSearch('personal') }} type="text" style={{ color: 'black' }} className="blog-category">Personal Thought</Button>
            <Button onClick={() => { handleSearch('css') }} type="text" style={{ color: 'black' }} className="blog-category">CSS</Button>
            <Button onClick={() => { handleSearch('nodejs') }} type="text" style={{ color: 'black' }} className="blog-category">NodeJS</Button>
            <Button onClick={() => { handleSearch('python') }} type="text" style={{ color: 'black' }} className="blog-category">Python</Button>
            <Button onClick={() => { handleSearch('heroku') }} type="text" style={{ color: 'black' }} className="blog-category">Heroku</Button>
            <Button onClick={() => { handleSearch('javascript') }} type="text" style={{ color: 'black' }} className="blog-category">Javascript</Button>
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
    </div>
  )

}

export default Blog

