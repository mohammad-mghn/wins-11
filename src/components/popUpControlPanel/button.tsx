import { useState } from "react";

function ButtonControlPanel({
  item,
}: {
  item: { activated: boolean; icon: string; name: string; onClick?: (() => void | undefined) | undefined };
}) {
  const [activated, setactivated] = useState(item.activated);
  return (
    <div className={activated ? "control-button activated" : "control-button"}>
      <button
        onClick={() => {
          setactivated((prevValue) => !prevValue);
          if (item.onClick) {
            item.onClick();
          }
        }}
      >
        <img src={item.icon} alt="" className="icon" />
      </button>
      <div>{item.name}</div>
    </div>
  );
}

export default ButtonControlPanel;
