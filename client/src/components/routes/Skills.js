import React from "react";
import LogoNName from "../LogoNName";
import GitLogo from "../images/git-min.png";
import JSLogo from "../images/js.png";
import htmlNcssLogo from "../images/html&css.png"
import sfLogo from "../images/salesforce.png";
import reactLogo from "../images/react-min.png";
import mongoLogo from "../images/mongo-min.png";
import expressLogo from "../images/express-min.png";
import { v4 as uuidv4 } from 'uuid';
import "./Skills.css"
export default function About() {
  const skills = [
    ["React",reactLogo],
    ["MongoDB",mongoLogo],
    ["Express",expressLogo],
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
