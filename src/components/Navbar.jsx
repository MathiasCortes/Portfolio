import React, { useState } from "react";
import "../styles/Navbar.css" 
import Icon from "./SvgIcon";



const Navbar = () => {

    const [isHidden, setIsHidden] = useState(false);
/* const [sideMenuIcon, setSideMenuIcon] = useState(false); */

const ToggleIcon = isHidden ? ( <Icon name="Close" alt="Menu Icon" color="Black" size="32"/>
   
  ) : (
    <Icon name="Menu" alt="Menu Icon" color="Black" size="32"/>
  );

  const  handleClick = () => {
    setIsHidden(!isHidden)
  }
  return (
    <nav className="bg-slate-800 shadow-md">
      <div class="mx-auto h-auto">My Website</div>
      <ul className="navbar-links">
        <li><a href="#">a</a></li>
        <li><a href="#">b</a></li>
        <li><a href="#">c</a></li>
        <li><a href="#">d</a></li>
      </ul>
       <button className="ButtonToggleIcon" onClick={handleClick}>
          {ToggleIcon}
        </button>
    </nav>
  );
};

export default Navbar;
