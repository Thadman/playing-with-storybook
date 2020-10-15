import React from "react";
import "./Button.css";

export default function Button(props) {
  const { variant = "primary", children, ...rest } = props;

  // const handleClick = () => console.log("hello this is a click");

  return (
    <div className="button">
      <button className={`button ${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
}
