import { useEffect } from "react";

import { RootState } from "../../store";
import { mainActions } from "../../store/main-slice";
import { useSelector, useDispatch } from "react-redux";

import Notifications from "./notifications";
import ClockDatePopup from "./clock-date-popup";

import "../../styles/rightPanel/rightPanel.scss";

function RightPanel() {
  const dispatch = useDispatch();

  const visiable = useSelector((state: RootState) => state.main.rightPanel);

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
            dispatch(mainActions.toggleRightPanel(false));
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

  return (
    <div className={`right-panel-container ${visiable ? "active" : "disabled"}`} onClick={stopCloser}>
      <Notifications />
      <ClockDatePopup />
    </div>
  );
}

export default RightPanel;
