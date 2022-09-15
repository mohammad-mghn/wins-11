import DateTime from "./date&time";
import Statusbar from "./statusbar";
import RunningBar from "./runningBar";
import TaskbarApp from "./taskbarApp";
import LanguageBar from "./languageBar";
import WidgetButton from "./widgetButton";
import StartMenuButton from "../startMenu/startMenuButton";
import { RootState } from "../../store";
import { appsActions } from "../../store/apps-slice";
import { useDispatch, useSelector } from "react-redux";

import "../../styles/taskbar.scss";

interface appsState {
  apps: {
    running: [
      {
        name: string;
        isActivated: boolean;
      }
    ];
    minimized: [
      {
        name: string;
        isActivated: boolean;
      }
    ];
  };
}

const Taskbar = () => {
  const dispatch = useDispatch();

  const runningApps = useSelector((state: RootState) => state.apps.running);
  const minimizedApps = useSelector((state: appsState) => state.apps.minimized);
  const pinnedApps = useSelector((state: RootState) => state.main.pinnedTaskbarApps);

  const runApp = (name: string) => {
    dispatch(appsActions.runApp(name));
  };

  const activeApp = (name: string) => {
    dispatch(appsActions.activeApp(name));
  };

  const runMinimizedApp = (name: string) => {
    dispatch(appsActions.runMinimizedApp(name));
  };

  const PinnedTaskbarApps = pinnedApps.map((item, index) => {
    // check that app is running, or minimized, so will check states
    const existingInRunningApps = runningApps.find((Item) => Item.name === item.name);
    const existingInMinimizeApps = minimizedApps.find((Item) => Item.name === item.name);

    return (
      <TaskbarApp
        key={index}
        icon={item.icon}
        running={existingInRunningApps && existingInRunningApps.isActivated}
        minimized={
          existingInMinimizeApps || (existingInRunningApps ? existingInRunningApps.isActivated === false : false)
        }
        onClick={() => {
          if (existingInMinimizeApps) {
            runMinimizedApp(item.name);
          } else {
            if (existingInRunningApps) {
              if (existingInRunningApps.isActivated) {
                runMinimizedApp(item.name);
              } else {
                activeApp(item.name);
              }
            } else {
              runApp(item.name);
            }
          }
        }}
      />
    );
  });

  return (
    <div className="taskbar">
      <WidgetButton />

      <div className="taskbar-apps">
        <StartMenuButton />
        {PinnedTaskbarApps}
      </div>

      <div className="taskbar-panel">
        <RunningBar />
        <LanguageBar />
        <Statusbar />
        <DateTime />
      </div>
    </div>
  );
};

export default Taskbar;
