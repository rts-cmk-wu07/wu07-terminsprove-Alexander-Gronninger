import { Route, Routes } from "react-router-dom";
import RatingModal from "./components/RatingModal";
import ContextProvider from "./context/ContextProvider";
import ClassDetails from "./pages/ClassDetails";
import Home from "./pages/Home";
import Schedule from "./pages/Schedule";
import Welcome from "./pages/Welcome";
import Header from "./templates/Header";

const App = () => {
  return (
    <>
      <ContextProvider>
        <RatingModal />
        <Routes>
          <Route path="/" element={<Welcome />} key="Welcome" />
          <Route path="/*" element={<Header />} key="Header">
            <Route path="home" element={<Home />} key="Home" />
            <Route path="schedule" element={<Schedule />} key="Schedule" />
          </Route>
          <Route path="class/:id" element={<ClassDetails />} key="class" />
        </Routes>
      </ContextProvider>
    </>
  );
};

export default App;
