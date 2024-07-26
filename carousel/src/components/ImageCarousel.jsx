import { useEffect, useRef, useState } from "react";
import "./ImageCarousel.css";
import data from "./data.json";

// console.log(data);
const DATA_LENGTH = data.length;

function ImageCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  // let interval;
  const ref = useRef(null);

//   console.log(ref);

  function handleClickNext() {
    setActiveIndex((prevIndex) => {
      if (prevIndex === DATA_LENGTH - 1) {
        return 0;
      }
      return prevIndex + 1;
    });

    // if(activeIndex === DATA_LENGTH - 1){
    //     setActiveIndex(0);
    //     return;
    // }
    // setActiveIndex (activeIndex + 1);
  }

  function handleClickPrev() {
    if (activeIndex === 0) {
      setActiveIndex(DATA_LENGTH - 1);
      return;
    }
    setActiveIndex(activeIndex - 1);
  }

  useEffect(() => {
    ref.current = setInterval(() => {
      handleClickNext();
    }, 3000);
    // console.log("interval in cb", ref.current);
    return () => clearInterval(ref.current);
  }, []);
  return (
    <div
      onMouseEnter={() => clearInterval(ref.current)}
      onMouseLeave={() => {
        ref.current = setInterval(() => {
          handleClickNext();
        }, 3000);
      }}
      className="container"
    >
      <div onClick={handleClickPrev} className="left-btn">
        {"<"}
      </div>
      <img src={data[activeIndex].download_url} alt="" />
      <div onClick={handleClickNext} className="right-btn">
        {">"}
      </div>
    </div>
  );
}

export default ImageCarousel;
