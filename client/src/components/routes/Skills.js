import React from "react";
import LogoNName from "../LogoNName";
import GitLogo from "../images/git-min.png";
import JSLogo from "../images/js.png";
import mernLogo from "../images/mern.png";
import htmlNcssLogo from "../images/html&css.png"
import sfLogo from "../images/salesforce.png";
import { v4 as uuidv4 } from 'uuid';
import "./Skills.css"
export default function About() {
  const skills = [
    ["Salesforce Marketing Cloud",sfLogo],
    ["MERN Stack Development",mernLogo],
    ["Git",GitLogo],
    ["JavaScript",JSLogo],
    ["HTML & CSS",htmlNcssLogo]
  ];
  return (
    <div className="skills">
      {skills.map((item) => {
        const [name,logo]=item;
        return <LogoNName name={name} logoURL={logo} key={uuidv4()} />;
      })}
    </div>
  );
}
