import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Header from "./templates/Header";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} key="Welcome" />
        <Route path="/*" element={<Header />} key="Header">
          <Route path="home" element={<Home />} key="Home" />
        </Route>
      </Routes>
    </>
  );
};

export default App;
