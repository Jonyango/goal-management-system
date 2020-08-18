import React,{useState} from "react";
import "././stylesheet/Goals.css"

const Goals=()=>{
    const[searchInput,setSearchInput]=useState()
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
        </div>
    );
};

export default Goals;