import { useState, useEffect } from "react";

import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "react-spring";

import { appsActions } from "../../store/apps-slice";
import { useDispatch } from "react-redux/es/exports";

import "../../styles/appLayout.scss";
import AppHeader from "./appHeader";

const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

interface Props {
  app: {
    name: string;
    icon: string;
    removeHeader?: boolean;
  };
  children: JSX.Element;
  isActivated: boolean;
}

const Applayout = ({ app, children, isActivated }: Props) => {
  const disptach = useDispatch();

  // we need string for layout's style property, and 3rd index because
  //   when we run this component this has to be over the others
  const [zIndex, setZIndex] = useState("3");

  const [maximized, setMaximized] = useState(false);

  // for having unique Position information
  const [Pos, setPos] = useState({ x: 0, y: 0 });

  const appPos = useSpring({ x: Pos.x, y: Pos.y });

  const bindAppPos = useDrag(({ offset, dragging, lastOffset }: any) => {
    // when we drag header, we need to make it over other apps however we defined an onClick
    //    for app layout, but in case of dragging onClick event listener will apply after
    //    dragging the item, but if we just put dispatch it will run and run, so create if condition
    if (!isActivated) {
      disptach(appsActions.activeApp(app.name));
    }

    // the reason we check tha it's not maximized is if it's maximized we need to
    //    first minimize that with the next condition
    if (dragging && !maximized) {
      // each em is 16.5 px so => 16.6 * 3 for taskbar height and
      //    16.5 * 1.8 for windows header height = 79.2
      const windowHeaderAndTaskbarHeight = 79.2;

      if (+offset[1] < windowHeight - windowHeaderAndTaskbarHeight && +offset[1] > -30) {
        appPos.y.set(+offset[1]);

        setPos((prevValue) => ({ ...prevValue, y: +offset[1] }));
      }
      if (offset[0] < windowWidth) {
        appPos.x.set(+offset[0]);

        setPos((prevValue) => ({ ...prevValue, x: +offset[0] }));
      }
    }
    // offset[1 or 0] !== lastOffset[1 or 0] is for
    //    checking that user isn't just tapping layout
    if (maximized && dragging && +offset[1] !== +lastOffset[1] && +offset[0] !== +lastOffset[0]) {
      maximizeHandler();
    }
    if (dragging) {
      document.getElementById("appLayout")!.style.transition = "height 250ms, width 250ms";
    } else {
      document.getElementById("appLayout")!.style.transition = "height 250ms, width 250ms, left 300ms, top 300ms";
    }
  });

  //
  // Handlers :)
  //

  const closeHandler = () => {
    disptach(appsActions.closeApp(app.name));
  };

  const maximizeHandler = () => {
    if (maximized) {
      appPos.y.set(50);
      appPos.x.set(100);
      setMaximized(false);
      setPos({ x: 100, y: 50 });
    } else {
      appPos.y.set(0);
      appPos.x.set(0);
      setMaximized(true);
      setPos({ x: 0, y: 0 });
    }
  };

  const minimizeHandler = () => {
    disptach(appsActions.minimizeApp(app.name));
  };

  const activeApp = () => {
    disptach(appsActions.activeApp(app.name));
  };

  const doubleClickHandler = (event: any) => {
    if (event.detail === 2) {
      maximizeHandler();
    }
  };

  useEffect(() => {
    if (isActivated) {
      setZIndex("3");
    } else {
      setZIndex("1");
    }
  }, [isActivated]);

  return (
    <animated.div
      onClick={activeApp}
      className="app-layout"
      id="appLayout"
      style={{
        top: appPos.y,
        left: appPos.x,
        zIndex: zIndex,
        width: maximized ? "100%" : undefined,
        height: maximized ? "calc(100% - 3em)" : undefined,
      }}
    >
      <AppHeader
        app={app}
        bindAppPos={bindAppPos}
        closeHandler={closeHandler}
        minimizeHandler={minimizeHandler}
        maximizeHandler={maximizeHandler}
        doubleClickHandler={doubleClickHandler}
      />
      <div className="app-layout-content">{children}</div>
    </animated.div>
  );
};

export default Applayout;
