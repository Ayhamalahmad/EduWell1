import log from "../assets/images/templatemo-eduwell.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState, forwardRef, useEffect } from "react";
import { motion } from "framer-motion"
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
  // Handle Scroll To Set Header position Fixed
  const [Fixed,setFixed]=useState(false);
  const pop = () => {
    if (window.scrollY >= 200) {
      setFixed(true)
    } else if(window.scrollY < 190){
      setFixed(false)

    }
  };

  useEffect(() => {
    window.addEventListener("scroll", pop);
    return () => window.removeEventListener("scroll", pop);
  }, []);
  // Handle  Click
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
    <motion.div
    layout 
    className={`${ Fixed ? "fixed" : ""} header`}>
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
    </motion.div>
  );
});
