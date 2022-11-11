import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/navigation'
import Hobbies_main_pic from '../Image/MySelf/hobbies-main-pic.jpg'

const skillHobbies = () => {
    return (
        <div className='home-panel'>
            <div className="hobbies-body-panel">
            </div>
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