import { useEffect, useState } from "react";

import { RootState } from "../../store";
import { mainActions } from "../../store/main-slice";
import { useSelector, useDispatch } from "react-redux";

import WiFi from "../../assists/icons/wifi.png";
import Bluetooth from "../../assists/icons/bluetooth.png";
import Airplane from "../../assists/icons/airplane.png";
import Saver from "../../assists/icons/power-saver.png";
import Moon from "../../assists/icons/moon.png";
import Accessibility from "../../assists/icons/accessibility.png";
import NightLight from "../../assists/icons/nightlight.png";
import Cast from "../../assists/icons/cast.png";
import Hotspot from "../../assists/icons/hotspot.png";
import Sun from "../../assists/icons/brightness.png";
import Settings from "../../assists/icons/settings-outline.png";
import Edit from "../../assists/icons/edit.png";

import "../../styles/PopUpControlPanel.scss";

import { BatteryStatus, VolumeStatus } from "../status";
import ButtonControlPanel from "./button";

function PopUpControlPanel() {
  const dispatch = useDispatch();

  const [nightLightOpacity, setNightLightOpacity] = useState<boolean>(false);

  const [brightness, setBrightness] = useState<number>(100);

  const volume = useSelector((state: RootState) => state.main.volume);

  const visiable = useSelector((state: RootState) => state.main.PopUpControlPanel);

  const [chargeLevel, setChargeLevel] = useState(0);

  let navigatorEdited: any = navigator;

  navigatorEdited.getBattery().then((battery: any) => {
    setChargeLevel(battery.level);
  });

  useEffect(() => {
    if (visiable) {
      // then we need timeout duo to creating fast event listener
      setTimeout(() => {
        // get power options pop up
        var ignoreClickOnMeElement = document.getElementById("startMenu")!;
        const closeHandler = (event: any) => {
          // check if click contains into power options or not
          var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);

          // if didn't contain pop up close the pop up
          if (!isClickInsideElement) {
            //  use main actions to close start menu
            dispatch(mainActions.toggleControlPanel(false));
            // remove event listener so it doens't run commands after closing
            document.removeEventListener("click", closeHandler);
          }
        };
        document.addEventListener("click", closeHandler);
      }, 100);
    }
  }, [visiable, dispatch]);

  const stopCloser = (e: any) => {
    e.stopPropagation();
  };

  const nightLightHandler = () => {
    setNightLightOpacity((prevValue) => !prevValue);

    var styleElem = document.head.appendChild(document.createElement("style"));

    styleElem.innerHTML = `body::after {opacity: ${nightLightOpacity ? 0 : 1};}`;
  };

  const brightnessHandler = (e: any) => {
    document.getElementById("main")!.style.filter = `brightness(${e.target.value}%)`;

    setBrightness(e.target.value);
  };

  const volumeHandler = (e: any) => {
    dispatch(mainActions.changeVolumeHandler(+e.target.value));
  };

  const buttons = [
    {
      name: "Wi-Fi",
      icon: WiFi,
      activated: true,
    },
    {
      name: "Bluetooth",
      icon: Bluetooth,
      activated: false,
    },
    {
      name: "Airplane mode",
      icon: Airplane,
      activated: false,
    },
    {
      name: "Battery saver",
      icon: Saver,
      activated: true,
    },
    {
      name: "Focus assit",
      icon: Moon,
      activated: false,
    },
    {
      name: "Accessibility",
      icon: Accessibility,
      activated: false,
    },
    {
      name: "Night Light",
      icon: NightLight,
      activated: false,
      onClick: nightLightHandler,
    },
    {
      name: "Cast",
      icon: Cast,
      activated: false,
    },
    {
      name: "Mobile Hotspot",
      icon: Hotspot,
      activated: false,
    },
  ];

  return (
    <div className={`pop-up-control-panel-container ${visiable ? "active" : "disabled"}`} onClick={stopCloser}>
      {buttons.map((item) => (
        <ButtonControlPanel item={item} />
      ))}

      <div className="range-inputs">
        <div className="range-input">
          <img src={Sun} alt="" className="icon" />
          <input
            type="range"
            onChange={brightnessHandler}
            min="0"
            max="100"
            defaultValue="100"
            style={{
              background: `linear-gradient(90deg, var(--personalizedColor) ${brightness}%, #747474 ${brightness}%)`,
            }}
          />
        </div>
        <div className="range-input">
          <VolumeStatus PREFIX="controlPanel-volume" />
          <input
            type="range"
            onChange={volumeHandler}
            min="0"
            max="100"
            defaultValue="75"
            style={{
              background: `linear-gradient(90deg, var(--personalizedColor) ${volume}%, #747474 ${volume}%)`,
            }}
          />
        </div>
      </div>

      <div className="footer">
        <div className="left">
          <div className="controlpanel-battery-status">
            <BatteryStatus PREFIX={"controlpanel"} />
          </div>

          <span className="battery-level">{chargeLevel * 100}%</span>
        </div>

        <div className="right">
          <img src={Edit} alt="" className="icon" />
          <img src={Settings} alt="" className="icon" />
        </div>
      </div>
    </div>
  );
}

export default PopUpControlPanel;
