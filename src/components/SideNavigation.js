import React from "react";
import Logo from "./volleyball-ball-solid.svg"
import "././stylesheet/SideNavigation.css";
import {Link} from "react-router-dom"

const SideNavigation =()=>{
    return(
        <div className="main-side-navigation-div">
            <div className="app-icon">
                <img src={Logo} alt=""/>
            </div>
            {/* Clicking the button below should show a div containing small buttons that indicator colors */}
            <button className="add-goal-button">
                <i className="fa fa-plus"></i>
                </button>
                <div className="overall-nav-btn">
               <Link to="/goals">
               <button className="nav-button">
                <i className=" fa fa-home icon"></i>
                </button>
               </Link>
            <button className="nav-button">
                <i className="fa fa-cogs icon"></i>
                </button>
                </div>
           
        </div>
    )
}


export default SideNavigation;