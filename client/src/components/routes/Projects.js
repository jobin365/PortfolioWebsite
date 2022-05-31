import React from "react";
import "./Projects.css"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';
export default function About(){
    return(<>
        <h2>GetItDone
        <a target="_blank" rel="noreferrer" href="https://github.com/jobin365/GetItDone"> <GitHubIcon/></a>
        <a target="_blank" rel="noreferrer" href="https://sleepy-ridge-02151.herokuapp.com/"><LinkIcon/></a>
        </h2>
        
        <ul>
            <li>A todo list application that allows you to maintain multiple lists of tasks</li>
            <li>Created using React, MongoDB and Express</li>
        </ul>
        </>
    )
}