import './YoutubeVideo.css'

export default function YoutubeVideo({url}) {
    return (
        <div className="youtube-video-container">
              <iframe 
                src={"https://www.youtube.com/embed/" + url} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
        </div>
    )
}
