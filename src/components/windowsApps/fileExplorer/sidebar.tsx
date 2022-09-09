import { useSelector } from "react-redux";
import { RootState } from "../../../store";

import "../../../styles/applications/fileExplorer/sidebarMenuSection.scss";
import SidebarMenuSection from "./extendCollapseSection";

function Sidebar() {
  const sidebarArray = useSelector((state: RootState) => state.fileExplorer.sidebar);

  return (
    <div className="fe-sidebar">
      {sidebarArray.map((item, index) => (
        <SidebarMenuSection menu={item} key={index} />
      ))}
    </div>
  );
}

export default Sidebar;
