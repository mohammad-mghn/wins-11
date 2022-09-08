import "../../styles/taskbar.scss";

interface Props {
  icon: string;
  onClick: () => void;
  minimized: boolean | object;
  running: boolean | undefined;
}

const TaskbarApp = ({ icon, onClick, minimized, running }: Props) => {
  const style: object = {
    backgroundColor: minimized ? "#797a7a" : running && "var(--personalizedColor)",
    width: running && "30%",
  };

  return (
    <div className={"taskbar-container"}>
      <img src={icon} alt="" className="taskbar-app" onClick={onClick} />
      <span style={style}></span>
    </div>
  );
};

export default TaskbarApp;
