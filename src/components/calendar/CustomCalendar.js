import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import "./calendar.css";

const CustomCalendar = ({
  selectedDate,
  handleChangeSelectedDate,
  currentMonth,
  calendarList,
}) => {
  const [daysInMonth, setDaysInMonth] = useState([]);

  const data = currentMonth?.data;

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
    const formattedDate = date.format("YYYY-MM-DD");
    const selectedData = calendarList.data.dates[formattedDate]
    
    handleChangeSelectedDate(date, selectedData);
  };

  const isDisabled = (day) => {
    if (!day) return true;

    const today = dayjs().startOf("day");
    const formattedDate = day.format("YYYY-MM-DD");

    // Check if the date is in the past or in the disabledDates array
    if (day.isBefore(today, "day") || disabledDates.includes(formattedDate)) {
      return true;
    }

    // Check if the date has an empty array in the calendar data
    return (
      !calendarList.data.dates[formattedDate] ||
      calendarList.data.dates[formattedDate].length === 0
    );
  };

  const renderCalendar = () => {
    const daysInWeek = 7;
    const weeks = [];
    let week = [];

    daysInMonth.forEach((day, index) => {
      if (week.length === daysInWeek) {
        weeks.push(week);
        week = [];
      }

      week.push(day);
    });

    if (week.length > 0) {
      weeks.push(week);
    }

    return calendarList.message === "Success" ? (
      <div className="my-4 pb-4">
        <div className="grid grid-cols-7 gap-1">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
            (day, index) => (
              <div
                key={index}
                className="font-sans text-center text-gray-500 mb-1"
              >
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
                      day.isSame(selectedDate, "day")
                        ? "rounded bg-green-600 text-white"
                        : "border-gray-200 border rounded"
                    } ${isDisabled(day) && "bg-gray-100 text-gray-400 !cursor-not-allowed"}`}
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
    ) : (
      <div className="h-full flex justify-center items-center">
        <p className="section-title !text-gray-400">No Valid Data Found</p>
      </div>
    );
  };

  return renderCalendar();
};

export default CustomCalendar;
