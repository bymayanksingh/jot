import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar({ onDateRangeSelect, startDate, endDate }) {
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    onDateRangeSelect(start, end);
  };

  return (
    <div className="calendar-container">
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        inline
        monthsShown={2}
        minDate={new Date(2024, 0, 1)} // January 1, 2024
        maxDate={new Date(2024, 11, 31)} // December 31, 2024
        calendarClassName="custom-calendar"
      />
    </div>
  );
}