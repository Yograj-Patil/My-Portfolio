import React from 'react'
import "./Projects.css"
import theme_pattern from "../../assets/theme_pattern.svg"
import mywork_data from "../../assets/mywork_data";
import arrow_icon from "../../assets/arrow_icon.svg"

const MyWork = () => {
  return (
    <div id='projects' className='mywork'>
      <div className="mywork-title">
        <h1>My Latest Work</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((work, index) => {
          return (
            <a
              key={index}
              href={work.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img key={index} src={work.w_img} alt=''></img>
            </a>
          )
        })}
      </div>
      <div className="mywork-showmore">
        <p>
          <a href="https://github.com/Yograj-Patil"
            target="_blank"
            rel="noopener noreferrer">
            Show More</a>
        </p>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
  )
}

export default MyWork;