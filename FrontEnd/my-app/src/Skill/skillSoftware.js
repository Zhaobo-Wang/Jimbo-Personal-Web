import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

const skillSoftware = () => {
    return (
        <div className='home-panel'>
            <div className="software-body-panel">
                <h1>Software Skills:</h1>
                <div className="software-skill-panel">
                    <div className="front-end-panel">
                        <h2>FrontEnd Skills:</h2>
                        <ul className='software-skills-list'>
                            <li className="software-skills-item react">
                                <h3>React</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent react">98%</div>
                                </div>
                            </li>
                            <li className="software-skills-item html">
                                <h3>Html</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent html">100%</div>
                                </div>
                            </li>
                            <li className="software-skills-item css">
                                <h3>CSS</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent css">98%</div>
                                </div>
                            </li>
                            <li className="software-skills-item javascript">
                                <h3>Javascript</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent js">95%</div>
                                </div>
                            </li>
                            <li className="software-skills-item sapui5">
                                <h3>SAPUI5</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent sapui5">90%</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="back-end-panel">
                        <h2>BackEnd Skills:</h2>
                        <ul className='software-skills-list'>
                            <li className="software-skills-item python">
                                <h3>Python</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent python">94%</div>
                                </div>
                            </li>
                            <li className="software-skills-item django">
                                <h3>Django</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent django">94%</div>
                                </div>
                            </li>
                            <li className="software-skills-item git">
                                <h3>Git</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent git">98%</div>
                                </div>
                            </li>
                            <li className="software-skills-item linux">
                                <h3>Linux</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent linux">85%</div>
                                </div>
                            </li>
                            <li className="software-skills-item mongoDB">
                                <h3>MongoDB</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent mongoDB">95%</div>
                                </div>
                            </li>
                            <li className="software-skills-item nodeJS">
                                <h3>NodeJS</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent NodeJS">95%</div>
                                </div>
                            </li>
                            <li className="software-skills-item express">
                                <h3>Express</h3>
                                <div className='scale-width'>
                                    <div className="scale-percent express">92%</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
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