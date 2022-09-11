import { useEffect } from "react";

import { clockHandler } from "../../modules/clock";
import { dateHandler } from "../../modules/date";

import { useSelector, useDispatch } from "react-redux";

import "../../styles/taskbar.scss";
import { mainActions } from "../../store/main-slice";

type RootState = {
  main: {
    notifications: {
      length: number;
    };
  };
};

const DateTime = () => {
  const dispatch = useDispatch();

  const notificationsLength = useSelector((state: RootState) => state.main.notifications.length);

  useEffect(() => {
    clockHandler("date--time-clock");
    dateHandler(true, "date--time-date");
  }, []);

  const showRightPanelHandler = () => {
    dispatch(mainActions.toggleRightPanel(undefined));
  };

  return (
    <div className="date--time-container" onClick={showRightPanelHandler}>
      <div className="date--time-data-container">
        <div id="date--time-clock" />
        <div id="date--time-date" />
      </div>
      {notificationsLength !== 0 && <div className="notification-count">{notificationsLength}</div>}
    </div>
  );
};

export default DateTime;
