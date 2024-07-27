import React from "react";
import "./style/index.css";

const Button = ({ label, status, styles }) => {
  return (
    <button className={`button button-${styles} button-${status}`}>
      {label}
    </button>
  );
};

export default Button;
