import { FormProvider } from 'antd/lib/form/context'
import React from 'react'
import './Personal.css'
import { GithubOutlined, LinkedinOutlined, MailOutlined, EnvironmentOutlined, AppstoreAddOutlined } from '@ant-design/icons'
import ContactPic from '../Image/MySelf/Contact_pic.jpg';
import Navigation from '../Navigation/navigation'

const Personal = () => {
  return (
    <div className='personal-panel'>
      <div className="personal-main-nav-container">
        <Navigation />
      </div>
      <div className="personal-main-panel">
        <div className="personal-contact-panel">
          <div className="personal-contact-panel-title">
            <h1 className="contact-title">Contact Me</h1>
            <h5 className="contact-boby">If you have anything want to talk with me, please do not hesitate to contact me, I am happy to talk with you about everything</h5>
          </div>
          <div className="personal-contact-panel-body">
            <div className="address-panel">
              <div className="panel-title"><EnvironmentOutlined /> Address</div>
              <div className="panel-body">121 Emerald St., Hamilton,ON, Canada</div>
            </div>
            <div className="email-panel">
              <div className="panel-title"><MailOutlined /> Email</div>
              <div className="panel-body">wangzhaobowork@gmail.com</div>
            </div>
            <div className="social-media-panel">
              <div className="panel-title"><AppstoreAddOutlined /> Social Media</div>
              <div className="social-media-panel-body">
                <a href="https://github.com/Zhaobo-Wang" className='a-color'>
                  <GithubOutlined />
                </a>
                <a href="https://www.linkedin.com/in/zhaobo-wang-419239170/" className='a-color'>
                  <LinkedinOutlined />
                </a>
                <a href="https://github.com/JimboWangSAP" className='a-color'>
                  <GithubOutlined />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="personal-image-panel">
          <img src={ContactPic} alt="picture" className='personal-image'/>
        </div>
      </div>
    </div>
  )
}

export default Personal