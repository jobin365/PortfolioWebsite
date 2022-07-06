import React from "react";
import LPU from "../images/lpu-min.png";
import YIMS from "../images/yims-min.png";
import LogoNName from "../LogoNName";
import uoc from "../images/uoc.png"
export default function About() {
  return (
    <>
      <h2>Master of Computer Applications</h2>
      <LogoNName name="Lovely Professional University" logoURL={LPU}/>
      <p>2021 - 2023</p><br/>
      <h2>Bachelor of Science in Computer Science</h2>
      <LogoNName name="Yuvakshetra Institute of Management Studies" logoURL={YIMS}/>
      <LogoNName name="University of Calicut" logoURL={uoc}/>
      <p>2018 - 2021</p>
    </>
  );
}
