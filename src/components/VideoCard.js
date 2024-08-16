export default function VideoCard(props){
    return(
        <div id="video-card" data-aos="zoom-in-up" data-aos-duration="500">
            <div id="video-img-section">
                <a href={props.item.url} target="_blank" rel="noopener noreferrer"><img id="video-img" src={props.item.thumbnail} alt="" /></a>
            </div>
        <h1 id="video-heading">{props.item.title}</h1>
        <h2 id="video-desc">{props.item.desc}</h2>
        <a id="video-link" href={props.item.url} target="_blank" rel="noopener noreferrer"><button id="video-button">Click to Watch</button></a>
        </div>
    )
}