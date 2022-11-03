import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const skillSoftware = () => {
    return (
        <div className='home-panel'>
            <div className="software-body-panel">
                <h2>Software Skills:</h2>
                <h4>FrontEnd Skills:</h4>
                <ul className='software-skills-list'>
                    <li className="software-skills-item">React</li>
                    <li className="software-skills-item">HTML</li>
                    <li className="software-skills-item">CSS</li>
                    <li className="software-skills-item">JavaScript</li>
                    <li className="software-skills-item">SAPUI5</li>
                </ul>
                <h4>BackEnd Skills:</h4>
                <ul className='software-skills-list'>
                    <li className="software-skills-item">Python</li>
                    <li className="software-skills-item">Django</li>
                    <li className="software-skills-item">Git</li>
                    <li className="software-skills-item">Linux Operation</li>
                    <li className="software-skills-item">MongoDB</li>
                    <li className="software-skills-item">NodeJS</li>
                    <li className="software-skills-item">Express.js</li>
                </ul>
                <h4>Other Skills:</h4>
                <ul className='software-skills-list'>
                    <li className="software-skills-item">SAS Data Analysis Certificate</li>
                    <li className="software-skills-item">Data Algorithm</li>
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
            <div className='hardware-panel panel-format'>
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

export default skillSoftware