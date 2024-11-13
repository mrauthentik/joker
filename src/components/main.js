import React from "react";

export default function Main({img,title,startDate,endDate,googleMaps,location}){
    return(
        <section>
            <img src={img} alt="" className="main-img"/>
            <h2>{title}</h2>
            <h3>{googleMaps}</h3>
            <p>{startDate}</p>
            <p>{endDate}</p>
            <p>{location}</p>
            <hr></hr>
        </section>
    )
}