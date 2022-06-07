import React from "react";
import LogoNName from "../LogoNName";
import ReactLogo from "../images/react-min.png";
import MongoDBLogo from "../images/mongo-min.png";
import ExpressLogo from "../images/express-min.png";
import GitLogo from "../images/git-min.png";
import JSLogo from "../images/js.png";
import { v4 as uuidv4 } from 'uuid';
import "./Skills.css"
export default function About() {
  const skills = [
    ["React", ReactLogo ],
    ["MongoDB",MongoDBLogo ],
    ["Express",ExpressLogo],
    ["Git",GitLogo],
    ["JavaScript",JSLogo]
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
