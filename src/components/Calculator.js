import React, { useState } from "react";
import Button from "./Button";
import "./Calculator.css";
import Display from "./Display";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");

  const onNumberClick = (e) => {
    if (result.toString() && result.toString().length) {
      return;
    }
    if (!operator) {
      setNum1((prev) => prev + e.target.value);
    } else {
      setNum2((prev) => prev + e.target.value);
    }
  };

  const onOperatorClick = (e) => {
    if (result.toString() && result.toString().length) {
      setNum2("");
      setNum1(result.toString());
      setResult("");
      setOperator(e.target.value);
    }
    console.log("tes ", operator);
    if (!operator && num1.length) {
      setOperator(e.target.value);
    }
  };

  const onClearClick = () => {
    if (result.toString() && result.toString().length) {
      return;
    }
    if (num2 && num2.length) {
      setNum2((prev) => prev.slice(0, prev.length - 1));
    } else if (operator) {
      setOperator("");
    } else if (num1 && num1.length) {
      setNum1((prev) => prev.slice(0, prev.length - 1));
    }
  };

  const resetValues = () => {
    setNum1("");
    setNum2("");
    setOperator("");
    setResult("");
  };

  const getResult = () => {
    switch (operator) {
      case "+": {
        setResult(+num1 + +num2);
        break;
      }
      case "-": {
        setResult(+num1 - +num2);
        break;
      }
      case "*": {
        setResult(+num1 * +num2);
        break;
      }
      case "/": {
        setResult(+num1 / +num2);
        break;
      }
      case "%": {
        setResult(+num1 % +num2);
        break;
      }
      default: {
        break;
      }
    }
  };

  const buttonConfig = [
    { label: "AC", value: "AC", clickHandler: resetValues },
    { label: "DEL", value: "DEL", clickHandler: onClearClick },
    { label: "%", value: "%", clickHandler: onOperatorClick },
    { label: "/", value: "/", clickHandler: onOperatorClick },
    { label: "7", value: "7", clickHandler: onNumberClick },
    { label: "8", value: "8", clickHandler: onNumberClick },
    { label: "9", value: "9", clickHandler: onNumberClick },
    { label: "X", value: "*", clickHandler: onOperatorClick },
    { label: "4", value: "4", clickHandler: onNumberClick },
    { label: "5", value: "5", clickHandler: onNumberClick },
    { label: "6", value: "6", clickHandler: onNumberClick },
    { label: "-", value: "-", clickHandler: onOperatorClick },
    { label: "1", value: "1", clickHandler: onNumberClick },
    { label: "2", value: "2", clickHandler: onNumberClick },
    { label: "3", value: "3", clickHandler: onNumberClick },
    { label: "+", value: "+", clickHandler: onOperatorClick },
    { label: ".", value: ".", clickHandler: onNumberClick },
    { label: "0", value: "0", clickHandler: onNumberClick },
    { label: "=", value: "=", clickHandler: getResult, class: "equal-btn" },
  ];

  return (
    <div className="container">
      <div>
        <Display num1={num1} operator={operator} num2={num2} result={result} />
      </div>

      <div class="button-section">
        {buttonConfig.map((item) => {
          return <Button {...item} />;
        })}
      </div>
    </div>
  );
}

export default Calculator;
