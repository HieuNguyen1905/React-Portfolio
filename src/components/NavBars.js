import React from "react";
import './NavBars.css'

function NavBars(props){
    return(
        <ul className="nav">
            <div>
                <img alt="" src={require("../picture/name.png")}/>
            </div>
            <li className="nav-item">
                <a href="#about" className="link" id={props.currentPage ==='About'? 'active':'non-active'} onClick={()=> props.handlePageChange("About")}>
                    About Me
                </a>
            </li>
            <li className="nav-item">
                <a href="#Contact" className="link" id={props.currentPage ==='Contact'? 'active':'non-active'} onClick={()=> props.handlePageChange("Contact")}>
                    Contact
                </a>
            </li>
            <li className="nav-item">
                <a href="#Portfolio" className="link" id={props.currentPage ==='Portfolio'? 'active':'non-active'} onClick={()=> props.handlePageChange("Portfolio")}>
                    Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a href="#Resume" className="link" id={props.currentPage ==='Resume'? 'active':'non-active'} onClick={()=> props.handlePageChange("Resume")}>
                    Resume
                </a>
            </li>
        </ul>
    )
}

export default NavBars;