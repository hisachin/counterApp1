import { useState } from "react";

import { Button } from "../button/button";

import "./counter.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementConter = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="contianer">
      <div className="flex">
        <div className="flex-item">
          <Button text="-" type="secondary" clickHandler={decrementConter} />
        </div>
        <div className="flex-item counter-text">{counter}</div>
        <div className="flex-item">
          <Button text="+" clickHandler={incrementCounter} />
        </div>
      </div>
    </div>
  );
}
