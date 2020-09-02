import React, { useState } from "react";
import { createUseStyles } from "react-jss";

import "./Goals.css";

const useStyles = createUseStyles({
  wrapper: {
    textAlign: "center",
    fontSize: "1.8em",
    fontWeight: "lighter",
  },
});

const Goals = ({ currentNotes, showNotes }) => {
  const [searchInput, setSearchInput] = useState();
  const classes = useStyles();

  return (
    <div className="goals-main-div">
      <form className="search-input">
        <i className="fa fa-search icon-2"></i>
        <input
          id="search-input"
          type="search"
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          placeholder="Search"
        />
      </form>
      <h1 className="title">Goals!</h1>
      <div id="goals">{currentNotes}</div>
      {showNotes === 0 ? <p className={classes.wrapper}>Your Goals will appear here</p> : null}
    </div>
  );
};

export default Goals;
