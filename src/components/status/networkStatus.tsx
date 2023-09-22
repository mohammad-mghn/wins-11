import { useState } from "react";

import online from "../../assets/icons/wifi.png";
import offline from "../../assets/icons/disconnected-network.png";

const NetworkStatus = () => {
  const [isOnline, setIsOnline] = useState<boolean>(window.navigator.onLine);

  window.addEventListener("offline", (e) => {
    setIsOnline(false);
  });

  window.addEventListener("online", (e) => {
    setIsOnline(true);
  });

  return (
    <>
      {isOnline ? (
        <img src={online} alt="" className="icon" />
      ) : (
        <img src={offline} alt="" className="offline icon" />
      )}
    </>
  );
};

export default NetworkStatus;
