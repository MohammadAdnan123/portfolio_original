import React, { useState, useEffect } from "react";
import { fetchVideosFromFirestore } from "../fetchdata"
import VideoCard from "./VideoCard";
import { motion, useAnimation } from "framer-motion";

export default function Content() {
    const [loading, setLoading] = useState(true);
    const [videos, setVideos] = useState([]);
    const rotateControl = useAnimation();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const video = await fetchVideosFromFirestore();
                setVideos(video);
              } catch (error) {
                console.error("Error fetching data:", error);
              } finally {
                setLoading(false);
              }
        };

        fetchData();
    }, []);
    useEffect(() => {
        // Rotate animation while loading
        if (loading) {
          rotateControl.start({ rotateY: [0, 360], transition: { duration: 2, repeat: Infinity } });
        } else {
          rotateControl.stop();
        }
      }, [loading, rotateControl]);

    const videomap = videos.map(items => {
        return <VideoCard key={items.id} item={items} />
    })
    return (
        <motion.div className="content-container"  initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            {loading ? (
        // Spinning 3D cube loading animation
        <motion.div
          className="loading-screen"
          animate={rotateControl}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}
        >
          <motion.div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#4EB1BA",
              opacity: 0.8,
              rotateY: [0, 360],
              rotateX: [0, 360],
              rotateZ: [0, 360],
              borderRadius: "10%",
              boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
            }}
          ></motion.div>
        </motion.div>
      ) : (
        // Render the content once data is fetched
        <>
          <h1 id="content-heading1" data-aos="fade-up">My Contents</h1>
            <h2 id="content-heading2" data-aos="fade-up">Below are the youtube contents that teaches coding to beginners.</h2>
            <div className="video-container">
                {videomap}
            </div>
        </>
      )}
        </motion.div>
    )
}
