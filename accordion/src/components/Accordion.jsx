import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Accordion({ qna }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="border border-sky-500 my-2 py-2 px-1 relative">
        <h3 className="font-semibold">
          {qna.question}{" "}
          <span
            onClick={() => setShow(!show)}
            className="absolute right-4 cursor-pointer"
          >
            {show ? "-" : "+"}
          </span>
        </h3>
        {show ? <p>{qna.answer}</p> : ""}
      </div>
    </>
  );
}
