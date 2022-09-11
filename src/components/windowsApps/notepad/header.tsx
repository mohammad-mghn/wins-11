import SettingsIcon from "../../../assists/icons/settings-outline.png";

function Header() {
  return (
    <div className="notepad-header">
      <div className="notepad-header-container">
        <button>File</button>
        <button>Edit</button>
        <button>View</button>
      </div>
      <img src={SettingsIcon} alt="" className="settings-icon icon" />
    </div>
  );
}

export default Header;
