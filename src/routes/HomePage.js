import React, { useState } from "react";
import SideNavigation from "../components/SideNavigation/SideNavigation";
import Goals from "../components/Goals/Goals";
import Quotes from "../components/Quotes/Quotes";
import Modal from "../components/Modal/Modal";
import GoalContainer from "../components/GoalContainer/GoalContainer";
import GoalInputForm from "../components/goal input form/GoalInputForm";

let colorArray = ["#c6d947", "#f3542a", "#f5972c", "#7049f0", "#0aa4f6"];

function HomePage() {
  const [noteBackgroundColor, setNoteBackgroundColor] = useState("");
  const [goalContainerArray, updateGoalContainerArray] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const [goalsRegistryData, updateGoalsRegistryData] = useState([]);

  // when my button is clicked, I update the number count of the components added
  const onClickMethod = (event) => {
    const id = event.target.id;
    let tempColor = noteBackgroundColor;
    tempColor = colorArray[id - 1];
    setNoteBackgroundColor(tempColor);
    console.log(tempColor)
    getAppendedComponents();
  };
  


  const handleGoalAdd = (newGoal) => {
    let tempGoalRegistry = [...goalsRegistryData];
    tempGoalRegistry.push(newGoal);
    updateGoalsRegistryData(tempGoalRegistry);
  };

  // I have a function that loops to add the componets in a list
  const getAppendedComponents = () => {
    console.log("I am here");
    let appendedComponents = [...goalContainerArray];
    console.log(appendedComponents.length);

    appendedComponents.unshift(
      <GoalContainer backgroundColor={noteBackgroundColor} onClick={openModal} />
    );
    console.log()

    updateGoalContainerArray(appendedComponents);
    console.log(appendedComponents);
  };
  // getAppendedComponents();

  return (
    <div className="App">
      <SideNavigation onClickMethod={onClickMethod} />
      <Goals currentNotes={goalContainerArray} showNotes="" />
      <Quotes />
      <Modal
        handleCloseAndSave={closeModal}
        showModal={showModal}
        children={<GoalInputForm onGoalAdd={handleGoalAdd} />}
      />
    </div>
  );
}

export default HomePage;
