import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/index";

import arrowIcon from "../../../assets/icons/arrow.png";
import rotateIcon from "../../../assets/icons/rotate.png";
import searchIcon from "../../../assets/icons/search.png";
import starIcon from "../../../assets/icons/star.png";
import addIcon from "../../../assets/icons/add.png";
import dotsMenu from "../../../assets/icons/dots-menu.png";
import addCard from "../../../assets/icons/add-card.png";

import "../../../styles/applications/edge/toolbar.scss";
import { edgeAppActions } from "../../../store/edge-slice";

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
  staredWebs: {
    logo: string;
    header: string;
    urls: string[];
    currentURLIndex: number;
    backward: boolean;
    forward: boolean;
  }[];
  refreshHandler: () => void;
}

function Toolbar(props: Props) {
  const { activedTabIndex, tabs, staredWebs, refreshHandler } = props;

  const dispatch = useDispatch();

  const profileImg = useSelector((state: RootState) => state.user.profile);

  const currentTab = tabs[activedTabIndex];

  const [url, seturl] = useState(currentTab.urls[currentTab.currentURLIndex]);

  useEffect(() => {
    seturl(currentTab.urls[currentTab.currentURLIndex]);
  }, [activedTabIndex, tabs, currentTab]);

  const urlHandler = (e: any) => {
    seturl(e.target.value);
  };

  const searchHandler = (e: any) => {
    e.preventDefault();

    dispatch(edgeAppActions.changeUrlHandler(url));
  };

  const forwandHandler = () => {
    dispatch(edgeAppActions.forwardHandler());
  };

  const backwardHandler = () => {
    dispatch(edgeAppActions.backwardHandler());
  };

  const refreshButtonHandler = () => {
    refreshHandler();
  };

  const selectAllURLHandler = (e: any) => {
    e.target.setSelectionRange(0, e.target.value.length);
  };

  const staredWebHandler = (url: string) => {
    dispatch(edgeAppActions.newBlankTabHandler(url));
  };
  function openWindow(url: string) {
    window.open(url, "_blank");
    window.focus();
  }
  return (
    <div className="toolbar-container">
      <div className="toolbar-upper-container">
        <button
          className={`navigation-button ${
            currentTab.backward ? "actived" : ""
          }`}
          onClick={backwardHandler}
        >
          <img src={arrowIcon} alt="" className="icon" />
        </button>
        <button
          className={`navigation-button ${currentTab.forward ? "actived" : ""}`}
          onClick={forwandHandler}
        >
          <img src={arrowIcon} alt="" className="icon" />
        </button>
        <button className="refresh-button" onClick={refreshButtonHandler}>
          <img src={rotateIcon} alt="" className="icon" />
        </button>
        <form
          onSubmit={searchHandler}
          onClick={selectAllURLHandler}
          className="edge-form"
        >
          <img src={searchIcon} alt="" className="edge-search-icon icon" />
          <input
            type="text"
            defaultValue={url}
            value={url}
            onChange={urlHandler}
          />
          <button>
            <img src={starIcon} alt="" className="icon" />
            <img src={addIcon} alt="" className="icon" />
          </button>
        </form>
        <button className="star-icon">
          <img src={starIcon} alt="" className="icon" />
        </button>
        <button className="star-icon">
          <img src={addCard} alt="" className="icon" />
        </button>
        <button className="sync-button">
          Not Syncing
          <img src={profileImg} alt="" />
        </button>
        <button className="menu-button">
          <img src={dotsMenu} alt="" className="icon" />
        </button>
      </div>
      <div className="stared-websites">
        {staredWebs.map((item, index) => (
          <button
            key={index}
            className="stared-web-container"
            onClick={() => {
              staredWebHandler(item.urls[currentTab.currentURLIndex]);
            }}
          >
            <img src={item.logo} alt="" />
            <h6>{item.header}</h6>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Toolbar;
