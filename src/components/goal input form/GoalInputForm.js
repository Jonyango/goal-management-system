import React, { useState } from "react";
import "./GoalInputForm.css";

const GoalInputForm = ({onGoalAdd}) => {

  const [goalTitle, updateGoalTitle] = useState("");
  const [goalCategory, updateGoalCategory] = useState("");
  const [goalTimeFrame, updateGoalTimeFrame] = useState("");
  const [goalDescription, updateGoalDescription] = useState("");

  //The function to add goals to an array.
 const handleGoalsAdd=()=>{
  //
    let newGoal={
      title:goalTitle,
      category:goalCategory,
      timeFrame:goalTimeFrame,
      description:goalDescription,
      id:Date.now()
    }
    onGoalAdd(newGoal);
    updateGoalTitle("");
    updateGoalDescription("");
    updateGoalCategory('');
    updateGoalTimeFrame('');
   


  }
  return (
    <div className="goal-input-form">
      <form id="goal-input-form" onSubmit={(e)=>e.preventDefault()}>
        <label>
          Title<br></br>
          <input
            type="text"
            value={goalTitle}
            onChange={(e) => updateGoalTitle(e.target.value)}
            className="goal-input"
          />
        </label>
        <label>
          Category<br></br>
          <select
            className="goal-input"
            id="category"
            value={goalCategory}
            onChange={(e) => updateGoalCategory(e.target.value)}
            onBlur={(e) => updateGoalCategory(e.target.value)}
          >
            <option> </option>
            <option>Career</option>
            <option>Personal development</option>
            <option>Health and Fitness</option>
          </select>
        </label>
        <label>
          Goal Time Frame<br></br>
          <select
            className="goal-input"
            id="time-frame"
            value={goalTimeFrame}
            onChange={(e) => updateGoalTimeFrame(e.target.value)}
            onBlur={(e) => updateGoalTimeFrame(e.target.value)}
          >
            <option> </option>
            <option>Today</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </label>
        <label>
          Goal Details<br></br>
          <textarea
            className="goal-input"
            value={goalDescription}
            onChange={(event) => updateGoalDescription(event.target.value)}
          />
        </label>
        <button id="add-goal-btn" onClick={handleGoalsAdd}>ADD GOAL</button>
      </form>
    </div>
  );
};

export default GoalInputForm;
