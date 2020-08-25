import React, { useState } from "react";
import SideNavigation from "../components/SideNavigation";
import Goals from "../components/Goals";
import Quotes from "../components/Quotes";
// import './App.css';

const Goal = ({ backgroundColor }) => {
  return (
    <div>
      <h1 style={{ color: backgroundColor }}>I am here</h1>
    </div>
  );
};
let colorArray = ["#c6d947", "#f3542a", "#f5972c", "#7049f0", "#0aa4f6"];

function HomePage() {
  // a variable that tracks the number of notes I am adding on the screen
  let appendedCount = 0;

  // a variable the tracks the background color of the note

  const [searchInput, setSearchInput] = useState();
  const [showNotes, setShowNotes] = useState(appendedCount);
  const [noteBackgroundColor, setNoteBackgroundColor] = useState("");

  // when my button is clicked, I update the number count of the componets added
  const onClickMethod = (event) => {
    const id = event.target.id;
    appendedCount = showNotes;
    appendedCount = appendedCount + 1;
    setShowNotes(appendedCount);
    
    let tempColor = noteBackgroundColor;
    tempColor = colorArray[id-1];
    setNoteBackgroundColor(tempColor);

   
  };

  // I have a fucntion that loops to add the componets in a list
  const getAppendedComponents = () => {
    let appendedComponents = [];
    for (let i = 0; i < showNotes; i++) {
      appendedComponents.push(<Goal key={i} backgroundColor={noteBackgroundColor} />);
    }
    return appendedComponents;
  };

  return (
    <div className="App">
      <SideNavigation onClickMethod={onClickMethod} />
      <Goals currentNotes={getAppendedComponents()} />
      <Quotes  />
    </div>
  );
}

export default HomePage;
