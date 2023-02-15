import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoTriangle } from "react-icons/io5";
import { Outlet, useLocation } from "react-router";
import { Link } from "react-router-dom";
import { BsPlus } from "react-icons/bs";
import LinkBack from "../components/LinkBack";

const Header = () => {
  let location = useLocation();

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  //closes burger menu when location changes
  useEffect(() => {
    setShowBurgerMenu(false);
  }, [location]);

  const linkStyle = "my-4 text-normal";
  return (
    <>
      {showBurgerMenu && (
        <nav className="flex flex-col items-center justify-items-center fixed z-10 bg-white h-screen w-screen">
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
          {/* <Link>Log in</Link> */}
        </nav>
      )}
      <header className="flex place-content-between mt-4 mb-4 mx-4">
        {location.pathname === "/home" ? (
          <IoTriangle size="30px" className="mt-8 text-customGray" />
        ) : (
          <LinkBack />
        )}
        <h1 className="text-normal">Popular Classes</h1>
        <button onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
          <HiMenuAlt3 size="30px" className="mt-8 text-customGray" />
        </button>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
