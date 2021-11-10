import React from "react";
import "./Display.css";

function Display(props) {
  const { num1, num2, operator, result } = props;
  let displayText = "";
  if (num1) {
    displayText = displayText + num1;
  }
  if (operator) {
    displayText = displayText + " " + operator;
  }
  if (operator && num2) {
    displayText = displayText + " " + num2;
  }
  return (
    <div className="display-container">
      <div className="content">
        <h2 className={`${result ? `text-sm` : ``}`}>{displayText}</h2>
        {result ? <h2>{result}</h2> : ""}
      </div>
    </div>
  );
}

export default Display;
