import React from "react";
import "./Button.css";

export default function Button(props) {
  const { variant = "primary", children, ...rest } = props;

  return (
    <div className="button">
      <button className={`button ${variant}`} {...rest}>
        {children}
      </button>
    </div>
  );
}
