import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./calendar.css";

const CustomCalendar = ({
  selectedDate,
  handleChangeSelectedDate,
  currentMonth,
}) => {
  const [daysInMonth, setDaysInMonth] = useState([]);

  const firstDayOfMonth = currentMonth.startOf("month");
  const firstDayOfWeek = firstDayOfMonth.day();

  const disabledDates = ["2025-01-25", "2025-01-26"];

  useEffect(() => {
    const lastDayOfMonth = currentMonth.endOf("month");
    const daysArray = [];

    // Add empty divs before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      daysArray.push(null); // Represent empty cells with null
    }

    // Add the actual days of the month
    for (let day = 1; day <= lastDayOfMonth.date(); day++) {
      daysArray.push(dayjs(currentMonth).date(day));
    }

    setDaysInMonth(daysArray);
  }, [currentMonth]);

  const handleDateSelect = (date) => {
    handleChangeSelectedDate(date);
  };

  const isDisabled = (day) => {
    if (!day) return true;

    const today = dayjs().startOf("day");
    const formattedDate = day.format("YYYY-MM-DD");

    return day.isBefore(today, "day") || disabledDates.includes(formattedDate);
  };

  const renderCalendar = () => {
    const daysInWeek = 7;
    const weeks = [];
    let week = [];

    // Group days into weeks, adding empty divs to the start of each week if necessary
    daysInMonth.forEach((day, index) => {
      if (week.length === daysInWeek) {
        weeks.push(week);
        week = [];
      }

      week.push(day);
    });

    // If there's a remaining week that has less than 7 days, push it to the weeks
    if (week.length > 0) {
      weeks.push(week);
    }

    return (
      <div className="my-4">
        <div className="grid grid-cols-7 gap-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day, index) => (
              <div key={index} className="font-sans text-center text-gray-500 mb-1">
                {day}
              </div>
            )
          )}
        </div>
        <div className="">
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-cols-7 gap-1">
              {week.map((day, dayIndex) =>
                day ? (
                  <button
                    type="button"
                    key={dayIndex}
                    className={`day ${
                      day.isSame(selectedDate, "day") ? "rounded bg-green-600 text-white" : "border-gray-200 border rounded"
                    } ${isDisabled(day) && "bg-gray-100 text-gray-400"}`}
                    onClick={() => day && handleDateSelect(day)}
                    disabled={isDisabled(day)}
                  >
                    {day.format("D")}
                  </button>
                ) : (
                  <div key={dayIndex} className="empty-day" />
                )
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return renderCalendar();
};

export default CustomCalendar;
