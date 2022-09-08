import arrowIcon from "../../../assists/icons/arrow.png";
import searchIcon from "../../../assists/icons/search.png";
import refreshIcon from "../../../assists/icons/refresh.png";
import fileIcon from "../../../assists/icons/folder-empty.png";
import arrowTriangleIcon from "../../../assists/icons/arrow-triangle.png";

import "../../../styles/applications/fileExplorer/navabar.scss";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store/index";
import { useState } from "react";
import { fileExplorerActions } from "../../../store/fileExplorer";
function Navbar() {
  const dispatch = useDispatch();

  const path = useSelector((state: RootState) => state.fileExplorer.path);

  const [root, setRoot] = useState(path);
  const [pathChangeActivated, setPathChangeActivated] = useState(false);

  const changePathHandler = (e: any) => {
    e.preventDefault();

    dispatch(fileExplorerActions.changePath(root));
  };

  const pathInputChangeHandler = (e: any) => {
    setRoot(e.target.value);
  };

  const pathChangeActivatedHandler = () => {
    setPathChangeActivated((prevValue) => !prevValue);
  };

  const rootItemHandler = (index: number) => {
    dispatch(
      fileExplorerActions.changePath(
        path
          .split("/")
          .slice(0, index + 1)
          .join("/")
      )
    );
  };

  return (
    <div className="file-explorer-container">
      <div className="navigators-container">
        <button>
          <img src={arrowIcon} alt="" className="icon" />
        </button>
        <button className="forward">
          <img src={arrowIcon} alt="" className="icon" />
        </button>
        <button className="down">
          <img src={arrowTriangleIcon} alt="" className="icon" />
        </button>
        <button className="up">
          <img src={arrowIcon} alt="" className="icon" />
        </button>
      </div>
      <div className="path-field">
        <img src={fileIcon} alt="" className="folder-icon" />
        <form onSubmit={changePathHandler}>
          {pathChangeActivated ? (
            <input type="text" value={root} onChange={pathInputChangeHandler} />
          ) : (
            // <div className="root-container" onClick={pathChangeActivatedHandler}>
            <div className="root-container">
              {path.split("/").map(
                (item, index) =>
                  item && (
                    <div
                      className="root-item"
                      key={index}
                      onClick={() => {
                        rootItemHandler(index);
                      }}
                    >
                      <img src={arrowTriangleIcon} alt="" className="icon" />
                      <p>{item}</p>
                    </div>
                  )
              )}
            </div>
          )}
        </form>
        <div className="buttons">
          <button className="down">
            <img src={arrowTriangleIcon} alt="" className="icon" />
          </button>
          <button>
            <img src={refreshIcon} alt="" className="icon" />
          </button>
        </div>
      </div>
      <div className="search-field">
        <img src={searchIcon} alt="" className="icon" />
        <input type="text" placeholder="Search This PC" />
      </div>
    </div>
  );
}

export default Navbar;
