import Main from "./main";
import Header from "./header";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

import { useSelector } from "react-redux";
import { RootState } from "../../../store/index";

import "../../../styles/applications/fileExplorer/fileExplorer.scss";

interface Props {
  recycleBin?: boolean | null | undefined;
}

function FileExplorer({ recycleBin }: Props) {
  const fileExplorerPath = useSelector((state: RootState) => state.fileExplorer);

  return (
    <div className="fe">
      <Header />

      <Navbar path={recycleBin ? fileExplorerPath.recycleBinPath : fileExplorerPath.path} />

      <div className="fe-container">
        {!recycleBin && <Sidebar />}

        <Main path={recycleBin ? fileExplorerPath.recycleBinPath : fileExplorerPath.path} />
      </div>
    </div>
  );
}
export default FileExplorer;
