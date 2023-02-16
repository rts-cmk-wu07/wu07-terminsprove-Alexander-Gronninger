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

  return (
    <>
      {showBurgerMenu && <Nav setShowBurgerMenu={setShowBurgerMenu} />}
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
