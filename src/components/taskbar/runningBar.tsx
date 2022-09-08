import { FC } from "react";

import Arrow from "../../assists/icons/right-arrow.png";

import "../../styles/taskbar.scss";

const RunningBar: FC = () => {
  return (
    <div className="running-bar">
      <img src={Arrow} alt="" className="icon" />
    </div>
  );
};

export default RunningBar;
