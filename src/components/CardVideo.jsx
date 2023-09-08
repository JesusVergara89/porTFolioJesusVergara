import React from 'react'
import '../styles/cardvideo.css'
import useVideos from '../hooks/useVideos'
import VideosRender from './VideosRender'

const CardVideo = () => {

  const videos = useVideos()

  return (
    <article className="Video_card">
      <div className="Video_card_rentangle">
        <h2>MY WORK...</h2>
        <div className="Video_card_rentangle_videos">

          {
            videos?.map((video, i) => (
              <VideosRender
                video={video}
                key={video.id}
              />
            ))
          }

        </div>
      </div>
    </article>
  )
}

export default CardVideo