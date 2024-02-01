import React from "react";

export default function SkillCard(props){
    return(
        <div id="skill-box">
            <img src={props.item.img} alt="" id="skill-logo"/>
            <p id="skill-title">{props.item.title}</p>
        </div>
    )
}