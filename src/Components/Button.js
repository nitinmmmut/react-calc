import React from "react";

const Button = ({ buttonType, n1, n2, answer, message, errorColor }) => {
  const isNumber = (value) => {
    return /^-?\d*(\.\d+)?$/.test(value);
  };

  function calculate(n1, n2, buttonType) {
    switch (buttonType) {
      case "+":
        answer(n1 + n2);
        break;
      case "-":
        answer(n1 - n2);
        break;
      case "*":
        answer(n1 * n2);
        break;
      case "/":
        answer(n1 / n2);
    }
  }

  function validate() {
    // check if n1 and n2 are integers
    if (n1 && n2) {
      if (isNumber(n1) && isNumber(n2)) {
        n1 = Number(n1);
        n2 = Number(n2);
        calculate(n1, n2, buttonType);
        message("success! your result is shown above");
        errorColor(true);
      } else {
        message(
          "ERROR -> Please enter an integer or decimal, text not allowed"
        );
        errorColor(false);
      }
    } else {
      message("ERROR -> field is empty, enter value");
      errorColor(false);
      answer("");
    }
  }

  return <button onClick={validate}>{buttonType}</button>;
};

export default Button;
