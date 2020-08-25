import React, { useState } from "react";
import Logo from "./volleyball-ball-solid.svg";
import "././stylesheet/SideNavigation.css";
import { Link } from "react-router-dom";

// create a component amd use state to toggle the visibility of the component
const NotesColorButton = ({ color1, color2, color3, color4, color5 }) => {
  return (
    <div id="notes-color-div">
      <button className="notes-color-btn" style={{ backgroundColor: color1 }}></button>
      <button className="notes-color-btn" style={{ backgroundColor: color2 }}></button>
      <button className="notes-color-btn" style={{ backgroundColor: color3 }}></button>
      <button className="notes-color-btn" style={{ backgroundColor: color4 }}></button>
      <button className="notes-color-btn" style={{ backgroundColor: color5 }}></button>
    </div>
  );
};

const SideNavigation = () => {
  let defaultState=false;
  const [showNotesButton, setNotesButton] = useState(defaultState);
  const onClick = () => {
    // Assign the current value of the showNotesButton to a temp variable
    //Negate the temp varibale  set the state and repeat
    defaultState=showNotesButton
    defaultState=!defaultState;
    setNotesButton(defaultState)
  };
  // 

  return (
    <div className="main-side-navigation-div">
      <div className="app-icon">
        <img src={Logo} alt="" />
      </div>
      {/* Clicking the button below should show a div containing small buttons that indicator colors */}
      <button className="add-goal-button" onClick={onClick}>
        <i className="fa fa-plus"></i>
      </button>
      {showNotesButton ? (
        <NotesColorButton
          color1="#c6d947"
          color2="#f3542a"
          color3="#f5972c"
          color4="#7049f0"
          color5="#0aa4f6"
        />
      ) : null}
      <div className="overall-nav-btn">
        <Link to="/">
          <button className="nav-button">
            <i className=" fa fa-home icon"></i>
          </button>
        </Link>
        <Link to="/goals">
          <button className="nav-button">
            <i className="material-icons icon">folder</i>
          </button>
        </Link>
        <button className="nav-button">
          <i className="fa fa-cogs icon"></i>
        </button>
      </div>
    </div>
  );
};

export default SideNavigation;
