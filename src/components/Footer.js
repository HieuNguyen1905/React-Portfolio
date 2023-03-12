import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
        <a href='https://github.com/HieuNguyen1905' >
      <img alt='' src={require("../picture/github.png")}/>
      </a>
      <a href='https://www.linkedin.com' >
      <img alt='' src={require("../picture/linkin.png")}/>
      </a>
      <a href='https://www.facebook.com' >
      <img alt='' src={require("../picture/facebook.png")}/>
      </a>
    </footer>
  )
}

export default Footer