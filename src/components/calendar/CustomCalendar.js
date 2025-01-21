import React from "react";
import { Calendar } from "antd";
import './calendar.css';

const onPanelChange = (value, mode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const disabledDate = (current) => {
  const disabledDates = ['2025-01-25', '2025-01-26']; 
  return disabledDates.includes(current.format('YYYY-MM-DD'));
};

const CustomCalendar = () => {
  return (
    <Calendar 
      fullscreen={false} 
      onPanelChange={onPanelChange} 
      disabledDate={disabledDate} 
    />
  );
};

export default CustomCalendar;
