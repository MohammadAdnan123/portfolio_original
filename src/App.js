import React from "react"
import { BrowserRouter as Router } from "react-router-dom"

import Header from "./components/Header"
import ScrollToTop from "./components/ScrollToTop"
import AnimatedRoutes from "./components/AnimatedRoutes";


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Header />
        <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
