import MainContent from "./MainContent";
import Footer from "./Footer";
import Content from "./Content";
import Work from "./Work";
import About from "./About";
import Resume from "./Resume";
import { Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/work" element={<><Work /> <Footer name1="Home" name2="My contents" name3="About me" /></>}></Route>
        <Route path="/contents" element={<><Content /> <Footer name1="Home" name2="My work" name3="About me" /></>}></Route>
        <Route path="/about" element={<><About /> <Footer name1="Home" name2="My work" name3="My contents" /></>}></Route>
        <Route path="/resume" element = {<><Resume/><Footer name1="My work" name2="My contents" name3="About me" /></>}></Route>
        <Route path="/" element={<><MainContent /> <Footer name1="My work" name2="My contents" name3="About me" /></>}></Route>
      </Routes>
    </AnimatePresence>
  );
}
