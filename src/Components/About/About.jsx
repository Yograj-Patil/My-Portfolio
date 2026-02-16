import React from 'react'
import "./About.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import profile_image from "../../assets/My_Image.png"

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_image} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>Hi , My name is <span>Yograj Patil</span>. I belongs to <span>Burhanpur</span>. I completed my graduation in <span>B.Sc Computer Science</span> and currently pursuing my <span>MCA at SAGE University Indore</span>.</p>
            <p>I enjoy designing and developing <span>full-stack projects</span> that brings ideas to life, combining both front-end creativity and back-end logic. My focus is writing <span>clean, efficient, and maintainable code</span></p>
            <p>Currently, I am seeking opportunities to contribute my skills as a developer, learn from industry experts, and grow within a professional environment</p>
            <p>Outside academics, I love playing cricket and listening to music, which keep me active and inspired</p>
          </div>
         
        </div>
      </div>
    </div>
  )
}

export default About;