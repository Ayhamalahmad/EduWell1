import log from "../assets/images/templatemo-eduwell.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Header() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((current) => !current);
  };
  return (
    <div className="header">
      <div className="container">
      <div className="logo">
        <img src={log} />
      </div>
      <button onClick={()=> handleClick()} className="menu-icon">
      <FontAwesomeIcon  icon={faBars} />
      </button>
      <ul className={`${clicked ? "show" : ""} nav`}>
        <li>home</li>
        <li>Services</li>
        <li>Courses</li>
        <li>Pages</li>
        <li>Pages</li>
        <li>Pages</li>
      </ul>
      </div>
     
    </div>
  );
}

export default Header;
