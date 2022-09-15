import { useDispatch } from "react-redux";
import { mainActions } from "../../store/main-slice";

import { VolumeStatus, BatteryStatus, NetworkStatus } from "../status";

const Statusbar = () => {
  const dispatch = useDispatch();

  const showControlPanelHandler = () => {
    dispatch(mainActions.toggleControlPanel(undefined));
  };

  return (
    <div className="statusbar-container" onClick={showControlPanelHandler}>
      <div className="statusbar-screen-network-status">
        <NetworkStatus />
      </div>
      <div className="statusbar-volume-container">
        <VolumeStatus PREFIX={"statusbar"} />
      </div>
      <div className="statusbar-battery-status">
        <BatteryStatus PREFIX={"statusbar"} />
      </div>
    </div>
  );
};

export default Statusbar;
