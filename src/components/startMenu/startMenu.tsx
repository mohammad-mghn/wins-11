import { useEffect } from "react";

import { RootState } from "../../store";
import { mainActions } from "../../store/main-slice";
import { useDispatch, useSelector } from "react-redux";

import { PowerOptions } from "../status";
import StartMenuApp from "./startMenuApp";
import StartMenuAppRecently from "./startMenuAppRecently";

import SearchIcon from "../../assets/icons/search.png";
import rightArrow from "../../assets/icons/right-arrow.png";

import "../../styles/startMenu.scss";

type appType = { name: string; icon: string };

const StartMenu = () => {
  const dispatch = useDispatch();

  const startMenuPopUp = useSelector(
    (state: RootState) => state.main.IsStartMenuVisiable
  );

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    if (startMenuPopUp) {
      // then we need timeout duo to creating fast event listener
      setTimeout(() => {
        // get power options pop up
        var ignoreClickOnMeElement = document.getElementById("startMenu")!;
        const closeHandler = (event: any) => {
          // check if click contains into power options or not
          var isClickInsideElement = ignoreClickOnMeElement.contains(
            event.target
          );

          // if didn't contain pop up close the pop up
          if (!isClickInsideElement) {
            //  use main actions to close start menu
            dispatch(mainActions.toggleStartMenu(false));
            // remove event listener so it doens't run commands after closing
            document.removeEventListener("click", closeHandler);
          }
        };
        document.addEventListener("click", closeHandler);
      }, 100);
    }
  }, [startMenuPopUp, dispatch]);

  const pinnedApps = useSelector(
    (state: RootState) => state.main.pinnedStartMenuApps
  );

  const recentlyApps = useSelector(
    (state: RootState) => state.main.recommendedAppsinStartMenu
  );

  return (
    <div
      className={`start-menu-popup ${startMenuPopUp ? "actived" : "closed"}`}
      id="startMenu"
    >
      <div className="start-menu-blured">
        <div className="start-menu-searchbar">
          <input
            type="text"
            className="start-menu-search-input"
            placeholder="Type here to search"
          />
          <img src={SearchIcon} alt="" className="icon" />
        </div>

        <div className="start-menu-sections">
          <h4>Pinned</h4>
          <div className="start-menu-redirect-container">
            <p>All Apps</p>
            <img src={rightArrow} alt="" className="icon" />
          </div>
          <div className="start-menu-apps">
            {pinnedApps.slice(0, 18).map((item: appType, index: number) => (
              <StartMenuApp icon={item.icon} name={item.name} key={index} />
            ))}
          </div>
        </div>

        <div className="start-menu-sections">
          <h4>Recommeneded</h4>
          <div className="start-menu-redirect-container">
            <p>More</p>
            <img src={rightArrow} alt="" className="icon" />
          </div>
          <div className="start-menu-apps-recently">
            {recentlyApps.slice(0, 6).map((item: appType, index: number) => (
              <StartMenuAppRecently
                name={item.name}
                icon={item.icon}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="start-menu-avatar--power-options">
        <div className="start-menu-avatar">
          <div>
            <img src={user.profile} alt="" />
          </div>
          <h3>{user.username}</h3>
        </div>

        <div className="start-menu-power-options-contianer">
          <PowerOptions Pos={"translate(-0%, -65%)"} />
        </div>
      </div>
    </div>
  );
};

export default StartMenu;
