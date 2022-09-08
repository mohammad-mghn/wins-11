import LanguageStatus from "../status/languageStatus";

import "../../styles/taskbar.scss";

const LanguageBar = () => {
  return (
    <div className="taskbar-language-bar">
      <LanguageStatus />
    </div>
  );
};

export default LanguageBar;
