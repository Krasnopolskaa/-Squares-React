import React, { useState } from "react";
import Button from "./components/Button";
import "./assets/css/style.css";

export default function App() {
  const [count, setCount] = useState(0);

  let incrementCount = () => {
    setCount(count + 1);
  };

  let decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="app">
      <div className="wrapper">
        <div class="count">
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>

      <div className="wrapper">
        <div class="count">
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>

      <div className="wrapper">
        <div class="count">
          <h1>{count}</h1>
        </div>
        <div class="buttons">
          <Button title={"-"} action={decrementCount} />
          <Button title={"+"} action={incrementCount} />
        </div>
      </div>
    </div>
  );
}
