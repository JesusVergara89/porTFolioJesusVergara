import React from 'react'
import '../styles/introduction.css'
import CardVideo from './CardVideo'
import Projects from './Projects'
import Footer from './Footer'

const Introduction = () => {


    return (
        <article className="Home">

            <div className="Home_introduction">
                <h1>JESUS VERGARA</h1>
                <h2>Front End Developer</h2>
            </div>
            <CardVideo />
            <Projects />
            <Footer />
        </article>
    )
}

export default Introduction