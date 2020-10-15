import React from "react";
import "./Button.css";

export default function Button(props) {
  const { variant = "primary", children, ...rest } = props;

  function handleClick() {
    console.log("hello this is a click");
  }

  return (
    <div className="button">
      <button onClick={handleClick} className={`button ${variant}`} {...rest}>
        Click Me
      </button>
    </div>
  );
}
