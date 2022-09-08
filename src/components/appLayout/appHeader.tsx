import { animated } from "react-spring";

import Close from "../../assists/icons/close.png";
import Maximize from "../../assists/icons/maxmize.png";
import Minimize from "../../assists/icons/minimize.png";

import "../../styles/appLayout.scss";

interface Props {
  app: {
    name: string;
    icon: string;
    removeHeader?: boolean;
  };
  bindAppPos: any;
  closeHandler: () => void;
  maximizeHandler: () => void;
  minimizeHandler: () => void;
  doubleClickHandler: (event: any) => void;
}

const AppHeader = (props: Props) => {
  const { doubleClickHandler, minimizeHandler, maximizeHandler, closeHandler, app, bindAppPos } = props;
  return (
    <animated.div className="app-header-container" onClick={doubleClickHandler} {...bindAppPos()}>
      {!app.removeHeader && (
        <div className="app-header-info">
          <img src={app.icon} alt="" />
          <p>{app.name}</p>
        </div>
      )}
      <div className="app-header-control-panel">
        <div onClick={minimizeHandler}>
          <img src={Minimize} alt="" className="icon" />
        </div>
        <div onClick={maximizeHandler}>
          <img src={Maximize} alt="" className="icon" />
        </div>
        <div onClick={closeHandler}>
          <img src={Close} alt="" className="icon" />
        </div>
      </div>
    </animated.div>
  );
};

export default AppHeader;
