import { useEffect, useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoTriangle } from "react-icons/io5";
import { Outlet, useLocation } from "react-router";
import LinkBack from "../components/LinkBack";
import Nav from "../components/Nav";

const Header = () => {
  let location = useLocation();

  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  //closes burger menu when location changes
  useEffect(() => {
    setShowBurgerMenu(false);
  }, [location]);

  const [pageTitle, setPageTitle] = useState(null);
  useEffect(() => {
    if (location.pathname === "/search") {
      setPageTitle("Search");
    } else if (location.pathname === "/schedule") {
      setPageTitle("My Schedule");
    }
  }, [location]);

  return (
    <>
      {showBurgerMenu && <Nav setShowBurgerMenu={setShowBurgerMenu} />}
      <header className="mt-4 mb-4 mx-4">
        <div className="flex place-content-between">
          {location.pathname === "/home" ? (
            <IoTriangle size="30px" className="mt-8 text-customGray" />
          ) : (
            <LinkBack />
          )}
          {location.pathname === "/home" ? (
            <h1 className="text-normal">Popular Classes</h1>
          ) : (
            <></>
          )}
          <button onClick={() => setShowBurgerMenu(!showBurgerMenu)}>
            <HiMenuAlt3 size="30px" className="mt-8 text-customGray" />
          </button>
        </div>
        {location.pathname !== "/home" ? (
          <h1 className="text-big mt-4  ">{pageTitle}</h1>
        ) : (
          <></>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Header;
