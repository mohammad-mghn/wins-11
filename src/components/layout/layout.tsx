import { RootState } from "../../store";
import { useSelector } from "react-redux";

import { Main } from "../main/index";
import PowerMode from "../power/powerMode";
import SignIn from "../signIn/signIn";
import LayoutRouter from "./layoutRouter";

const Layout = () => {
  const isSignedIn = useSelector((state: RootState) => state.signIn.isSignedIn);

  const powerMode = useSelector((state: RootState) => state.signIn.powerMode.turnedOff);

  return (
    <>
      <LayoutRouter
        components={[<PowerMode />, <SignIn />, <Main />]}
        conditions={[powerMode, !isSignedIn, isSignedIn]}
        defaultComponent={<SignIn />}
      />
    </>
  );
};

export default Layout;
