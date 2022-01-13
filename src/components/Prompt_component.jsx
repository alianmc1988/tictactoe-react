import React from "react";

const Prompt_component = (props) => {
  return (
    <div className={"winninPrompt"} onClick={props.resetGame}>
      <span style={{ marginBottom: "1rem" }}>
        {props.whoWon} - Click to restart
      </span>
    </div>
  );
};

export default Prompt_component;
