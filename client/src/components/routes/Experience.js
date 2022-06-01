import React from "react";
import LogoNName from "../LogoNName";
import eClerx from "../images/eclerx.png"
export default function About(){
    return(<>
        <h2>Intern</h2>
        <LogoNName name="Eclerx" logoURL={eClerx}/>
        <p>June 2nd 2022 - June 2nd 2023</p>
        <ul style={{textAlign:"left"}}>
            <li>Selected through campus recruitment</li>
            <li>Selected through campus</li>
        </ul>
        </>
    )
}