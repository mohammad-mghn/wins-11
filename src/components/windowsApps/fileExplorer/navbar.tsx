import { useState, useEffect, ReactElement, SetStateAction } from "react";

import { RootState } from "../../../store/index";
import { useSelector, useDispatch } from "react-redux";
import { fileExplorerActions } from "../../../store/fileExplorer";

import arrowIcon from "../../../assists/icons/arrow.png";
import searchIcon from "../../../assists/icons/search.png";
import refreshIcon from "../../../assists/icons/refresh.png";
import fileIcon from "../../../assists/icons/folder-empty.png";
import arrowTriangleIcon from "../../../assists/icons/arrow-triangle.png";

import "../../../styles/applications/fileExplorer/navabar.scss";

interface Props {
  path: string;
}

function Navbar({ path }: Props) {
  const dispatch = useDispatch();

  // stands for file explorer
  const FE = useSelector((state: RootState) => state.fileExplorer);

  // state for manual root changing
  const [root, setRoot] = useState(path);

  // state for path manual section ablity
  const [pathChangeActivated, setPathChangeActivated] = useState(false);

  useEffect(() => {
    setRoot(path);
  }, [path]);

  // Handlers

  const changePathHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    dispatch(fileExplorerActions.changePath(root));

    setPathChangeActivated(false);
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

  const pathInputChangeHandler = (e: { target: { value: SetStateAction<string> } }) => {
    setRoot(e.target.value);
  };

  const pathChangeActivatedHandler = () => {
    setPathChangeActivated(true);
  };

  const backwardhandler = () => {
    dispatch(fileExplorerActions.backward());
  };

  const forwardhandler = () => {
    dispatch(fileExplorerActions.forward());
  };

  const rootHandler = () => {
    dispatch(fileExplorerActions.rootHandler());
  };

  return (
    <div className="file-explorer-container">
      <div className="navigators-container">
        <button onClick={backwardhandler}>
          <img src={arrowIcon} alt="" className={FE.past.length !== 0 ? "active icon" : "icon"} />
        </button>
        <button className="forward" onClick={forwardhandler}>
          <img src={arrowIcon} alt="" className={FE.future.length !== 0 ? "active icon" : "icon"} />
        </button>
        <button className="down">
          <img src={arrowTriangleIcon} alt="" className="icon" />
        </button>
        <button className="up">
          <img src={arrowIcon} alt="" onClick={rootHandler} className={FE.past.length !== 0 ? "active icon" : "icon"} />
        </button>
      </div>
      <div className="path-field">
        <img src={fileIcon} alt="" className="folder-icon" />

        <form onSubmit={changePathHandler} onClick={pathChangeActivatedHandler}>
          {pathChangeActivated ? (
            <input type="text" defaultValue={path} onChange={pathInputChangeHandler} value={root} />
          ) : (
            <div
              className="root-container"
              onClick={(e: any) => {
                e.stopPropagation();
              }}
            >
              {path.split("/").map(
                (item: string, index: number) =>
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
