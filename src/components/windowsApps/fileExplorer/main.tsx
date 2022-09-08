import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/index";
import folderIcon from "../../../assists/icons/filled-folder.png";
import "../../../styles/applications/fileExplorer/main.scss";
import { fileExplorerActions } from "../../../store/fileExplorer";
function Main() {
  const dispatch = useDispatch();
  const fileExplorer = useSelector((state: RootState) => state.fileExplorer);

  const folders = fileExplorer.folders.filter((item) => {
    if (
      item.path.slice(0, fileExplorer.path.length) === fileExplorer.path &&
      item.path !== fileExplorer.path &&
      !item.path.slice(fileExplorer.path.length + 1, item.path.length).includes("/")
    ) {
      return item;
    }
  });

  const cdHandler = (path: string) => {
    dispatch(fileExplorerActions.changePath(path));
  };

  return (
    <div className="fe-main-container">
      {folders.map((item, index) => (
        <div
          className="main-container-item"
          key={index}
          onClick={() => {
            cdHandler(item.path);
          }}
        >
          <img src={folderIcon} alt="" />
          <p>{item.header}</p>
          {/* <p>jrodan-shopping-app</p> */}
        </div>
      ))}
    </div>
  );
}

export default Main;
