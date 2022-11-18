import React, { useEffect, useState } from 'react'
import './Project.css'
import axios from 'axios';
import { Slider } from 'antd';
import Project_main_panel from './project_main_panel';
import pic_1 from '../../src/Image/Project/pic_1.jpg';
import pic_2 from '../../src/Image/Project/pic_2.jpg';
import pic_3 from '../../src/Image/Project/pic_3.jpg';
import pic_4 from '../../src/Image/Project/pic_4.jpg';
import pic_5 from '../../src/Image/Project/pic_5.jpg';

const Project = () => {

  const [projects, setProjects] = useState(null)
  const [total, setTotal] = useState(0)
  const [current, setCurrent] = useState(1)
  const [startArray, setStartArray] = useState(null)
  const [endArray, setEndArray] = useState(null)
  const Image_Array = [pic_1, pic_2, pic_3, pic_4, pic_5]

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

  useEffect(() => {
    axios.get('https://zhaobo-web-backend.herokuapp.com/project/').then((response) => {
      console.log(response.data)
      setTotal(response.data?.length)
      // 正常情况下render顺序【1，2，3，4】
      // 当点击像右滑或像左滑button时【2，3，4，1】
      // 可以截取两个部分【2，3，4】+【1】组成【2，3，4，1】
      setStartArray(response.data?.slice(current, total))
      setEndArray(response.data ? response.data.slice(0, current) : response.data)
      setProjects(startArray ? startArray.concat(endArray) : response.data)
    }).catch((e) => {
      console.log(e)
    });
  }, [current])


  return (
    <div className="project-panel">
      <div className='project-main-panel'>
        <Project_main_panel current={current} key={current}/>
      </div>
      <ul className='project-cards-panel'>
        {
          projects?.map((project) => {
            return (
              <>
                <div className="project-card" key={current}>
                  <img src={Image_Array[project?.project_number - 1]} alt="project" className='project-card-image' />
                  <div className="project-container">
                    <div className='project-date'>{project?.project_date}</div>
                    <div className="project-title">{project?.title}</div>
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
        <Slider defaultValue={0} min={1} max={total} value={current} style={{ width: "800px", color: "#000" }}></Slider>
      </div>
    </div>
  )
}

export default Project