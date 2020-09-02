import React from "react";

const GoalContainer = ({ backgroundColor, onClick, goals }) => {
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
      {goals.length === 0 ? (
        <p
          style={{
            textAlign: "center",
            margin: "80px 60px",
            fontWeight: "lighter",
          }}
        >
          click to add goal
        </p>
      ) : (
        goals.map((goal) => (
          <p
          key={goal.id}
            style={{
              textAlign: "center",
              margin: "80px 60px",
              fontWeight: "lighter",
            }}
          >
            {goal.title}
          </p>
        ))
      )}
    </div>
  );
};

export default GoalContainer;
