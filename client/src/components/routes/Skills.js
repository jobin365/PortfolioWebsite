import React from "react";
import LogoNName from "../LogoNName";
import ReactLogo from "../images/react.png";
import MongoDBLogo from "../images/mongo.png";
import ExpressLogo from "../images/express.png";
import GitLogo from "../images/git.png";
import { v4 as uuidv4 } from 'uuid';
import "./Skills.css"
export default function About() {
  const skills = [
    ["React", ReactLogo ],
    ["MongoDB",MongoDBLogo ],
    ["Express",ExpressLogo],
    ["Git",GitLogo]
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
