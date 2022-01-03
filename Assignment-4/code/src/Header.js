import React from 'react'
import "./header.css"
export default function Header() {
    return (
      <nav className="nav">
        <img
          className="icon"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        ></img>
        <img className='camera' src="https://thumbnail.imgbin.com/25/6/15/imgbin-camera-logo-photography-camera-photography-s-black-camera-illustration-5qp627a6gUTFTwdFkMH3GhZne_t.jpg" />
      </nav>
    );
}