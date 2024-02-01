import React from "react";
import {Link} from "react-router-dom"

export default function Footer(props){
    return(
        <div className="footer">
            <div data-aos = "fade-up" data-aos-duration = "800">
            <div className="footer-main">
                <div className="hello">
                    <h5 className="footer-heading">SAY HELLO</h5>
                    <ul className="footer-list">
                        <li><a className="footer-list-items" href="https://www.instagram.com/mohammadadnan212/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a className="footer-list-items" href="https://www.linkedin.com/in/mohammad-adnan-11a33a222" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a className="footer-list-items" href="https://twitter.com/Mohamma33023944" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>
                <div className="footer-container">
                <h5 className="footer-heading">Look at this!</h5>
                    <ul className="footer-list">
                        <li><Link to={props.name1 === "My work" ? "/work" : "/"} className="footer-list-items">{props.name1}</Link></li>
                        <li><Link to={props.name2 === "My work" ? "/work" : "/contents"} className="footer-list-items">{props.name2}</Link></li>
                        <li><Link to={props.name3 === "My contentEduEdges" ? "/contents" : "/about"} className="footer-list-items">{props.name3}</Link></li>
                    </ul>
                </div>
            </div>
            <hr id="separator" />
            <div className="footer-copyright">
                <small id="tag-copyright">&#169; Adnan Alam Mallick 2023</small>
                <small id="social">
                    <li><a className="dev-link" href="https://www.codechef.com/users/mdadnan123" target="_blank" rel="noopener noreferrer">CodeChef</a></li>
                    <li><a className="dev-link" href="https://codeforces.com/profile/mdadnanofficial123" target="_blank" rel="noopener noreferrer">CodeForces</a></li>
                    <li><a className="dev-link" href="https://github.com/MohammadAdnan123" target="_blank" rel="noopener noreferrer">Github</a></li>
                    </small>
            </div>
            </div>
        </div>
    )
}