import React from 'react';

const GoalContainer = ({ backgroundColor, onClick }) => {
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

  export default GoalContainer;