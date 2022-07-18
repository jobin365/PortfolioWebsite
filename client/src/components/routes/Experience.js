import React from "react";
import LogoNName from "../LogoNName";
import eClerx from "../images/eclerx-min.png"
export default function About(){
    return(<>
        <h2>Intern</h2> <LogoNName name="eClerx" logoURL={eClerx}/>
        <p>June 2022 - Present</p>
        <ul style={{textAlign:"left"}}>
            <li>Currently undergoing training in emailops and salesforce marketing cloud</li>
        </ul>
        </>
    )
}