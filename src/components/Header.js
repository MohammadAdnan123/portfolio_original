import React from "react";
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"
import { Link } from "react-router-dom"
import logo from "../logo.jpg"


export default function Header() {
    const [navbarOpen, setNavbarOpen] = React.useState(false)
    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (

        <div className="header">
            <div id="logo">
                <Link to="/"><img src={logo} alt="" id="logo-img" /></Link>
            </div>
            <button id="hamburger" onClick={handleToggle}>{navbarOpen ? (<MdClose style={{ color: "#4EB1BA", width: "40px", height: "40px" }} />) : (<FiMenu style={{ color: "#4EB1BA", width: "40px", height: "40px" }} />)}</button>
            <nav className="navbar" >
                <ul id="navbar-list" className={`${navbarOpen ? "showMenu" : ""}`}>
                    <li><Link to="/work" className="navbar-items" onClick={() => closeMenu()}>My work</Link></li>
                    <li><Link to="/contents" className="navbar-items" onClick={() => closeMenu()}>My contents</Link></li>
                    <li><Link to="/about" className="navbar-items" onClick={() => closeMenu()}>About me</Link></li>
                </ul>
            </nav>
        </div>


    )
}