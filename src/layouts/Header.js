import log from "../assets/images/templatemo-eduwell.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState ,forwardRef, useEffect } from "react";
export default forwardRef(function Header({boxesContainerRef},ref) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((current) => !current);
  };
  function handleScrollToServices() {
    boxesContainerRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <img src={log} />
        </div>
        <button onClick={() => handleClick()} className="menu-icon">
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className={`${clicked ? "show" : ""} nav`}>
          <a>home</a>
          <a  onClick={handleScrollToServices}>Services</a>
          <a>Courses</a>
          <a>Pages</a>
          <a>Pages</a>
          <a>Pages</a>
        </div>
      </div>
    </div>
  );
})

