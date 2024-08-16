import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import avatar from "../WhatsApp Image 2023-03-03 at 3.08.22 PM1.jpeg"
import SkillCard from "./SkillCard";
import { fetchSkillsFromFirestore } from "../fetchdata"
import Contact from "./Contact";
import { motion } from "framer-motion";

export default function MainContent() {
    const location = useLocation()
    React.useEffect(() => {
        if (location.hash) {
            let elem = document.getElementById(location.hash.slice(1))
            if (elem) {
                elem.scrollIntoView({ behavior: "smooth" })
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
        }
    }, [location,])
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const skillset = await fetchSkillsFromFirestore();
            setSkills(skillset);
        };

        fetchData();
    }, []);
    const skillmap = skills.map(item => {
        return (
            <SkillCard key={item.id} item={item} />
        )
    }
    )
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
            <div className="main-items">
                <div className="text-intro" data-aos="fade-up">
                    <h1 id="welcome" className="glitch" data-text="Hello, I am Mohammad Adnan">Hello, I am Mohammad Adnan</h1>
                    <p id="brief-intro">I am a software developer and a content creator based in India.</p>
                    <a id="resume-link" href="https://resume.io/r/v977YRsSI" target="_blank" rel="noopener noreferrer"><button id="resume-but">Resume</button></a>
                </div>
                <div id="avatar" data-aos="fade-up">
                    <img src={avatar} alt="" />
                </div>
            </div>
            <h2 id="skill-heading" data-aos="fade-up">MY SKILLS</h2>
            <section id="skills" data-aos="zoom-in-up" data-aos-duration="500">
                {skillmap}
            </section>
            <section id="hobbs">
                <section id="working" data-aos="flip-left" data-aos-duration="1000">
                    <h3 id="working-heading">I do projects and programming</h3>
                    <p id="working-para">Worked on various projects, including creating web applications, developing Android applications, and experimenting with a lot of fun and innovative things.</p>
                    <Link to="/work" id="working-button-space"><button id="working-button">SEE MY WORK</button></Link>
                </section>

                <section id="content-creating" data-aos="flip-right" data-aos-duration="1000">
                    <h3 id="content-creating-heading">I create courses on Youtube</h3>
                    <p id="content-creating-para">Created courses on YouTube and made videos on coding courses to help beginners start their coding journey.</p>
                    <Link to="/contents" id="content-creating-button-space"><button id="content-creating-button">SEE MY CONTENTS</button></Link>
                </section>
            </section>
            <Contact />
        </motion.div>
    )
}

