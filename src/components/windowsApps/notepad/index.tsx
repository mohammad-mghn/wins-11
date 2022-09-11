import "../../../styles/applications/notepad/notepad.scss";
import Header from "./header";

function Notepad() {
  return (
    <div className="notepad-container">
      <Header />
      <textarea className="textarea" />
    </div>
  );
}

export default Notepad;
