import React, { useState, useEffect } from "react";
import { fetchWorksFromFirestore } from "../fetchdata";
import WorkCard from "./WorkCard";
import { motion, useAnimation } from "framer-motion";

const Work = () => {
  const [loading, setLoading] = useState(true);
  const [works, setWorks] = useState([]);
  const rotateControl = useAnimation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const work = await fetchWorksFromFirestore();
        setWorks(work);
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

  const workmap = works.map((item) => (
    <WorkCard key={item.id} item={item} />
  ));

  return (
    <motion.div
      className="work-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
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
          <h1 id="work-container-heading" data-aos="fade-up">
            My Works
          </h1>
          <div className="work-card">{workmap}</div>
        </>
      )}
    </motion.div>
  );
};

export default Work;
