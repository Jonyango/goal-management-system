import React,{useState} from "react";
import SideNavigation from "../components/SideNavigation";
import Goals from "../components/Goals";
import Quotes from "../components/Quotes";
// import './App.css';


const Goal=()=>{
  return (
      <div>
          <h1>I am here</h1>
      </div>
  )
}

function HomePage() {
  // a variable that tracks the number of notes I am adding on the screen
    let appendedCount=0;
    const[searchInput,setSearchInput]=useState();
    const[showNotes,setShowNotes]=useState(appendedCount);

// when my button is clicked, I update the number count of the componets added
    const onClickMethod=()=>{
      appendedCount=showNotes;
      appendedCount = appendedCount + 1
      setShowNotes(appendedCount);
    }

    // I have a fucntion that loops to add the componets in a list
   const getAppendedComponents = () => {
      let appendedComponents = [];
      for (let i = 0; i < showNotes; i++) {
         appendedComponents.push(
           <Goal key={i} />
         )
      }
      return appendedComponents;
    }
    
  
    return (
      <div className="App">
        <SideNavigation onClickMethod={onClickMethod} />      
        <Goals currentNotes={getAppendedComponents()}/>
        <Quotes/>
        
        
      </div>
    );
  }
  
  export default HomePage;