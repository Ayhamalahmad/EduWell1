import log from "../assets/images/templatemo-eduwell.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, forwardRef, useEffect } from "react";
export default forwardRef(function Header(
  {
    boxesContainerRef,
    colCoursesRef,
    upToRef,
    LandingPageRef,
    testimonialsRef,
    ContactUsAndFooterRef,
  },
  ref
) {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked((current) => !current);
  };
  // Function scrolling To Sections with ref
  const scrollTo = (sectionName) => {
    sectionName.current.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  };
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
          <a onClick={() => scrollTo(LandingPageRef)}>home</a>
          <a onClick={() => scrollTo(boxesContainerRef)}>Services</a>
          <a onClick={() => scrollTo(colCoursesRef)}>Courses</a>
          <a onClick={() => scrollTo(upToRef)}>up To</a>
          <a onClick={() => scrollTo(testimonialsRef)}>testimonials</a>
          <a onClick={() => scrollTo(ContactUsAndFooterRef)}>contact us</a>
        </div>
      </div>
    </div>
  );
});
