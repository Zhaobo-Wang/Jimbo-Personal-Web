import React, { useState } from 'react'
import Navigation from './Navigation/navigation'
import { Routes, Route } from "react-router-dom";
import Project from './Project/project'
import Blog from './Blog/blog'
import Blog_detail from './Blog/blog_detail';
import Personal from './Personal/personal';
import Home from './Skill/Home';
import SkillHobbies from './Skill/skillHobbies';
import SkillHardwares from './Skill/skillHardwares';
import SkillSoftware from './Skill/skillSoftware';
import './App.css'
import 'antd/dist/antd.min.css'

const App = () => {
    return (
        <div className='app'>
            <Navigation />
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="/Skill/Software" element={<SkillSoftware />} />
                <Route path="/Skill/Hardware" element={<SkillHardwares />} />
                <Route path="/Skill/Hobbies" element={<SkillHobbies />} />
                <Route path="/Blog" element={<Blog />} />
                <Route path="/Blog/:id" element={<Blog_detail />}></Route>
                <Route path="/Project" element={<Project />} />
                <Route path="/Personal" element={<Personal />} />
            </Routes>
        </div>
    )
}

export default App