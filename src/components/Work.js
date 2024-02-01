import React from "react";
import work from "../works"
import WorkCard from "./WorkCard";

export default function Work(){
    const works = work.map(items=>{
        return <WorkCard key={items.id} item={items} />
    })
    return(
        <div className="work-container">
        <h1 id="work-container-heading" data-aos = "fade-up">My Works</h1>
        <div className="work-card">
            {works}
        </div>
        </div>
    )
}