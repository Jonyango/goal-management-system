import React, { useState } from "react";
import SideNavigation from "../components/SideNavigation/SideNavigation";
import Goals from "../components/Goals/Goals";
import Quotes from "../components/Quotes/Quotes";
import Modal from "../components/Modal/Modal";
import GoalContainer from "../components/GoalContainer/GoalContainer";
import GoalInputForm from "../components/goal input form/GoalInputForm";



function HomePage() {
  //The array below contains background Color for each goal container.
  let colorArray = ["#c6d947", "#f3542a", "#f5972c", "#7049f0", "#0aa4f6"];
  

  const [goalContainerArray,updateGoalContainerArray]=useState([]);
  const [goalsRegistryData, updateGoalsRegistryData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  
// Get the id number of the button clicked and uses the id to access the color value in the array
  const onClickMethod = (event) => {
    const id = event.target.id;
    let tempColor = colorArray[id - 1];
    getAppendedComponents(tempColor);
    
  };
  


  const handleGoalAdd = (newGoal) => {
    let tempGoalRegistry = [...goalsRegistryData];
    tempGoalRegistry.unshift(newGoal);
    updateGoalsRegistryData(tempGoalRegistry);
    console.log(tempGoalRegistry);
  };

  //The function add goals to the goals array
  const getAppendedComponents = (tempColor) => {
    let tempGoalRegistryData=[...goalsRegistryData]
    let appendedComponents = [...goalContainerArray];
    console.log(tempGoalRegistryData)
      appendedComponents.unshift(
        <GoalContainer
        backgroundColor={tempColor} 
        onClick={openModal} 
        goals={tempGoalRegistryData}
        />
      );
    
    updateGoalContainerArray(appendedComponents);
  };

  return (
    <div className="App">
      <SideNavigation onClickMethod={onClickMethod} />
      <Goals currentNotes={goalContainerArray}/>
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
