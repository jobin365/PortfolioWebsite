import React from "react";
import IconLink from "../IconLink";
import "./Projects.css";
import { v4 as uuidv4 } from 'uuid';
export default function About() {
  const gitHubIcon = "fab fa-github fa-lg";
  const linkIcon = "fas fa-external-link-alt";
  const projects = [
    [
      "GetItDone ",
      "https://github.com/jobin365/GetItDone",
      "https://sleepy-ridge-02151.herokuapp.com/",
      [
        "A todo list application that allows you to maintain multiple lists of tasks",
        "Created using React, MongoDB and Express",
      ],
    ],
  ];
  return projects.map((item) => {
    const [name, gitHubURL, hostedURL, description] = item;
    return (
      <div key={uuidv4()}>
        <h2>
          {name}
          <IconLink URL={gitHubURL} icon={gitHubIcon}/>
          <IconLink URL={hostedURL} icon={linkIcon} />
        </h2>
        <ul style={{textAlign:"left"}}>
          {description.map((item) => {
            return <li key={uuidv4()}>{item}</li>;
          })}
        </ul>
      </div>
    );
  });
}
