import React from "react";
import "./Navbar.css";
import Fab from "@mui/material/Fab";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";

export default function Navbar() {
  const buttonStyle = {
    margin: "10px",
    width: "180px",
  };

  return (
    <div className="navbar">
      <Link className="link" to="/about">
        <Fab style={buttonStyle} color="primary" variant="extended">
          <AccountCircleIcon sx={{ mr: 1 }} />
          About
        </Fab>
      </Link>
      <Link className="link" to="/experience">
        <Fab style={buttonStyle} color="primary" variant="extended">
          <WorkIcon sx={{ mr: 1 }} />
          Experience
        </Fab>
      </Link>
      <Link className="link" to="/projects">
        <Fab style={buttonStyle} color="primary" variant="extended">
          <CodeIcon sx={{ mr: 1 }} />
          Projects
        </Fab>
      </Link>
      <Link className="link" to="/education">
        <Fab style={buttonStyle} color="primary" variant="extended">
          <SchoolIcon sx={{ mr: 1 }} />
          Education
        </Fab>
      </Link>
    </div>
  );
}
