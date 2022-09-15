import { useState } from "react";

import { RootState } from "../../store";
import { appsActions } from "../../store/apps-slice";
import { useDispatch, useSelector } from "react-redux";

import { fileExplorerActions } from "../../store/fileExplorer";

import "../../styles/desktop.scss";

function Desktop() {
  const [activatedApp, setactivatedApp] = useState<number | null>(null);

  const dispatch = useDispatch();

  const desktopApps = useSelector((state: RootState) => state.main.desktopApps);

  const openAppHandler = (appName: string) => {
    dispatch(appsActions.runApp(appName));
  };

  const appHandler = (e: any, item: { name: string; path?: string }, index: number) => {
    e.stopPropagation();
    switch (e.detail) {
      case 1:
        setactivatedApp(index);
        break;
      case 2:
        if (!item.path) {
          openAppHandler(item.name);
        } else {
          openAppHandler("Explorer");
          dispatch(fileExplorerActions.changePath(item.path));
        }
        setactivatedApp(null);
        break;
    }
  };

  return (
    <div
      className="desktop-container"
      onClick={() => {
        setactivatedApp(null);
      }}
    >
      {desktopApps.map((item, index) => (
        <div
          className={`app ${index === activatedApp ? "activate" : ""}`}
          onClick={(e) => {
            appHandler(e, item, index);
          }}
        >
          <img src={item.icon} alt="" />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default Desktop;
