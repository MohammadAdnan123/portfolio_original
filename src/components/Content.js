import React from "react";
import VideoCard from "./VideoCard";
import video from "../videos"

export default function Content(){
    const videos = video.map(items=>{
        return <VideoCard key={items.id} item={items} />
    })
    return(
        <div className="content-container">
        <h1 id="content-heading1" data-aos = "fade-up">My Contents</h1>
        <h2 id="content-heading2" data-aos = "fade-up">Below are the youtube contents that teaches coding to beginners.</h2>
        <div className="video-container">
            {videos}
        </div>
        </div>
    )
}