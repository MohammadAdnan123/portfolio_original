import { motion } from "framer-motion";

const Resume = ({ onClose }) => {
  return (
    <motion.div
      className="resume-container"
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
    >
      <h2>Your Resume Content Goes Here</h2>
      <button onClick={onClose}>Close</button>
    </motion.div>
  );
};

export default Resume;
