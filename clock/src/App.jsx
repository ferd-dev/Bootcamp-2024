import "./index.css";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const [seconds, setSeconds] = useState(0);
  const myInput = useRef(null);
  const onFocusCounter = useRef(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    // focus();
    // console.log("render");
    // return () => clearInterval(intervalRef.current);
  }, []);

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log("render");
    }, 1000);
  };
  const stopTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };
  const resetTimer = () => {
    setSeconds(0);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const setMunute = (e) => {
    //setMinutes(e.target.value);
  }

  const focus = () => {
    myInput.current.focus();
  }

  const updateFocusCounter = () => {
    onFocusCounter.current += 1;
    console.log("Focus counter: ", onFocusCounter.current);
  }

  const add1 = () => {

  }

  return (
    <div className="container">
      <input
        onChange={setMunute}
        id="input"
        ref={myInput}
        onFocus={updateFocusCounter}
        type="number"
        placeholder="Enter minutes" />
      <button onClick={focus}>Focus Input</button>
      <button onClick={add1}>Set Timer</button>
      <h1>Timer</h1>
      <span>{Math.round(seconds / 60)}  mins </span>
      <span>{seconds % 60}  secs</span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
