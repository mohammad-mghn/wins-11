const StartMenuApp = ({ icon, name }: { icon: string; name: string }) => {
  return (
    <div className="start-menu-app">
      <img src={icon} alt="" />
      <h6>{name}</h6>
    </div>
  );
};

export default StartMenuApp;
