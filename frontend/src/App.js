import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import Content from "./components/Content"
import Work from "./components/Work"
import About from "./components/About"
import ScrollToTop from "./components/ScrollToTop"


function App() {
  return (
    <Router basename='/'>
      <ScrollToTop />
    <div>
      <Header />
      <Routes>
                <Route path="/work" element={<><Work /> <Footer name1="Home" name2="My contents" name3 = "About me"/></>}></Route>
                <Route path="/contents" element={<><Content /> <Footer name1="Home" name2="My work" name3 = "About me"/></>}></Route>
                <Route path="/about" element={<><About /> <Footer name1="Home" name2="My work" name3 = "My contents"/></>}></Route>
                <Route path="/" element={<><MainContent /> <Footer name1="My work" name2="My contents" name3 = "About me"/></>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
