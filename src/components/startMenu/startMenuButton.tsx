import { RootState } from "../../store";
import { mainActions } from "../../store/main-slice";
import { useDispatch, useSelector } from "react-redux";

import StartMenuLogo from "../../assists/icons/start.png";

import "../../styles/startMenu.scss";

const StartMenu = () => {
  const StartMenuPopUp = useSelector((state: RootState) => state.main.IsStartMenuVisiable);

  const dispatch = useDispatch();

  const StartMenuHandler = () => {
    dispatch(mainActions.toggleStartMenu(!StartMenuPopUp));
  };

  return (
    <button className="start-menu-button" onClick={StartMenuHandler}>
      <img src={StartMenuLogo} alt="windows 11 logo" />
    </button>
  );
};

export default StartMenu;
