import React from "react";
import Input from "./Input";
import Button from "./Button";
import "./style/index.css";

function App() {
  return (
    <div className="App">
      <div className="input-container">
        <h2>Input</h2>
        <Input status="default" placeholder="Placeholder" />
        <Input status="success" placeholder="성공적으로 완료했습니다!" />
        <Input status="error" placeholder="에러가 발생했습니다!" />
        <Input status="warning" placeholder="주의사항을 전달합니다." />
      </div>
      <div className="button-container">
        <h2>Button</h2>
        <Button label="Default" status="default" styles="outline" />
        <Button label="Disabled" status="disabled" styles="outline" disabled />
        <Button label="Default" status="default" styles="solid" />
        <Button label="Disabled" status="disabled" styles="solid" disabled />
      </div>
    </div>
  );
}

export default App;
