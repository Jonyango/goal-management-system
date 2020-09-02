import React from "react";
import GoalInputForm from "../components/goal input form/GoalInputForm";
import "./Goals.css";

const GoalPage = () => {
  return (
    <div className="goal-page-container">
      <div className="goal-page-divs"></div>
      <div className="goal-page-divs"></div>
      <div className="goal-page-divs">
         <h3>Add your Goal!</h3>
        <GoalInputForm />
      </div>
      <button>Home</button>
    </div>
  );
};

export default GoalPage;
