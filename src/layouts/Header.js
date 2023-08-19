import log from "../assets/images/templatemo-eduwell.png";
import { AiOutlineAlignRight } from "react-icons/ai";
import { useState, forwardRef, useEffect } from "react";
import { motion } from "framer-motion";
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
  const [Fixed, setFixed] = useState(false);
  const pop = () => {
    if (window.scrollY >= 200) {
      setFixed(true);
    } else if (window.scrollY < 190) {
      setFixed(false);
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
    <motion.div layout className={`${Fixed ? "fixed" : ""} header`}>
      <div className="container">
        <div className="logo">
          <img src={log} />
        </div>
        <button onClick={() => handleClick()} className="menu-icon">
          <span className={clicked ? "rotate" : ""}></span>
        </button>
        <div className={`${clicked ? "show" : ""} nav`}>
          <a
            onClick={() => {
              scrollTo(LandingPageRef);
              if(clicked){
                handleClick();
              }
            }}
          >
            home
          </a>
          <a
            onClick={() => {
              scrollTo(boxesContainerRef);
              if(clicked){
                handleClick();
              }
            }}
          >
            Services
          </a>
          <a
            onClick={() => {
              scrollTo(colCoursesRef);
              if(clicked){
                handleClick();
              }
            }}
          >
            Courses
          </a>
          <a
            onClick={() => {
              scrollTo(upToRef);
              if(clicked){
                handleClick();
              }

            }}
          >
            up To
          </a>
          <a
            onClick={() => {
              scrollTo(testimonialsRef);
              if(clicked){
                handleClick();
              }
            }}
          >
            testimonials
          </a>
          <a
            onClick={() => {
              scrollTo(ContactUsAndFooterRef);
              if(clicked){
                handleClick();
              }
            }}
          >
            contact us
          </a>
        </div>
      </div>
    </motion.div>
  );
});
