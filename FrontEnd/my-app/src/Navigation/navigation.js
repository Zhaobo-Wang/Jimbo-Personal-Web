import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import "./Navigation.css"

const navigation = () => {
      return (
            <Menu className='nagivation-style' style={{ height: "60px", backgroundColor: "#d6d7d7", fontSize: "16px", paddingTop: "5px"}} mode="horizontal" theme="dark">
                  <Menu.Item key='Home' className='nav-item-style'>
                        <Link to="/Home" className='nav-text-style'>Home</Link>
                  </ Menu.Item>
                  <Menu.Item key='Blog' className='nav-item-style'>
                        <Link to="/Blog" className='nav-text-style'>Blog</Link>
                  </Menu.Item>
                  <Menu.Item key='Project' className='nav-item-style'>
                        <Link to="/Project" className='nav-text-style'>Project</Link>
                  </Menu.Item>
                  <Menu.Item key='Personal' className='nav-item-style'>
                        <Link to="/Personal" className='nav-text-style'>Contact</Link>
                  </Menu.Item>
            </Menu>
      )
}

export default navigation