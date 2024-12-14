import React, { useState, useRef } from "react";

const Throttling = () => {
  const [value, setValue] = useState("");
  const [throttledValue, setThrottledValue] = useState("");
  const timeoutRef = useRef(null);

  // const handleChange = (event) => {
  //   const newValue = event.target.value;
  //   setValue(newValue);
  //   console.log("useRef0: ", timeoutRef.current);

  //   if (!timeoutRef.current) {
  //     console.log("useRef1: ", timeoutRef.current)
  //     timeoutRef.current = setTimeout(() => {
  //       setThrottledValue(newValue);
  //       timeoutRef.current = null;
  //     }, 1000);

  //     console.log("useRef2: ", timeoutRef.current)
  //   }
  // };

  const onchangeValue = (event) => {
    const newVal = event.target.value;
    setValue(newVal);

    if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        setThrottledValue(newVal);
        timeoutRef.current = null;
      }, 1000)
    }
  }

  return (
    <div style={{ padding: "20px" }}>
      <h3>Throttling Example</h3>
      <input
        type="text"
        value={value}
        onChange={onchangeValue}
        placeholder="Type something..."
        style={{ padding: "8px", width: "300px" }}
      />
      <p>
        <strong>Current Value:</strong> {value}
      </p>
      <p>
        <strong>Throttled Value:</strong> {throttledValue}
      </p>
    </div>
  );
};

export default Throttling;
