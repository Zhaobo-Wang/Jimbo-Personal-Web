import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const skillHardwares = () => {
    return (
        <div className='home-panel'>
            <div className="hardware-body-panel">
                <h2>Hardware Skills:</h2>
                <h4>Courses Taken:</h4>
                <ul className='software-skills-list'>
                    <li className="software-skills-item">React</li>
                    <li className="software-skills-item">HTML</li>
                    <li className="software-skills-item">CSS</li>
                    <li className="software-skills-item">JavaScript</li>
                    <li className="software-skills-item">SAPUI5</li>
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