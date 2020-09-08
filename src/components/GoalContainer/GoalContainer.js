import React from "react";

const GoalContainer = ({ backgroundColor, onClick}) => {
  return (
    <div
      style={{
        backgroundColor: backgroundColor ===''?'tomato':backgroundColor,
        borderRadius: "12px",
        height: "200px",
        width: "200px",
        marginBottom: "30px",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <span>click to add goal</span>
      {/* {goals.length === 0 ? (
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
      )} */}
    </div>
  );
};

export default GoalContainer;
