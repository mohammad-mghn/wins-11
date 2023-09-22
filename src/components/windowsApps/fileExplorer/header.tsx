import newIcon from "../../../assets/icons/new.png";
import cutIcon from "../../../assets/icons/cut.png";
import copyIcon from "../../../assets/icons/copy.png";
import pasteIcon from "../../../assets/icons/paste.png";
import deleteIcon from "../../../assets/icons/bin.png";
import renameIcon from "../../../assets/icons/rename.png";
import sortIcon from "../../../assets/icons/sort.png";
import viewIcon from "../../../assets/icons/view.png";
import arrowTriangle from "../../../assets/icons/arrow-triangle.png";
import threeDots from "../../../assets/icons/dots-menu.png";

import "../../../styles/applications/fileExplorer/header.scss";

function Header() {
  return (
    <div className="feh-container">
      <div className="feh-new-container">
        <img src={newIcon} alt="" />
        <p>New</p>
        <img src={arrowTriangle} alt="" className="icon" />
      </div>
      <div className="horizantal-line" />
      <div className="feh-edit-toolbar-container">
        <button>
          <img src={cutIcon} alt="" />
        </button>
        <button>
          <img src={copyIcon} alt="" />
        </button>
        <button>
          <img src={pasteIcon} alt="" />
        </button>
        <button>
          <img src={renameIcon} alt="" />
        </button>
        <button>
          <img src={deleteIcon} alt="" className="icon" />
        </button>
      </div>
      <div className="horizantal-line" />
      <div className="feh-view-toolbar-container">
        <button>
          <img src={sortIcon} alt="" />
          <p>Sort</p>
          <img src={arrowTriangle} alt="" className="icon" />
        </button>
        <button>
          <img src={viewIcon} alt="" />
          <p>View</p>
          <img src={arrowTriangle} alt="" className="icon" />
        </button>
      </div>
      <div className="horizantal-line" />
      <button className="feh-more-options">
        <img src={threeDots} alt="" className="icon" />
      </button>
    </div>
  );
}
export default Header;
