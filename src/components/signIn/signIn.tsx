import React, { useEffect } from "react";

import { dateHandler } from "../../modules/date";
import { clockHandler } from "../../modules/clock";

import NetworkStatus from "../status/networkStatus";
import BatteryStatus from "../status/batteryStatus";

import { RootState } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { signInActions } from "../../store/signin-slice";

import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "react-spring";

import "../../styles/signIn.scss";
import PowerOptions from "../status/powerOptions";
import LanguageStatus from "../status/languageStatus";

const SignIn = () => {
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  const windowHeight = window.innerHeight;

  const lockScreenPos = useSpring({ y: 0 });

  const bindLockScreenPos = useDrag(({ offset, dragging }: any) => {
    if (dragging) {
      if (+offset[1] < 0) {
        lockScreenPos.y.start(+offset[1]);
      }
    } else {
      if (windowHeight / 2 < +offset[1] * -1) {
        lockScreenPos.y.start(-windowHeight);
      } else {
        lockScreenPos.y.start(0);
      }
    }
  });

  const SignInHandler = () => {
    dispatch(signInActions.SignIn());
  };

  useEffect(() => {
    clockHandler("signin-clock");

    // * the first arguement is becuase of set date string numberic or with letters
    dateHandler(false, "signin-date");

    const signInSpaceHandler = (e: any) => {
      if (e.code === "Space" && lockScreenPos.y.animation.to !== -windowHeight) {
        lockScreenPos.y.start(-windowHeight);
      }
    };

    window.addEventListener("keydown", signInSpaceHandler);
    return () => {
      window.removeEventListener("keydown", signInSpaceHandler);
    };
  }, []);

  return (
    <>
      <div className="signin-container">
        <animated.div
          {...bindLockScreenPos()}
          id="lockscreen"
          className="signin-lockscreen"
          style={{
            top: lockScreenPos.y.to([0, -windowHeight], ["0%", "-100%"]),
            touchAction: "none",
          }}
        >
          <div className="signin-time">
            <p className="signin-hour" id="signin-clock"></p>
            <p className="signin-date" id="signin-date"></p>
          </div>

          <div className="signin-status-container">
            <div className="signin-network-status">
              <NetworkStatus />
            </div>
            <div className="signin-battery-status">
              <BatteryStatus PREFIX={"signin"} />
            </div>
          </div>
        </animated.div>
        <animated.div
          className="signin-screen"
          style={{
            opacity: lockScreenPos.y.to([0, -windowHeight], [0, 1]),
            filter: lockScreenPos.y.to([0, -windowHeight], ["blur(25px)", "blur(0px)"]),
          }}
        >
          <div className="signin-screen-container">
            <div>
              <img src={user.profile} alt="" />
            </div>
            <h3>{user.username}</h3>
            <button onClick={SignInHandler}>Sign in</button>
          </div>
          <div className="signin-screen-panel-container">
            <PowerOptions Pos={"translate(-20%, -65%)"} />
            <div className="accessability-container">
              <div className="accessability icon" />
            </div>
            <div className="signin-screen-network-status">
              <NetworkStatus />
            </div>
            <div className="signin-screen-language-status">
              <LanguageStatus />
            </div>
          </div>
        </animated.div>
      </div>
    </>
  );
};

export default SignIn;
