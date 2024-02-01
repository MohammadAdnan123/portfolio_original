import React, {useState, useEffect} from "react";
import {fetchWorksFromFirestore} from "../fetchdata"
import WorkCard from "./WorkCard";

export default function Work(){
    const [works, setWorks] = useState([]);
useEffect(() => {
    const fetchData = async () => {
      const work = await fetchWorksFromFirestore();
      setWorks(work);
    };

    fetchData();
  }, []);
    const workmap = works.map(items=>{
        return <WorkCard key={items.id} item={items} />
    })
    return(
        <div className="work-container">
        <h1 id="work-container-heading" data-aos = "fade-up">My Works</h1>
        <div className="work-card">
            {workmap}
        </div>
        </div>
    )
}