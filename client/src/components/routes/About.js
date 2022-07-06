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
          <h1 className="myName">Jobin John K</h1>
          <h3>Digital Marketing Intern</h3>
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
        Currently doing internship at eClerx and is getting trained on Salesforce Marketing Cloud.
        Has self made experience in full stack development. Checkout the GitHub page and personal website.
        Graduated with a degree in computer science and pursuing masters in computer application.
        </p>
      </div>
    </>
  );
}
