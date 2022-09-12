import { useEffect, useState } from "react";

import { dateHandler } from "../../modules/date";

import triangle from "../../assists/icons/triangle.png";
import dropDownIcon from "../../assists/icons/arrow-triangle.png";

import "../../styles/rightPanel/rightPanel.scss";

function ClockDatePopup() {
  var date = new Date();

  const [startIndex, setStartIndex] = useState(0);
  const [collapsed, setCollapsed] = useState(false);
  const [currentMonthIndex, setCurrentMonthIndex] = useState<number>(date.getMonth());
  const [currentYearIndex, setCurrentYearIndex] = useState<number>(date.getFullYear());

  // make array of month's days so check if month is 30 days or 31
  const monthDays = Array.apply(0, new Array(currentMonthIndex < 6 ? 31 : 30));

  // make array for previous month
  const previousDays = Array.apply(0, new Array(startIndex));

  // make array for next month
  const nextDays = Array.apply(
    0,
    new Array(
      monthDays.length + previousDays.length <= 35
        ? 35 - monthDays.length - previousDays.length
        : monthDays.length + previousDays.length < 42
        ? 7 - (monthDays.length + previousDays.length - 35)
        : 0
    )
  );

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // check if previous month is 31 day or 30 but we need to add 1 to both because array starting at 0
  const PreviousMonthDayMount = currentMonthIndex - 1 < 6 ? (currentMonthIndex === 0 ? 31 : 32) : 31;

  console.log(previousDays, monthDays);
  useEffect(() => {
    dateHandler(false, "clock-and-date-box");
  }, []);

  useEffect(() => {
    // get month first weekday by this line to learn better read js date docs
    const firstDay = new Date(currentYearIndex, currentMonthIndex, 1);

    switch (firstDay.toString().slice(0, 3)) {
      case "Sun":
        setStartIndex(0);
        break;

      case "Mon":
        setStartIndex(1);
        break;

      case "Tue":
        setStartIndex(2);
        break;

      case "Wed":
        setStartIndex(3);
        break;

      case "Thu":
        setStartIndex(4);
        break;

      case "Fri":
        setStartIndex(5);
        break;

      case "Sat":
        setStartIndex(6);
        break;

      default:
        setStartIndex(0);
        break;
    }
  }, [startIndex, currentMonthIndex, currentYearIndex]);

  // Handlers

  const collapseHandler = () => {
    setCollapsed((prevValue) => !prevValue);
  };

  const increaseMonth = () => {
    // check if month's index is lower than 11 or not then if it's we're able to add to 1 to month index
    if (currentMonthIndex < 11) {
      setCurrentMonthIndex((prevValue) => prevValue + 1);
    } else {
      // else we add 1 to year index and reset month index
      setCurrentYearIndex((prevValue) => prevValue + 1);
      setCurrentMonthIndex(0);
    }
  };
  const decreaseMonth = () => {
    if (currentMonthIndex > 1) {
      setCurrentMonthIndex((prevValue) => prevValue - 1);
    } else {
      setCurrentYearIndex((prevValue) => prevValue - 1);
      setCurrentMonthIndex(11);
    }
  };

  return (
    <div className={`clock--date-container ${collapsed && "collapsed"}`}>
      <div className="header">
        <div id="clock-and-date-box" />
        <button className="header-open-up" onClick={collapseHandler}>
          <img src={dropDownIcon} alt="" className="icon" />
        </button>
      </div>
      <div className="navbar-container">
        <div>
          {months[currentMonthIndex]} {currentYearIndex}
        </div>
        <div className="arrows">
          <div onClick={increaseMonth}>
            <img src={triangle} alt="" className="icon" />
          </div>
          <div onClick={decreaseMonth}>
            <img src={triangle} alt="" className="icon" />
          </div>
        </div>
      </div>
      <div className="weekday-names-container">
        <div>Su</div>
        <div>Mo</div>
        <div>Tu</div>
        <div>We</div>
        <div>Th</div>
        <div>Fr</div>
        <div>Sa</div>
      </div>
      <div className="month-days-container">
        {previousDays.map((item, index) => {
          return (
            <div className="month-day disabled" onClick={decreaseMonth}>
              {PreviousMonthDayMount + index - startIndex}
            </div>
          );
        })}
        {monthDays.map((item, index) => {
          return (
            <div
              className={`month-day ${
                currentYearIndex === date.getFullYear() &&
                currentMonthIndex === date.getMonth() &&
                index + 1 === date.getDate()
                  ? "active"
                  : ""
              }`}
            >
              {/* we need to add 2 to each index becasse index stars from 0 */}
              {index + 1}
            </div>
          );
        })}
        {nextDays.map((item, index) => {
          return (
            <div className="month-day disabled" onClick={decreaseMonth}>
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ClockDatePopup;
