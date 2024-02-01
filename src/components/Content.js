import React, {useState, useEffect} from "react";
import {fetchVideosFromFirestore} from "../fetchdata"
import VideoCard from "./VideoCard";

export default function Content(){
    const [videos, setVideos] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      const video = await fetchVideosFromFirestore();
      setVideos(video);
    };

    fetchData();
  }, []);
    const videomap = videos.map(items=>{
        return <VideoCard key={items.id} item={items} />
    })
    return(
        <div className="content-container">
        <h1 id="content-heading1" data-aos = "fade-up">My Contents</h1>
        <h2 id="content-heading2" data-aos = "fade-up">Below are the youtube contents that teaches coding to beginners.</h2>
        <div className="video-container">
            {videomap}
        </div>
        </div>
    )
}