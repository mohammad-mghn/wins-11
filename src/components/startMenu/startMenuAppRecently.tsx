const StartMenuAppRecently = ({ name, icon }: { name: string; icon: string }) => {
  return (
    <div className="start-menu-app-recently">
      <img src={icon} alt="" />
      <div>
        <h6>{name}</h6>
        <p>Recently Addedd</p>
      </div>
    </div>
  );
};

export default StartMenuAppRecently;
