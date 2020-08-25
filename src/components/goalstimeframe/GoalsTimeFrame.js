import React,{useState} from "react";
import "./GoalsTimeFrame.css";
import { useStateValue } from "../../statemanagement/statemanagement";
import LocalStorage from "../../utils/localStorage";

function GoalsTimeFrame() {
  const [activeGoal, setActiveGoal] = useState("all");
  const [, dispatch] = useStateValue();

  /**
   * show a list of goals of a particular time frame and dispatch it into context
   */

  function showGoalsOf(GoalTimeCategory) {
    let Monthly = LocalStorage.getGoalsCategories("Monthly");
    let Today = LocalStorage.getGoalsCategories("Today");
    let Weekly = LocalStorage.getGoalsCategories("Weekly");
    let Goals = LocalStorage.getGoalsCategories("Goals");

    setActiveGoal(GoalTimeCategory);

    if (GoalTimeCategory === "all") {
      let All;
      Monthly = Monthly !== null ? JSON.parse(Monthly) : [];
      Today = Today !== null ? JSON.parse(Today) : [];
      Weekly = Weekly !== null ? JSON.parse(Weekly) : [];
      Goals = Goals !== null ? JSON.parse(Goals) : [];
      All = [...Monthly, ...Today, ...Weekly, ...Goals];

      if (All.length > 0) {
        dispatch({ type: "newGoal", goals: All });
      }
    } else {
      let Goals;
      if (GoalTimeCategory === "Monthly") {
        Goals = Monthly;
      }
      if (GoalTimeCategory === "Today") {
          Goals=Today;
      }
      if(GoalTimeCategory === "Weekly"){
          Goals=Weekly;
      }

      Goals = Goals !== null ? JSON.parse(Goals) : [];
      dispatch({type:"newGoal", goals:Goals})
    }
  }

  return(
      <div className="main-time-frame-div">
          <h5 className="container-title">
              Goals Time Frame
          </h5>
          <div className="goals-time-fram-list">
              <ul>
                  <li></li>
              </ul>

          </div>
          
      </div>
  )
}


export default GoalsTimeFrame;