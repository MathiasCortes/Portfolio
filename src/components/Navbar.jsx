import React, { useState } from "react";
import Logo from "../assets/svg/LogoStar.png"
const Navbar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const [sideMenuIcon, setSideMenuIcon] = useState(false);

  const toggleList = sideMenuIcon ? (
    <ul className="absolute m-0 text-white list-none bg-gray-800 rounded-md w-60 top-14 right-1"> {/* -z-10 */}
      <li className= "toggleMenu-item">
        <a className=" navToggle-listItems-a" href="#Ajustes" >*</a>
      </li>
      <li className= "toggleMenu-item">
        <a className="navToggle-listItems-a" href="#Home">*</a>
      </li>
      <li className= "toggleMenu-item">
        <a className="navToggle-listItems-a" href="#increible">*</a>
      </li>
      <li className= "toggleMenu-item">
        <a className="navToggle-listItems-a" href="#maravilloso">*</a>
      </li>
    </ul>
  ) : null;

  const icon = isHidden ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      className="float-right w-10 h-10 transition duration-500 transform -scale-y-100 "
      alt="Toggle Menu"
    >
      {/* Icono cuando está visible */}
      <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="float-right w-10 h-10 transition duration-500"
    >
      {/* Icono cuando está oculto */}
      <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z" />
    </svg>
  );

  const handleClick = () => {
    setIsHidden(!isHidden);
    setSideMenuIcon(!sideMenuIcon);
  };
  return (
    <nav className="flex items-center px-2 py-2 text-white bg-gray-800 border-b-2 border-gray-950 place-content-between">
      
       <img src={Logo} alt="Logo" className="h-10 w-100" />
      
      <ul className="flex list-none max-sm:hidden">
        <li className="nav-listItem">
          <a className="nav-listItem-a" href="#home">Opcion 1</a>
        </li>
        <li className="nav-listItem">
          <a className="nav-listItem-a" href="#interesante">Opcion 2</a>
        </li>
        <li className="nav-listItem">
          <a className="nav-listItem-a" href="#maybe">Opcion 3</a>
        </li>
        <li className="nav-listItem">
          <a className="nav-listItem-a" href="#bytheway">Opcion 4</a>
        </li>
      </ul>
      <button className="transition duration-500 transform bg-white border rounded-none hover:scale-95" onClick={handleClick}>
        {icon}
      </button>

      {toggleList}
    </nav>
  );
};

export default Navbar;
