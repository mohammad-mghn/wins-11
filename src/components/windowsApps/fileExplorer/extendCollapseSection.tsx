import { useState } from "react";

import { useDispatch } from "react-redux";
import { fileExplorerActions } from "../../../store/fileExplorer";

import folderIcon from "../../../assets/icons/folder-empty.png";
import ArrowIcon from "../../../assets/icons/arrow-triangle.png";

import "../../../styles/applications/fileExplorer/sidebarMenuSection.scss";

interface Props {
  menu: {
    header: string;
    icon: string | undefined;
    path: string;
    children: { header: string; path: string; icon: string | undefined }[];
  };
}

function SidebarMenuSection({ menu }: Props) {
  const dispatch = useDispatch();

  const [Extended, setExtended] = useState(
    menu.children.length === 0 ? false : true
  );

  const ExtendedHandler = () => {
    setExtended((prevValue) => !prevValue);
  };

  const changePathHandler = (path: string) => {
    dispatch(fileExplorerActions.changePath(path));
  };

  return (
    <div className="sidebar-menu-section">
      <div className="sidebar-menu-header">
        <img
          src={ArrowIcon}
          alt=""
          className={Extended ? "extended icon" : "icon"}
          onClick={ExtendedHandler}
        />
        <img
          src={menu.icon ? menu.icon : folderIcon}
          alt=""
          className="folder-icon"
          onClick={() => {
            changePathHandler(menu.path);
          }}
        />
        <p
          onClick={() => {
            changePathHandler(menu.path);
          }}
        >
          {menu.header}
        </p>
      </div>
      {Extended && (
        <div className="sidebar-menu-children">
          {menu.children.map((item, index) => (
            <div
              key={index}
              className="sidebar-menu-item"
              onClick={() => {
                changePathHandler(item.path);
              }}
            >
              <img src={item.icon ? item.icon : folderIcon} alt="" />
              <p>{item.header}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SidebarMenuSection;
