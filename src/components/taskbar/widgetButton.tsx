import Widget from "../../assists/icons/widget.png";

import "../../styles/taskbar.scss";

const WidgetButton = () => {
  return (
    <div className="widget-button">
      <img src={Widget} alt="" />
    </div>
  );
};

export default WidgetButton;
