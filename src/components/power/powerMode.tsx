import { useState, useEffect } from "react";

import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";

import Loading from "../../assets/gif/powerLoading.gif";
import { appsActions } from "../../store/apps-slice";
import { signInActions } from "../../store/signin-slice";

import "../../styles/power.scss";

const PowerMode = () => {
  const [shutdowned, setshutdowned] = useState(false);

  const dispatch = useDispatch();

  const powerMode = useSelector(
    (state: RootState) => state.signIn.powerMode.powerMode
  );

  const closeAllRunningApps = () => {
    // close all apps bacuase either windows shut down, or restarted
    dispatch(appsActions.closeAll());
  };

  const turnOn = () => {
    // chech that if it's not shut down option clicked bacause if we shut down it we
    //    want to turn it on with mouse oor keyboard activity
    if (powerMode !== "Shutting down") {
      // first make powerOption condition false
      dispatch(
        signInActions.setPowerMode({
          turnedOff: false,
          powerMode: undefined,
        })
      );
      // then sign out from windows
      dispatch(signInActions.SignOut());
    } else {
      closeAllRunningApps();
    }
  };

  useEffect(() => {
    // we used setTimeout bacause we thought that it's go to take 4s before turning off
    //    to become like real windows
    setTimeout(() => {
      setshutdowned(true);
      if (powerMode === "Restarting") {
        closeAllRunningApps();
        dispatch(
          signInActions.setPowerMode({
            turnedOff: false,
            powerMode: undefined,
          })
        );
        // then sign out from windows
        dispatch(signInActions.SignOut());
      }
    }, 4000);

    window.addEventListener("keydown", turnOn);
    return () => {
      window.removeEventListener("keydown", turnOn);
    };
  }, []);

  return (
    <div className="shutdown-container" onClick={turnOn}>
      {!shutdowned ? (
        <div className="shut-down-contents">
          <img src={Loading} alt="" />
          <p>{powerMode}</p>
        </div>
      ) : (
        powerMode !== "Shutting down" && (
          <div className="shut-down-contents">
            <p>
              Click any where, or key on keyboard
              <br /> to turn On
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default PowerMode;
