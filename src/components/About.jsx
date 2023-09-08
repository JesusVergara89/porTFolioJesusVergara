import React from 'react'
import '../styles/About.css'
import me from '../images/me.jpg'

const About = () => {
    return (
        <article className="about">

            <div className="about_container1">
                <div className="conatiner1_img">
                    <img src={me} alt="" />
                    <h3>Mechatronics Engineer</h3>
                </div>
                <div className="container1_paragraph">

                    <h2>THIS AND THAT</h2>
                    
                    <div className="paragraph">
                    <p>
                    I'm a highly skilled junior Front-end developer specializing in diverse web interface development through programming. My primary objective is to transform ideas and designs into exceptionally functional and visually appealing websites. I am dedicated to continuous improvement, staying abreast of the latest trends and technologies, to consistently deliver high-quality solutions. I warmly invite you to explore my portfolio, where you can review my work and previous experiences. 
                    </p>
                    </div>
                </div>
            </div>

            <div className="about_container2">

                <h2>THE TECHNOLOGIES I HAVE EXPERTISE IN...</h2>

                <div className="about_container2_items">

                <i className='bx bxl-javascript' ></i>
                <i className='bx bxl-react'></i>
                <i className='bx bxl-redux' ></i>
                <i className='bx bxl-html5' ></i>
                <i className='bx bxl-css3' ></i>
                <i className='bx bxl-git' ></i>
                <i className='bx bxl-github' ></i>
                <i className='bx bx-spreadsheet' ></i>
                <i className='bx bx-data' ></i>

                </div>

            </div>
            
        </article>
    )
}

export default About