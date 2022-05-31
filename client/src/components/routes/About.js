import React from "react";
import profilePic from "./profile_pic.png";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="photoNHeadingNLinks">
        <img alt="profile pic" src={profilePic}></img>
        <div className="headingNLinks">
          <h1>Jobin John K</h1>
          <div className="links">
            <a
              href="https://github.com/jobin365"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/jobin-john-k-b8141b1ba/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin fa-2x blue"></i>
            </a>
            <a
              href="https://www.hackerrank.com/jobinjohnk5"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-hackerrank fa-2x green"></i>
            </a>
            <a
              href="mailto:jobinjohnk5@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fas fa-envelope fa-2x red"></i>
            </a>
          </div>
        </div>
      </div>
      <p>
        Candidate with beginner to intermediate experience in developing and
        deploying full stack web applications using version control. Main
        technical skills include React, MongoDB and Express. Have created
        several projects and published them on GitHub page. Graduated with a
        degree in computer science and currently pursuing masters from Lovely
        Professional University.
      </p>
    </>
  );
}
