import { useSelector } from "react-redux";

import Audio0 from "../../assets/icons/audio0.png";
import Audio1 from "../../assets/icons/audio1.png";
import Audio2 from "../../assets/icons/audio2.png";
import Audio3 from "../../assets/icons/audio3.png";

type volumeType = {
  main: { volume: number };
};

const VolumeStatus = ({ PREFIX }: { PREFIX: string }) => {
  const volume = useSelector((state: volumeType) => state.main.volume);

  if (volume > 60) {
    return <img src={Audio3} alt="" className={PREFIX + " icon"} />;
  } else if (volume >= 30) {
    return <img src={Audio2} alt="" className={PREFIX + " icon"} />;
  } else if (volume < 30 && volume !== 0) {
    return <img src={Audio1} alt="" className={PREFIX + " icon"} />;
  } else {
    return <img src={Audio0} alt="" className={PREFIX + " icon"} />;
  }
};

export default VolumeStatus;
