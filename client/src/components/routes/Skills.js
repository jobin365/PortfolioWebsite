import React from "react";
import LogoNName from "../LogoNName";
import ReactLogo from "../images/react-min.png";
import MongoDBLogo from "../images/mongo-min.png";
import ExpressLogo from "../images/express-min.png";
import GitLogo from "../images/git-min.png";
import JSLogo from "../images/js.png";
import HTMLLogo from "../images/html.png";
import CSSLogo from "../images/css.png";
import { v4 as uuidv4 } from 'uuid';
import "./Skills.css"
export default function About() {
  const skills = [
    ["React", ReactLogo ],
    ["MongoDB",MongoDBLogo ],
    ["Express",ExpressLogo],
    ["Git",GitLogo],
    ["JavaScript",JSLogo],
    ["CSS",CSSLogo],
    ["HTML",HTMLLogo]
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
