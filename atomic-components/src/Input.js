import React, { useState } from "react";
import "./style/index.css";

const Input = ({ status, placeholder }) => {
  const [value, setValue] = useState("");

  const getStatusClass = () => {
    switch (status) {
      case "default":
        return "input-default";
      case "success":
        return "input-success";
      case "error":
        return "input-error";
      case "warning":
        return "input-warning";
      default:
        return "";
    }
  };

  return (
    <input
      type="text"
      className={`input ${getStatusClass()}`}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
