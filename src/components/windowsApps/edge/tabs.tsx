import { useDispatch } from "react-redux";
import { appsActions } from "../../../store/apps-slice";
import { edgeAppActions } from "../../../store/edge-slice";

import plusIcon from "../../../assets/icons/plus.png";
import sideBarIcon from "../../../assets/icons/sidebar.png";
import newTabIcon from "../../../assets/icons/new-tab.png";

import "../../../styles/applications/edge/tabs.scss";

interface Props {
  activedTabIndex: number;
  tabs: {
    logo: string;
    header: string;
    urls: string[];
    currentURLIndex: number;
    backward: boolean;
    forward: boolean;
  }[];
}

const Header = (props: Props) => {
  const dispatch = useDispatch();

  const changeTabHandler = (index: number) => {
    dispatch(edgeAppActions.changeTabHandler(index));
  };

  const newTabHandler = () => {
    dispatch(edgeAppActions.newTabHandler());
  };

  const closeTabHandler = (e: any, index: number) => {
    // prevent to run tab click handler
    e.stopPropagation();

    dispatch(edgeAppActions.closeTab(index));

    // check if there's one tab remaining
    if (props.tabs.length === 1) {
      // then close broswer app like other broswer
      dispatch(appsActions.closeApp("Edge"));
      // add prepare new tab for next app opening
      dispatch(edgeAppActions.newTabHandler());
    }
  };

  return (
    <div className="tabs-container">
      <div className="sidebar-settings-icon icon">
        <img src={sideBarIcon} alt="" />
      </div>

      <div className="tabs-main-container">
        {props.tabs.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              changeTabHandler(index);
            }}
            className={`tab-container ${
              index === props.activedTabIndex ? "active" : ""
            }`}
          >
            <img
              src={item.logo ? item.logo : newTabIcon}
              alt=""
              className={!item.logo ? "icon" : ""}
            />
            <h3>{item.header}</h3>
            <button
              className="close-tab-button"
              onClick={(e) => {
                closeTabHandler(e, index);
              }}
            >
              <img src={plusIcon} alt="" className="icon" />
            </button>
          </div>
        ))}
      </div>

      <button className="new-tab-button" onClick={newTabHandler}>
        <img src={plusIcon} alt="" className="icon" />
      </button>
    </div>
  );
};

export default Header;
