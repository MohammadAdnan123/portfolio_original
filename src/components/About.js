import React from "react";
import {Link} from "react-router-dom"
import { motion } from "framer-motion";

export default function About(){
    return(
        <motion.div className="about-container" initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
        <h1 id="about-heading" data-aos = "fade-up">About Me</h1>
        <p className="about-para" data-aos = "fade-up">Hello visitor! This is Mohammad Adnan. I am a student pursuing bachelors in Computer Science and Engineering from IIT Palakkad, India. As you can interpret I am very much interested in learning new technologies, check <span><Link id="skill-link" to="/#skill-heading">my skills</Link></span> and I keep on implementing those technologies to create something intuitive ;) </p>
        <p className="about-para" data-aos = "fade-up">I have 2+ years of experience in Web development and have recently started working in Android development. Apart from that I am trying to do my best in becoming an expert in programming and DSA.</p>
        <p className="about-para" data-aos = "fade-up">Also I have recently started a youtube channel where I teach all the coding skills that I know about. You can jump to my <span><a id="youtube-link" href="https://www.youtube.com/channel/UC0ANKFF2ymPgP4HhXu1PgBA" target="_blank" rel="noopener noreferrer">Youtube channel</a></span> if you are a beginner and interested in learning programming.</p>
        </motion.div>
    )
}