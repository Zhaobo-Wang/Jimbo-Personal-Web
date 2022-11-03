import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const skillHardwares = () => {
    return (
        <div className='home-panel'>
            <div className="hardware-body-panel">
                <h2>Hardware Skills:</h2>
                <h4>McMaster Courses Taken:</h4>
                <ul className='hardware-skills-list'>
                    <li className="hardware-skills-item">Circuit and System</li>
                    <li className="hardware-skills-item">Logic Design</li>
                    <li className="hardware-skills-item">Microprocessor Project</li>
                    <li className="hardware-skills-item">Control System</li>
                    <li className="hardware-skills-item">Communication System</li>
                    <li className="hardware-skills-item">Signal and System</li>
                    <li className="hardware-skills-item">Electromagnetics</li>
                </ul>
            </div>
            <div className='hobbies-panel panel-format'>
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

export default skillHardwares