import React from "react";
import profilePic from "../images/profilePic-min.png";
import IconLink from "../IconLink";
import "./About.css";

export default function About() {
  return (
    <>
      <div className="photoNHeadingNLinks">
        <img alt="profile pic" src={profilePic}></img>
        <div className="headingNLinks">
          <h1>Jobin John K</h1>
          <div className="links">
            <IconLink
              URL="https://github.com/jobin365"
              icon="fab fa-github fa-2x black"
            />
            <IconLink
              URL="https://www.linkedin.com/in/jobin-john-k-b8141b1ba/"
              icon="fab fa-linkedin fa-2x blue"
            />
            <IconLink
              URL="https://www.hackerrank.com/jobinjohnk5"
              icon="fab fa-hackerrank fa-2x green"
            />
            <IconLink
              URL="mailto:jobinjohnk5@gmail.com"
              icon="fas fa-envelope fa-2x red"
              noRightMargin="false"
            />
          </div>
        </div>
      </div>
      <div className="about">
        <p>
          Candidate with beginner to intermediate experience in developing and
          deploying full stack web applications using version control. Main
          technical skills include React, MongoDB and Express. Have created
          several projects and published them on GitHub page. Graduated with a
          degree in computer science and currently pursuing masters from Lovely
          Professional University.
        </p>
      </div>
    </>
  );
}
