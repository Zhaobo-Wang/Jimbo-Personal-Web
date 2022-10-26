import React, { useState } from 'react'
import Navigation from './Navigation/navigation'
import { Routes, Route } from "react-router-dom";
import Home from './Home/home'
import Project from './Project/project'
import Blog from './Blog/blog'
import Blog_detail from './Blog/blog_detail';
import 'antd/dist/antd.min.css'

const App = () => {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Blog/:id" element={<Blog_detail/>}></Route>
                <Route path="/Project" element={<Project />} />
            </Routes>
        </>
    )
}

export default App