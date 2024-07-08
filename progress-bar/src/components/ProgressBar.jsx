import { useEffect, useState } from "react";
import "./ProgressBar.css";
import { INTERVAL_INCREMENT, INTERVAL_SPEED_IN_MS, MAX_VALUE, MIN_VALUE } from "../constants";

function ProgressBar() {
  const [progress, setProgress] = useState(MIN_VALUE);

  useEffect(() => {
    const interval = setInterval(() => {
        console.log("SetInterval running");
      setProgress((prevBarValue) => {
        if (prevBarValue >= MAX_VALUE) {
          clearInterval(interval);
          return prevBarValue
        }
        return Math.min(prevBarValue + INTERVAL_INCREMENT, MAX_VALUE);
      });
    }, INTERVAL_SPEED_IN_MS);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="container">
        <div
          style={{ transform: `translateX(${progress - MAX_VALUE}%)` }}
          className="progress"
        ></div>
      </div>
    </>
  );
}

export default ProgressBar;
