import { Route, Routes } from "react-router-dom";
import ContextProvider from "./context/ContextProvider";
import ClassDetails from "./pages/ClassDetails";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import Header from "./templates/Header";

const App = () => {
  return (
    <>
      <ContextProvider>
        <Routes>
          <Route path="/" element={<Welcome />} key="Welcome" />
          <Route path="/*" element={<Header />} key="Header">
            <Route path="home" element={<Home />} key="Home" />
          </Route>
          <Route path="class/:id" element={<ClassDetails />} key="class" />
        </Routes>
      </ContextProvider>
    </>
  );
};

export default App;
