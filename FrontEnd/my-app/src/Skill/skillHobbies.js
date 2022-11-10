import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/navigation'
const skillHobbies = () => {
    return (
        <div className='home-panel'>
            <div className="hobbies-main-nav-container">
                <Navigation />
            </div>
            <div className="hobbies-body-panel">放几张照片：摄影（无人机）、滑雪，做饭，看枫叶</div>
            <div className='hobbies-panel-2 panel-format'>
                <h1 className='panel-text-format'>
                    Hobbies
                    <Link to="/Skill/Hobbies" className='skill-link'>
                        &#10144;
                    </Link>
                </h1>
            </div>
            <div className='hardware-panel-2 panel-format'>
                <h1 className='panel-text-format'>
                    Hardware
                    <Link to="/Skill/Hardware" className='skill-link'>
                        &#10144;
                    </Link>
                </h1>
            </div>
            <div className='software-panel-2 panel-format'>
                <h1 className='panel-text-format'>
                    Software
                    <Link to="/Skill/Software" className='skill-link'>
                        &#10144;
                    </Link>
                </h1>
            </div>
        </div>
    )
}

export default skillHobbies