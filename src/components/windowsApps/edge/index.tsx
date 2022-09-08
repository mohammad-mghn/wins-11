import { useRef } from "react";

import Tabs from "./tabs";
import Toolbar from "./toolbar";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/index";

import "../../../styles/applications/edge/edge.scss";

const Edge = () => {
  const edgeState = useSelector((state: RootState) => state.edge);

  const iframe = useRef<HTMLIFrameElement>(null);

  const tabs = edgeState.tabs;
  const activedTabIndex = edgeState.activedTabIndex;

  const refreshHandler = () => {
    if (iframe.current !== null) {
      iframe.current.src = JSON.parse(JSON.stringify(iframe.current.src));
    }
  };

  return (
    <div className="edge-contianer">
      <Tabs activedTabIndex={activedTabIndex} tabs={tabs} />

      <Toolbar
        activedTabIndex={activedTabIndex}
        tabs={tabs}
        staredWebs={edgeState.staredWebs}
        refreshHandler={refreshHandler}
      />

      <div className="iframe-container">
        <iframe
          title="edge-broswer"
          ref={iframe}
          frameBorder="0"
          className="edge-iframe"
          src={tabs[activedTabIndex].urls[tabs[activedTabIndex].currentURLIndex]}
        ></iframe>
      </div>
    </div>
  );
};

export default Edge;
