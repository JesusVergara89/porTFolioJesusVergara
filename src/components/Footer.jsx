import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
    return (
        <article className="footer">
            <article className="container1">
                <div className="container1_btns">
                    <button className="container1_btn">
                        <a href="https://www.instagram.com/vergara.8901/" target='_blank'>
                            <i className='bx bxl-instagram'></i>
                        </a>
                    </button>
                    <button className="container1_btn">
                        <a href="https://github.com/JesusVergara89" target='_blank'>
                            <i className='bx bxl-github' ></i>
                        </a>
                    </button>
                    <button className="container1_btn">
                        <a href="https://www.linkedin.com/in/jesus-manuel-vergara-975799216/" target='_blank'>
                            <i className='bx bxl-linkedin' ></i>
                        </a>
                    </button>
                    <button className="container1_btn">
                        <a href="https://www.youtube.com/channel/UCe14TjbbRpZhPQsGdWFzlHg" target='_blank'>
                            <i className='bx bxl-youtube' ></i>
                        </a>
                    </button>
                </div>

                <div className="container1_haf">
                    <h4>JESUSMANUELV1989@GMAIL.COM</h4>
                </div>

            </article>

            <article className="container2">
                <div className="container2_logo">
                    <div className="header_logo_name_square_footer"></div>
                    <div className="header_logo_name_triangle_footer"></div>
                    <div className="header_logo_name_circle_footer"></div>
                </div>

                <div className="container2_thx">
                    <h5>This design is based on:</h5>
                    <button><a href="http://mottau.co.uk/" target="_blank" rel="noopener noreferrer"><i className='bx bx-copyright'></i></a></button>
                </div>

            </article>
        </article>
    )
}

export default Footer