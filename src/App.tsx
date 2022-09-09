import Layout from "./components/layout/layout";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};

export default App;
