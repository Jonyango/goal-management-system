import React from "react";

const GoalContainer = ({ backgroundColor, onClick, goals }) => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: backgroundColor,
        borderRadius: "12px",
        height: "200px",
        width: "200px",
        marginBottom: "30px",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      {/* <span
          style={{
            textAlign:'center',
            margin: "80px 60px",
            fontWeight: "lighter",
          }}
        >
          click to add goal
        </span> */}
      {goals.length === 0 ? (
        <p
          onClick={onClick}
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
