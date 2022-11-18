import './Project.css'
import '../App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navigation from '../Navigation/navigation'
import pic_1 from '../../src/Image/Project/pic_1.jpg';
import pic_2 from '../../src/Image/Project/pic_2.jpg';
import pic_3 from '../../src/Image/Project/pic_3.jpg';
import pic_4 from '../../src/Image/Project/pic_4.jpg';
import pic_5 from '../../src/Image/Project/pic_5.jpg';

const Project_main_panel = (props) => {

  const [project, setProject] = useState(null)
  const [body_array, setBody_array] = useState(null)
  const [displayBody, setDisplayBody] = useState(false)

  const Image_Array = [pic_1,pic_2,pic_3,pic_4,pic_5]

  useEffect(() => {
    axios.get(`https://zhaobo-web-backend.herokuapp.com/project/${props.current}`).then(
      (response) => {
        console.log(response.data)
        setProject(response.data)
        setBody_array(response.data?.introduction_to_project.split('\n'))
        // 处理后端字段，把它们放入array中
      }
    ).catch((e) => {
      console.log(e)
    });
  }, [props.current])

  const handleClick = () => {
    setDisplayBody(!displayBody)
  }

  return (
    <>
      <div className='overlay' style={{ opacity: displayBody ? 0.4 : 1 }}>
        <img src={Image_Array[project?.project_number - 1]}
          alt="no backgrounds"
          className='project-background-image'
        ></img>
      </div>
      <div className="project-main-nav-container navigation-animation" key={props.current} >
        <Navigation className="navigation-animation" />
      </div>
      <div className='project-main-text-container' key={displayBody} style={{ width: displayBody ? "34vw" : "30vw", bottom: displayBody ? "10vh" : "20vh", left: displayBody ? "3vw" : "5vw" }}>
        <div className="project-main-post-date">{displayBody ? "" : project?.project_date}</div>
        <div className="project-main-title" style={{ fontSize: displayBody ? "45px" : "80px" }}>{project?.title}</div>
        <div className="project-main-personal_team_project">{displayBody ? "" : project?.personal_team_project}</div>
        <div className="project-main-personal_team_project">{displayBody ? "" : project?.category}</div>
        <div className="project-main-body" style={{ zIndex: displayBody ? '20' : '0' }}>
          {
            displayBody ?
              <div className="project-hidden-part">
                {body_array?.map(eachLine => {
                  return <h4 className='project-hidden-line'>$  {eachLine}</h4>
                })}
                <div className="project-main-github-link">GitHub Link: <a href={project?.github_link} className="project-main-github-link">{project?.github_link}</a></div>
              </div>
              :
              ""
          }
        </div>
        <button onClick={handleClick} className="read-more-btn" style={{ color: displayBody ? "#000" : "#fff" }}>{displayBody ? 'Show Less' : 'Read More'}</button>
      </div>
    </>
  )
}

export default Project_main_panel