import React from 'react'
import "./Skills.css"
import theme_pattern from "../../assets/theme_pattern.svg"

const Skills = () => {
    return (
        <div id='skills' className='skills'>
            <div className="skills-title">
                <h1>My Skills</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="skills-container">
                <div className="skills-card">
                    <h2>Frontend</h2>
                    <p>HTML5, CSS3, JavaScript(ES6+), React.js, Redux, Tailwind CSS, Bootstrap</p>
                </div>
                <div className="skills-card">
                    <h2>Backend</h2>
                    <p>Node.js, Express.js, REST APIs</p>
                </div>
                <div className="skills-card">
                    <h2>Database</h2>
                    <p>MongoDB, Mongoose</p>
                </div>
                <div className="skills-card">
                    <h2>Tools</h2>
                    <p>Git, GitHub, Postman, VS code, npm</p>
                </div>

            </div>
        </div>
    )
}

export default Skills;