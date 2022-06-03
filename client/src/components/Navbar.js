import {React,useState,useEffect} from "react";
import "./Navbar.css";
import Fab from "@mui/material/Fab";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import CodeIcon from "@mui/icons-material/Code";
import SchoolIcon from "@mui/icons-material/School";
import { Link } from "react-router-dom";
import BoltIcon from "@mui/icons-material/Bolt";
import { v4 as uuidv4 } from 'uuid';

export default function Navbar() {

  const [screenWidth,setScreenWidth]=useState();
  const buttonStyleDesktop = {
    margin: "10px",
    width: "180px",
  };
  const buttonStyleMobile={
    margin:"10px"
  }
  const iconStyle = {
    mr: (screenWidth>=900)?1:0,
  };
  
  const data = [
    ["/about", <AccountCircleIcon sx={iconStyle} />, "About"],
    ["/skills", <BoltIcon  sx={iconStyle} />, "Skills"],
    ["/experience", <WorkIcon sx={iconStyle} />, "Experience"],
    ["/projects", <CodeIcon sx={iconStyle} />, "Projects"],
    ["/education", <SchoolIcon sx={iconStyle} />, "Education"],
  ];
  useEffect(()=>{
    setScreenWidth(window.screen.width);
  },[])
  return (
    <div className="navbar">
      {data.map((item) => {
        const [route, icon, name] = item;
        return (
          <div key={uuidv4()} className="navButton">
          <Link className="link" to={route}>
            <Fab style={(screenWidth>=900)?buttonStyleDesktop:buttonStyleMobile} color="primary" variant={(screenWidth>=900)?"extended":"circular"}>
              {icon}
              {(screenWidth>=900)&&name}
            </Fab>
          </Link>
          </div>
        );
      })}
    </div>
  );
}
