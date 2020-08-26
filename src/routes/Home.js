import React, { useState } from "react";
import SideNavigation from "../components/SideNavigation";
import Goals from "../components/Goals";
import Quotes from "../components/Quotes";
import Modal from "../components/Modal/Modal";
import GoalInputForm from "../components/goal input form/GoalInputForm";

const Goal = ({ backgroundColor, onClick }) => {
  return (
    <div
      id="single-goal"
      style={{
        backgroundColor: backgroundColor,
        borderRadius: "12px",
        height: "200px",
        width: "200px",
        marginBottom: "30px",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <p
        style={{
          textAlign: "center",
          margin: "80px 60px",
          fontWeight: "lighter",
        }}
      >
        click to add goal
      </p>
    </div>
  );
};
let colorArray = ["#c6d947", "#f3542a", "#f5972c", "#7049f0", "#0aa4f6"];

function HomePage() {
  // a variable that tracks the number of notes I am adding on the screen
  let appendedCount = 0;

  // a variable the tracks the background color of the note

  const [showNotes, setShowNotes] = useState(appendedCount);
  const [noteBackgroundColor, setNoteBackgroundColor] = useState("");

  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  // when my button is clicked, I update the number count of the componets added
  const onClickMethod = (event) => {
    const id = event.target.id;
    appendedCount = showNotes;
    appendedCount = appendedCount + 1;
    setShowNotes(appendedCount);

    let tempColor = noteBackgroundColor;
    tempColor = colorArray[id - 1];
    setNoteBackgroundColor(tempColor);
  };

  // I have a fucntion that loops to add the componets in a list
  const getAppendedComponents = () => {
    let appendedComponents = [];
    for (let i = 0; i < showNotes; i++) {
      appendedComponents.push(
        <Goal key={i} backgroundColor={noteBackgroundColor} onClick={openModal} />
      );
    }
    return appendedComponents;
  };

  return (
    <div className="App">
      <SideNavigation onClickMethod={onClickMethod} />
      <Goals currentNotes={getAppendedComponents()} />
      <Quotes />
      <Modal handleCloseAndSave={closeModal} 
      showModal={showModal} 
      children={<GoalInputForm />} />
    </div>
  );
}

export default HomePage;
