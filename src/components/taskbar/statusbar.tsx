import { VolumeStatus, BatteryStatus, NetworkStatus } from "../status";

const Statusbar = () => {
  return (
    <div className="statusbar-container">
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
