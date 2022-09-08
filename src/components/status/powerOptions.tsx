import { useEffect, useState } from "react";

import Sleep from "../../assists/icons/moon.png";
import Restart from "../../assists/icons/refresh.png";
import Hibernate from "../../assists/icons/clock.png";
import ShutDown from "../../assists/icons/shut-down.png";

import { useDispatch } from "react-redux";
import { signInActions } from "../../store/signin-slice";

import "../../styles/powerOptions.scss";

const PowerOptions = ({ Pos }: { Pos: string }) => {
  const dispatch = useDispatch();

  const [options, setOptions] = useState(false);

  const OptionHandler = () => {
    setOptions((prevValue) => !prevValue);
  };

  const powerHandler = (mode: string) => {
    dispatch(
      signInActions.setPowerMode({
        turnedOff: true,
        powerMode: mode,
      })
    );
  };

  useEffect(() => {
    // check if power options are opened
    if (options) {
      // then we need timeout duo to creating fast event listener
      setTimeout(() => {
        // get power options pop up
        var ignoreClickOnMeElement = document.getElementById("powerOptions")!;

        const closeHandler = (event: any) => {
          // check if click contains into power options or not
          var isClickInsideElement = ignoreClickOnMeElement.contains(event.target);

          // if didn't contain pop up close the pop up else set true
          if (!isClickInsideElement) {
            setOptions(false);
            document.removeEventListener("click", closeHandler);
          } else {
            setOptions(true);
          }
        };
        document.addEventListener("click", closeHandler);
      }, 100);
    }
  }, [options]);

  return (
    <div className="main-power-option-container" onClick={OptionHandler}>
      <button className="power-option-button">
        <img src={ShutDown} alt="" className="icon" />
      </button>

      {options && (
        <button className="power-options-container" style={{ transform: Pos }} id="powerOptions">
          <div
            className="power-option-container"
            onClick={() => {
              powerHandler("Sleeping");
            }}
          >
            <img src={Sleep} alt="" className="icon" />
            <h6>Sleep</h6>
          </div>
          <div
            className="power-option-container"
            onClick={() => {
              powerHandler("Hibernate");
            }}
          >
            <img src={Hibernate} alt="" className="icon" />
            <h6>Hibernate</h6>
          </div>
          <div
            className="power-option-container"
            onClick={() => {
              powerHandler("Shutting down");
            }}
          >
            <img src={ShutDown} alt="" className="icon" />
            <h6>Shut down</h6>
          </div>
          <div
            className="power-option-container"
            onClick={() => {
              powerHandler("Restarting");
            }}
          >
            <img src={Restart} alt="" className="icon" />
            <h6>Restart</h6>
          </div>
        </button>
      )}
    </div>
  );
};

export default PowerOptions;
