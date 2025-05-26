/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";

export default function OtpInput({ length = 4, onOtpSubmit = () => {} }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));

  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // allow only one Input field to have numbers
    newOtp[index] = value.substring(value.length - 1);

    setOtp(newOtp);

    //submit triger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) {
      onOtpSubmit(combinedOtp);
    }

    // move to next input field
    if (value.length > 0) {
      const nextInput = inputRefs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    }

    // move to previous input field
    // if (value.length === 0 && index > 0) {
    //     const previousInput = inputRefs.current[index - 1];
    //     if (previousInput) {
    //       previousInput.focus();
    //     }
    //   }
    
  };

  const handleClick = (index) => {
        inputRefs.current[index].setSelectionRange(1, 1);

        //optional
        if(index >0 && !otp[index-1]){
            inputRefs.current[otp.indexOf("")].focus();
        }
  };

  const handleKeyDown = (e, index) => {
    // move to previous input field
    if (e.key === "Backspace" && !otp[index] && index > 0 && inputRefs.current[index - 1]) {
        inputRefs.current[index - 1].focus();
      }
  };

  return (
    <>
      <div>
        {otp.map((value, index) => {
          return (
            <input
              key={index}
              type="text"
              ref={(input) => (inputRefs.current[index] = input)}
              value={value}
              onChange={(e) => handleChange(e, index)}
              onClick={() => handleClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="border border-sky-500 p-2 rounded-md h-8 w-8 text-center mr-2 mt-4"
            />
          );
        })}
      </div>
    </>
  );
}
