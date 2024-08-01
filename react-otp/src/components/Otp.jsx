/* eslint-disable react/prop-types */
import { useState } from "react";

export default function Otp({ otpLength = 6 }) {
  const [otpFields, setOtpFields] = useState(new Array(otpLength).fill(""));

  function handleKeyDown(e, index) {
    const key = e.key;
    if (key >= '0' && key <= '9') {
      const newOtpFields = [...otpFields];
      newOtpFields[index] = key;
      setOtpFields(newOtpFields);

      // Move focus to the next input field if available
      if (index < otpLength - 1) {
        document.getElementById(`otp-field-${index + 1}`).focus();
      }
    } else if (key === 'Backspace') {
      const newOtpFields = [...otpFields];
      newOtpFields[index] = "";
      setOtpFields(newOtpFields);

      // Move focus to the previous input field if available
      if (index > 0) {
        document.getElementById(`otp-field-${index - 1}`).focus();
      }
    }
  }

  return (
    <div >
      {otpFields.map((value, index) => (
        <input
          key={index}
          id={`otp-field-${index}`}
          type="text"
          value={value}
        
          maxLength="1"
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
}
