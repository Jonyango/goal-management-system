import React,{useState} from "react";

import "./Goals.css"


const Goals=({currentNotes})=>{
    const[searchInput,setSearchInput]=useState();
    
    return(
        <div className="goals-main-div">
            <form className="search-input">
                <i className="fa fa-search icon-2"></i>
                <input
                id="search-input"
                type="search"
                onChange={(e)=>{setSearchInput(e.target.value)}}
                placeholder="Search"
                />
            </form>
            <h1 className="title">Goals!</h1>
            <div id="goals">
            {currentNotes}
            </div>
            
            
        </div>
    );
};

export default Goals;