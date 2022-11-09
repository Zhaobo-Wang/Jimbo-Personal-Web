import React, { useEffect, useState } from 'react'
import './Project.css'
import axios from 'axios';
import { Slider } from 'antd';
import Project_main_panel from './project_main_panel';

const Project = () => {

  const [projects, setProjects] = useState(null)
  const [total, setTotal] = useState(0)
  const [current, setCurrent] = useState(1)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/project').then((response) => {
      console.log(response.data)
      setProjects(response.data)
      setTotal(response.data?.length)
    }).catch((e) => {
      console.log(e)
    });
  }, [])

  const toLeft = () => {
    if (current <= 1) {
      setCurrent(total)
    } else {
      setCurrent(current - 1)
    }
  }


  function toRight() {
    if (current >= total) {
      setCurrent(1)
    } else {
      setCurrent(current + 1)
    }
  }

  return (
    <div className="project-panel">
      <div className='project-main-panel'>
          <Project_main_panel current={current}/>
      </div>
      <ul className='project-cards-panel'>
        {
          projects?.map((project) => {
            return (
              <>
                <div className="project-card">
                  <img src={`http://127.0.0.1:8000${project.image_url}`} alt="project" className='project-card-image' />
                  <div className="project-container">
                    <div className='project-date'>{project.project_date}</div>
                    <div className="project-title">{project.title}</div>
                  </div>
                </div>
              </>
            )
          })
        }
      </ul>
      <div className="project-slider-panel">
        <button className="project-slider-button left" onClick={toLeft}>&#10094;</button>
        <button className="project-slider-button right" onClick={toRight}>&#10095;</button>
        <Slider defaultValue={0} min={1} max={total} value={current} style={{width: "800px", color: "#000"}}></Slider>
      </div>
    </div>
  )
}

export default Project