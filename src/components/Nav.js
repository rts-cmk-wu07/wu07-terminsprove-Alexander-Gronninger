import { Link, useNavigate } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import LoginForm from "./LoginForm";

const Nav = ({ setShowBurgerMenu }) => {
  //Login related
  const [showLogin, setShowLogin] = useState(false);
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();
  function handleLogOut() {
    setUser(null);
    navigate("/");
  }
  function handleLogIn() {
    setShowLogin(true);
  }

  //Grouped style for buttons & links
  const linkStyle = "my-4 text-normal";
  return (
    <>
      {showLogin && <LoginForm setShowLogin={setShowLogin} />}
      <nav className="flex flex-col items-center justify-items-center fixed z-20 bg-white h-screen w-screen">
        <button
          className="mt-4 ml-auto mr-2 mb-8"
          onClick={() => setShowBurgerMenu(false)}
        >
          <BsPlus size="40px" className="rotate-45 text-customGray " />
        </button>
        <Link className={linkStyle} to="/home">
          Home
        </Link>
        <Link className={linkStyle} to="/search">
          Search
        </Link>
        <Link className={linkStyle} to="/schedule">
          My Schedule
        </Link>
        {(user && (
          <button className={linkStyle} onClick={handleLogOut}>
            Log out
          </button>
        )) || (
          <button className={linkStyle} onClick={handleLogIn}>
            Log in
          </button>
        )}
      </nav>
    </>
  );
};

export default Nav;
