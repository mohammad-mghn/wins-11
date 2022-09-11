import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";

import vscodeIcon from "../../assists/icons/vscode.png";

import "../../styles/rightPanel/rightPanel.scss";
import { mainActions } from "../../store/main-slice";

function Notifications() {
  const notifications = useSelector((state: RootState) => state.main.notifications);

  const dispatch = useDispatch();

  const clearAllHandler = () => {
    dispatch(mainActions.clearAllNotifications());
  };

  return (
    <div className="notifications-container">
      <div className="header">
        <div>Notifications</div>
        <button onClick={clearAllHandler}>Clear all</button>
      </div>
      <div className="main-container">
        {notifications.map((item) => (
          <div className="notification">
            <div className="title">
              <img src={vscodeIcon} alt="" />
              <p>{item.title}</p>
            </div>
            <div className="time">{item.time}</div>
            <div className="details">
              <img src={vscodeIcon} alt="" />
              <div>
                <p>{item.mainheader}</p>

                <p>{item.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Notifications;
