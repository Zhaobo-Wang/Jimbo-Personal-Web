import './Project.css'
import '../App.css'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navigation from '../Navigation/navigation'

const Project_main_panel = (props) => {

  const [project, setProject] = useState(null)
  const [body_array, setBody_array] = useState(null)
  const [displayBody, setDisplayBody] = useState(false)


  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/project/${props.current}`).then(
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
      <div className="overlay" style={{ backgroundColor: displayBody ? '#d6d7d7' : '#d6d7d7', width: '100vw', height: '100vh' }}>
        <img src={`http://127.0.0.1:8000${project?.image_url}`}
          alt="no background"
          className='project-background-image'
          style={{ display: displayBody ? "none" : "block" }}></img>
        <div className="project-main-nav-container">
          <Navigation />
        </div>
        <div className='project-main-text-container' style={{ width: displayBody ? "34vw" : "30vw", bottom: displayBody ? "10vh" : "20vh", left: displayBody ? "3vw" : "5vw" }}>
          <div className="project-main-post-date">{displayBody ? "" : project?.project_date}</div>
          <div className="project-main-title" style={{ fontSize: displayBody ? "45px" : "80px", color: displayBody ? "#000":"#fff"}}>{project?.title}</div>
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
          <button onClick={handleClick} className="read-more-btn" style={{color: displayBody? "#000":"#fff"}}>{displayBody ? 'Show Less' : 'Read More'}</button>
        </div>
      </div>
    </>
  )
}

export default Project_main_panel