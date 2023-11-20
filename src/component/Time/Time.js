import React, { useState } from "react";

const TimeInput = () => {
  const [fromTime, setFromTime] = useState("");
  const [toTime, setToTime] = useState("");

  const handleFromTimeChange = (e) => {
    setFromTime(e.target.value);
  };

  const handleToTimeChange = (e) => {
    setToTime(e.target.value);
  };

  return (
    <div>
      <label htmlFor="fromTime">From:</label>
      <input
        type="time"
        id="fromTime"
        name="fromTime"
        value={fromTime}
        onChange={handleFromTimeChange}
      />

      <label htmlFor="toTime">To:</label>
      <input
        type="time"
        id="toTime"
        name="toTime"
        value={toTime}
        onChange={handleToTimeChange}
      />
    </div>
  );
};

export default TimeInput;
