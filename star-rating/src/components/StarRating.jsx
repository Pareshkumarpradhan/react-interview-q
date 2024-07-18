import { useState } from "react";
import "./StarRating.css";

export default function StatReating({ starCount = 5 }) {
  const [rate, setRate] = useState();
  console.log(rate);
  const [hover, setHover] = useState(0);
  console.log(hover);
  
  return (
    <>
      <div className="container">
        {new Array(starCount).fill(0).map((value, index) => {
          return (
            <span
              key={index}
              className={hover == 0 && index < rate || index < hover ? "gold" : ""}
              onClick={() => setRate(index + 1)}
              onMouseEnter={() => setHover(index + 1)}
              onMouseLeave={() => setHover(0)}
            >
              &#9733;
            </span>
          );
        })}
      </div>
    </>
  );
}
