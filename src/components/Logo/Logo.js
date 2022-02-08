import React from "react";
import Tilt from 'react-parallax-tilt';
import logo from "./logo_transparent.png";
import "./Logo.css";

const Logo = () => {
    return(
        <div className="ma4 mt0">
            <Tilt className="logo br2 shadow-2" style={{height: '150px', width: '150px'}}>
                <div className="pa3">
                    <img style={{paddingTop: '15px'}} src={logo} alt="logo" /> 
                </div>
            </Tilt>
        </div>
    )
}

export default Logo;