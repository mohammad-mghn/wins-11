const LanguageStatus = () => {
  const language: string = window.navigator.language;

  const systemLang = language[0] + language[1];
  return <>{systemLang === "en" ? "ENG" : systemLang.toUpperCase()}</>;
};

export default LanguageStatus;
