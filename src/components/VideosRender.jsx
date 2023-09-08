import React from 'react'
import '../styles/videosRender.css'
import ReactPlayer from 'react-player';


const VideosRender = ({ video }) => {

    const handleClick = () => {
        window.open(video.url)
    }

    return (
        <article className="Card_video">
            <div className="Card_video_player">
                <ReactPlayer
                    url={video.url}
                    width={120} 
                    height={100}
                    playing={true}
                    muted={true}
                />
            </div>
            <div className="Card_video_information">
                <div className="Card_video_information_tittle">
                    <h3>{video.tittle}</h3>
                </div>
                <div className="Card_information_btns">
                    <h4>WATCH IT ON</h4>
                    <h4>...</h4>
                    <button onClick={handleClick}><i className='bx bxl-youtube'></i></button>
                </div>
            </div>
        </article>
    )
}

export default VideosRender