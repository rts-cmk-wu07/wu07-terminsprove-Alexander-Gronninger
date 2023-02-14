import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} key="Welcome" />
        <Route path="/home" element={<Home />} key="Home" />
      </Routes>
    </>
  );
};

export default App;
