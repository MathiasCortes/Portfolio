import React, { useState } from "react";
import Logo from "../../assets/svg/LogoStar.png";

const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [sideMenuIcon, setSideMenuIcon] = useState(false);
  const handleClick = () => {
    setIsHidden(!isHidden);
    setSideMenuIcon(!sideMenuIcon);
  };
  const toggleList = sideMenuIcon ? (
    <div className={`${isHidden ? "activeToggle" : "hiddenToggle"}`}>
      <ul className="relative transition duration-500">
        {" "}
        {/* -z-10 */}
        <li className="toggleMenu-item">
          <a className=" navToggle-listItems-a translate-" href="#Ajustes">
            Opcion 1
          </a>
        </li>
        <li className="toggleMenu-item">
          <a className="navToggle-listItems-a" href="#Home">
            Opcion 2
          </a>
        </li>
        <li className="toggleMenu-item">
          <a className="navToggle-listItems-a" href="#increible">
            Opcion 3
          </a>
        </li>
        <li className="toggleMenu-item">
          <a className="navToggle-listItems-a" href="#maravilloso">
            Opcion 4
          </a>
        </li>
        <li className="toggleMenu-item">
          <a className="navToggle-listItems-a" href="#maravilloso">
            Opcion 5
          </a>
        </li>
      </ul>
    </div>
  ) : null;

  const iconToggle = isHidden ? (
    <button
      className="relative flex items-center justify-center w-12 h-12 overflow-hidden transition duration-500 transform bg-white border rounded-sm hover:scale-95"
      onClick={handleClick}
    >
      <span className="absolute w-10 h-1 transition-transform duration-300 -rotate-45 bg-black rounded-sm"></span>
      <span className="absolute w-10 h-1 transition-transform duration-300 rotate-45 bg-black rounded-sm"></span>
      <span className="absolute w-10 h-1 transition-transform duration-300 translate-x-12 bg-black rounded-sm"></span>
    </button>
  ) : (
    <button
      className="relative flex items-center justify-center w-12 h-12 overflow-hidden transition duration-300 transform bg-white border rounded-sm hover:scale-95"
      onClick={handleClick}
    >
      <span className="transition-transform duration-300 -translate-y-3 lineToggle"></span>
      <span className="transition-transform duration-300 translate-y-3 lineToggle"></span>
      <span className="transition-transform duration-300 -translate-x-0 lineToggle"></span>
    </button>
  );

  return (
    <nav className="relative z-10 flex items-center px-2 py-2 text-white bg-gray-800 border-b-2 border-gray-950 place-content-between">
      <img src={Logo} alt="Logo" className="h-10 w-100" />

      <ul className="flex list-none max-sm:hidden">
        <li className="nav-listItem">
          <a className="nav-listItem-a" href="#home">
            Opcion 1
          </a>
        </li>
        <li className="nav-listItem">
          <a className="nav-listItem-a" href="#interesante">
            Opcion 2
          </a>
        </li>
        <li className="nav-listItem">
          <a className="nav-listItem-a" href="#maybe">
            Opcion 3
          </a>
        </li>
        <li className="nav-listItem">
          <a className="nav-listItem-a" href="#bytheway">
            Opcion 4
          </a>
        </li>
      </ul>

      {iconToggle}

      {toggleList}
    </nav>
  );
};

export default Navbar;
