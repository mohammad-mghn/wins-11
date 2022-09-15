import { useState } from "react";

import batteryBack from "../../assists/icons/battery-empty.svg";
import batteryFilled from "../../assists/icons/battey-full.svg";
import batteryCharge from "../../assists/icons/battery-charging.svg";

const BatteryStatus = ({ PREFIX }: { PREFIX?: string }) => {
  const [isCharging, setIsCharging] = useState(false);

  // for battery percentage img's width with rem unit
  const [batteryChargeWidth, setBatteyChargeWidth] = useState(0.9);

  let navigatorEdited: any = navigator;

  navigatorEdited.getBattery().then((battery: any) => {
    setIsCharging(battery.charging);

    setBatteyChargeWidth(battery.level);

    battery.addEventListener("chargingchange", (item: any) => {
      setBatteyChargeWidth(item.currentTarget.charging * 0.9);
    });
  });
  return (
    <>
      <img src={batteryBack} className={PREFIX + "-battery-back  icon"} alt="" />
      <span className={PREFIX + "-battery-filled-container"} style={{ width: `${batteryChargeWidth}rem` }}>
        <img src={batteryFilled} className={PREFIX + "-battery-filled icon"} alt="" />
      </span>
      {isCharging && (
        <span className={PREFIX + "-charging-container"}>
          <img src={batteryCharge} alt="" className="icon" />
        </span>
      )}
    </>
  );
};

export default BatteryStatus;
