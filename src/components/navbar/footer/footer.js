import React from 'react'
import "./footer.css"
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
const footer = () => {
  return (
    <div className='footer'>
      <h2>About</h2>
      <p>Buzznewz is a highly dedicated news site that priorities dispering of accurate and facutal 
        informatioin on the public
      </p>
      <div className='socials'>
        <p>send us a Mail:  <span>buzznewz@gmail.com</span></p>
        <FaYoutube className='yt icon'/>
        <FaTwitter  className=' icon'/>
        <FaFacebook className=' icon' />
        <FaInstagram   className=' icon'/>
        <FaLinkedin   className=' icon'/>

      </div>
    </div>
  )
}

export default footer
