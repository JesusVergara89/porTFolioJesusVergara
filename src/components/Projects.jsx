import '../styles/Projects.css'
import img1 from '../images/weather.jpg'
import img2 from '../images/portafolio.jpg'
import img3 from '../images/SolarWeb.jpg'
import img4 from '../images/poke.jpg'


const Projects = () => {

    return (
        <article className="projects_main">

            <h2>Some of my web projects</h2>

            <div className="projects_main_carousel">
                <div className='projects_main_carousel_img'>
                    <img src={img1} alt="" />
                    <button>
                        <a href="https://unibarranquilla-newspaper.netlify.app/" target='_blank'>
                            <i className='bx bx-navigation'></i>
                        </a>
                    </button>
                    <h4>News paper</h4>
                </div>
                <div className='projects_main_carousel_img'>
                    <img src={img2} alt="" />
                    <button>
                        <a href="https://jesusvergara.tech/" target='_blank'>
                            <i className='bx bx-navigation'>
                            </i>
                        </a>
                    </button>
                    <h4>Portfolio</h4>
                </div>
                <div className='projects_main_carousel_img'>
                    <img src={img3} alt="" />
                    <button>
                        <a href="https://barmexwebapp.netlify.app/" target='_blank'>
                            <i className='bx bx-navigation'>
                            </i>
                        </a>
                    </button>
                    <h4>Solar Budget</h4>
                </div>
                <div className='projects_main_carousel_img'>
                    <img src={img4} alt="" />
                    <button>
                        <a href="https://pokedex-be-fun.netlify.app/#/" target='_blank'>
                            <i className='bx bx-navigation'>
                            </i>
                        </a>
                    </button>
                    <h4>Pokedex</h4>
                </div>
            </div>

        </article>
    )
}

export default Projects