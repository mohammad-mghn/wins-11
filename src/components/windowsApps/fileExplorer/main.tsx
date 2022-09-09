import { RootState } from "../../../store/index";
import { useDispatch, useSelector } from "react-redux";

import { fileExplorerActions } from "../../../store/fileExplorer";

import folderIcon from "../../../assists/icons/filled-folder.png";

import "../../../styles/applications/fileExplorer/main.scss";

interface Props {
  path: string;
}

function Main({ path }: Props) {
  const dispatch = useDispatch();

  const fileExplorer = useSelector((state: RootState) => state.fileExplorer);

  const folders = fileExplorer.folders.filter((item) => {
    if (
      item.path.slice(0, path.length) === path &&
      item.path !== path &&
      !item.path.slice(path.length + 1, item.path.length).includes("/")
    ) {
      return item;
    }
  });

  const cdHandler = (e: any, path: string) => {
    if (e.detail === 2) {
      dispatch(fileExplorerActions.changePath(path));
    }
  };

  return (
    <div className="fe-main-container">
      {folders.length > 0 ? (
        folders.map((item, index) => (
          <div
            className="main-container-item"
            key={index}
            onClick={(e) => {
              cdHandler(e, item.path);
            }}
          >
            <img src={item.icon ? item.icon : folderIcon} alt="" />
            <p>{item.header}</p>
          </div>
        ))
      ) : (
        <div className="main-container-empty-text">This folder is empty</div>
      )}
    </div>
  );
}

export default Main;
