import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const Calendar = ({ onDateRangeSelect, startDate, endDate }) => {
  const handleDateChange = (dates) => {
    const [start, end] = dates;
    onDateRangeSelect(start, end);
  };

  return (
    <div className="calendar-container">
      <DatePicker
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={handleDateChange}
        inline
        monthsShown={2}
      />
    </div>
  );
};

export default Calendar;