import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import Homepic from "../Image/MySelf/Home_pic.png"
import Homepic2 from "../Image/MySelf/Home_pic_2.png"

const Home = () => {
    return (
        <div className='home-panel'>
            <div className="Home-body-panel">
                <img className='Home-image' src={Homepic2} alt="Homepic"></img>
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
            <div className='software-panel panel-format'>
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

export default Home