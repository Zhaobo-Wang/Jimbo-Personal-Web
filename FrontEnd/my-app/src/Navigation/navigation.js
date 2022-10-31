import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'antd'
import "./Navigation.css"

const navigation = () => {
      return (
            <Menu style={{ height: 50 }} mode="horizontal">
                  <Menu.Item key='Home'>
                        <Link to="/Home">Home</Link>
                  </ Menu.Item>
                  <Menu.Item key='Blog'>
                        <Link to="/Blog">Blog</Link>
                  </Menu.Item>
                  <Menu.Item key='Project'>
                        <Link to="/Project">Project</Link>
                  </Menu.Item>
                  <Menu.Item key='Skill'>
                        <Link to="/Skill">Skill</Link>
                  </Menu.Item>
                  <Menu.Item key='Personal'>
                        <Link to="/Personal">Personal</Link>
                  </Menu.Item>
            </Menu>
      )
}

export default navigation