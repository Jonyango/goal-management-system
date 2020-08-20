import React,{useState} from "react";
import SideNavigation from "../components/SideNavigation";
import Goals from "../components/Goals";
import Quotes from "../components/Quotes";
// import './App.css';

function HomePage() {
    const[searchInput,setSearchInput]=useState();
  
    return (
      <div className="App">
        <SideNavigation />      
        <Goals/>
        <Quotes/>
        
        
      </div>
    );
  }
  
  export default HomePage;