import React, { useState } from "react";
import "./style/index.css";

export function Input({ status, placeholder, size }) {
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
      case "search":
        return "input-search";
      default:
        return "";
    }
  };

  return (
    <input
      type="text"
      className={`input ${getStatusClass()} input-${size}`}
      value={value}
      placeholder={placeholder}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Input;

export function InputLabel({ type, placeholder, labelClass }) {
  return (
    <label className={`label label-${labelClass}`}>
      <input
        type={type}
        className={`input input-${labelClass}`}
        placeholder={placeholder}
      />
    </label>
  );
}
