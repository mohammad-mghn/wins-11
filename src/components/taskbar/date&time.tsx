import  { useEffect } from "react";

import { clockHandler } from "../../modules/clock";
import { dateHandler } from "../../modules/date";

import { useSelector } from "react-redux";

import "../../styles/taskbar.scss";

type RootState = {
  main: {
    notifications: {
      length: number;
    };
  };
}

const DateTime = () => {
  const notificationsLength = useSelector((state: RootState) => state.main.notifications.length);

  useEffect(() => {
    clockHandler("date--time-clock");
    dateHandler(true, "date--time-date");
  }, []);

  return (
    <div className="date--time-container">
      <div className="date--time-data-container">
        <div id="date--time-clock" />
        <div id="date--time-date" />
      </div>
      {notificationsLength !== 0 && <div className="notification-count">{notificationsLength}</div>}
    </div>
  );
};

export default DateTime;
