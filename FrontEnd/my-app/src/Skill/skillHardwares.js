import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Navigation from '../Navigation/navigation'
const skillHardwares = () => {
    return (
        <div className='home-panel'>
            <div className="hardware-main-nav-container">
                <Navigation />
            </div>
            <div className="hardware-body-panel">
                <div className="hardware-skill-panel">
                    <div className="course-panel">
                        <h2>McMaster Courses Taken:</h2>
                        <ul className='hardware-skills-list'>
                            <li className="hardware-skills-item">
                                <h3>Circuit and System</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent aa">A+</div>
                                </div>
                            </li>
                            <li className="hardware-skills-item">
                                <h3>Logic and Design</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent bb">B+</div>
                                </div>
                            </li>
                            <li className="hardware-skills-item">
                                <h3>Microprocessor Project</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent ab">A-</div>
                                </div>
                            </li>
                            <li className="hardware-skills-item">
                                <h3>Control System</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent a">A</div>
                                </div>
                            </li>
                            <li className="hardware-skills-item">
                                <h3>Communication System</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent ab">A-</div>
                                </div>
                            </li>
                            <li className="hardware-skills-item">
                                <h3>Signal and System</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent ab">A-</div>
                                </div>
                            </li>
                            <li className="hardware-skills-item">
                                <h3>ElectronMagnetic</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent a">A</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="other-skills-panel">
                        <h2>Other Skills:</h2>
                        <ul className='software-skills-list'>
                            <li className="software-skills-item">
                                <h3>SAS Data Analysis Certificate</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent aa">100%</div>
                                </div>
                            </li>
                            <li className="software-skills-item">
                                <h3>Data Algorithm</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent ab">90%</div>
                                </div>
                            </li>
                            <li className="software-skills-item">
                                <h3>Matlab</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent b">80%</div>
                                </div>
                            </li>
                            <li className="software-skills-item">
                                <h3>Excel</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent a">95%</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className='hardware-art-word'>Hardware Skills</span>
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