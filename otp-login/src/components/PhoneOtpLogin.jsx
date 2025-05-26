import { useState } from "react";
import OtpInput from "./OtpInput";

export default function PhoneOtpLogin() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handlePhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handlePhoneSubmit = (event) => {
    event.preventDefault();

    // phone validation
    const regex = /[^0-9]/g;
    if (phoneNumber.length < 10 || regex.test(phoneNumber)) {
      alert("Please enter a valid phone number");
      return;
    }

    // call BE API
    // show otp field
    setShowOtpInput(true);
  };

  const onOtpSubmit = (otp) => {
    console.log("Login successful", otp);
  };

  return (
    <>
      <div className="flex justify-center mt-8">
        {!showOtpInput ? (
          <form onSubmit={handlePhoneSubmit}>
            <input
              type="text"
              className="border border-sky-500 p-2 rounded-l-lg"
              value={phoneNumber}
              onChange={handlePhoneNumber}
              placeholder="Enter Phone Number"
            />
            <button
              className="border border-sky-500 p-2 rounded-r-lg"
              type="submit"
            >
              Submit
            </button>
          </form>
        ) : (
          <div>
            <p>Enter OTP sent to {phoneNumber}</p>
            <OtpInput length={4} onOtpSubmit={onOtpSubmit} />
          </div>
        )}
      </div>
    </>
  );
}
