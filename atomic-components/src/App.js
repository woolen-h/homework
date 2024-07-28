import React from "react";
import { Input, InputLabel } from "./Input.js";
import ButtonGroup from "./ButtonGroup.js";
import "./style/index.css";

function App() {
  return (
    <div className="App">
      <ButtonGroup />
      <h1>Input</h1>
      <div className="container">
        <div className="section">
          <h2>Size</h2>
          <div className="group">
            <Input
              status="default"
              size="small"
              placeholder="Placeholder"
              label="Label"
              labelClass="important"
            />
            <Input
              status="default"
              size="large"
              placeholder="Placeholder"
              label="Label"
              labelClass="important"
            />
          </div>
        </div>
        <div className="section">
          <h2>State</h2>
          <div className="group">
            <Input
              status="success"
              placeholder="성공적으로 완료했습니다!"
              label="Label"
            />
            <Input
              status="error"
              placeholder="에러가 발생했습니다!"
              label="Label"
            />
            <Input
              status="warning"
              placeholder="주의사항을 전달합니다."
              label="Label"
            />
          </div>
        </div>
        <div className="section">
          <h2>Search</h2>
          <div className="group">
            <InputLabel
              type="search"
              placeholder="검색어를 입력하세요."
              label="Label"
              labelClass="search"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
