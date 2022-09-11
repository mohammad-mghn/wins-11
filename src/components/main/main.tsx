import { useEffect } from "react";

import { RootState } from "../../store";
import { useSelector } from "react-redux";

import Taskbar from "../taskbar/taskbar";
import StartMenu from "../startMenu/startMenu";
import Applayout from "../appLayout/applayout";
import { Applications } from "../../modules/applications";

import "../../styles/main.scss";
import RightPanel from "../rightPanel";

const Main = () => {
  const Running = useSelector((state: RootState) => state.apps);

  const tabCancellationHandler = (e: any) => {
    if (e.code === "Tab") {
      e.preventDefault();
    }
  };

  const runningApps = Running.running.map((item, index) => {
    const App = Applications.find((Item) => Item.name === item.name);

    return (
      App && (
        <Applayout app={App} isActivated={item.isActivated} key={index}>
          <App.Component />
        </Applayout>
      )
    );
  });

  useEffect(() => {
    window.addEventListener("keydown", tabCancellationHandler);
    return () => {
      window.removeEventListener("keydown", tabCancellationHandler);
    };
  }, []);

  return (
    <div className="main">
      <div className="mainrunningApp">{runningApps}</div>
      <RightPanel />
      <StartMenu />
      <Taskbar />
    </div>
  );
};

export default Main;
