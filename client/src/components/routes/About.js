import React from "react";
import profilePic from "./profile_pic.png"
import "./About.css"
export default function About(){
    return(
        <>
        <div className="left-container">
        <img alt="profile pic" src={profilePic}></img>
        <h1>Jobin John K</h1>
        </div>
        <p>
        Candidate with beginner to intermediate experience in developing and deploying full stack web applications using version control. 
        Main technical skills include React, MongoDB and Express. Have created several projects and published them on GitHub page. 
        Graduated with a degree in computer science and currently pursuing masters from Lovely Professional University.
        </p>
        </>
    )
}