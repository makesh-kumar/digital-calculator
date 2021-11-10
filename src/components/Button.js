import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <div className="button-container">
      <button
        className={`btn ${props.class}`}
        onClick={props.clickHandler}
        value={props.value}
      >
        {props.label}
      </button>
    </div>
  );
}

export default Button;
