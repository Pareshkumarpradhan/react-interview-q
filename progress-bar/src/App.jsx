import { useState } from "react";
import "./App.css";
import ProgressBar from "./components/ProgressBar";

function App() {
  const[show, setShow] = useState(false);
  return (
    <>
     {show ? <ProgressBar /> : ""}
      <button onClick={() => setShow(!show)}>
        {show ? "Hide" : "Show"}
      </button>
    </>
  );
}

export default App;
