import Header from "./header";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

import "../../../styles/applications/fileExplorer/fileExplorer.scss";
import Main from "./main";

function FileExplorer() {
  return (
    <div className="fe">
      <Header />
      <Navbar />
      <div className="fe-container">
        <Sidebar />
        <Main/>
      </div>
    </div>
  );
}
export default FileExplorer;
