import courses01 from "../assets/images/courses-01.jpg";
import courses02 from "../assets/images/courses-02.jpg";
import courses03 from "../assets/images/courses-03.jpg";
import courses04 from "../assets/images/courses-04.jpg";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
export default function Courses({ colCoursesRef }) {
  const [currentActive, setCurrentActive] = useState(0);
  const liActive = useRef();
  return (
    <div className="container">
      <p className="p-head">our courses</p>
      <h2 className="h2-head">
        What You Can <span>Learn</span>
      </h2>
      <p className="p-about">
        You just think about TemplateMo whenever you need free CSS templates for
        your business website
      </p>
      <div ref={colCoursesRef} className="col-courses">
        <div className="buttons-menu">
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={currentActive === 0 ? "active" : ""}
            onClick={() => setCurrentActive(0)}
          >
            Web Development
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={currentActive === 1 ? "active" : ""}
            onClick={() => setCurrentActive(1)}
          >
            Graphic Design
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={currentActive === 2 ? "active" : ""}
            onClick={() => setCurrentActive(2)}
          >
            Web Design
          </motion.span>
          <motion.span
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className={currentActive === 3 ? "active" : ""}
            onClick={() => setCurrentActive(3)}
          >
            WordPress
          </motion.span>
        </div>
        <ul>
          <li className={currentActive === 0 ? "active" : ""} ref={liActive}>
            <div className="left-image">
              <img src={courses01}></img>
            </div>
            <div className="right-content">
              <h3>Web Development</h3>
              <p>
                Did you know that you can visit <a href="#">TooCSS website</a>{" "}
                for latest listing of HTML templates and a variety of useful
                templates.
                <br />
                <br />
                You just need to go and visit that website right now. IF you
                have any suggestion or comment about this template, you can feel
                free to go to contact page for our email address.
              </p>
              <div className="lb-details">
                <span>36 Hours</span>
                <span> 4 Weeks</span>
                <span> 3 Certificates</span>
              </div>
              <a className="subscribe-course">Subscribe Course</a>
            </div>
          </li>
          <li className={currentActive === 1 ? "active" : ""}>
            <div className="left-image">
              <img src={courses02}></img>
            </div>
            <div className="right-content">
              <h3>Graphic Designt</h3>
              <p>
                Did you know that you can visit <a href="#">TooCSS website</a>
                for latest listing of HTML templates and a variety of useful
                templates.
                <br />
                <br />
                You just need to go and visit that website right now. IF you
                have any suggestion or comment about this template, you can feel
                free to go to contact page for our email address.
              </p>
              <div className="lb-details">
                <span>36 Hours</span>
                <span> 4 Weeks</span>
                <span> 3 Certificates</span>
              </div>
              <a className="subscribe-course">Subscribe Course</a>
            </div>
          </li>
          <li className={currentActive === 2 ? "active" : ""}>
            <div
              
              className="left-image"
            >
              <img src={courses03}></img>
            </div>
            <div className="right-content">
              <h3>Web Design</h3>
              <p>
                Did you know that you can visit <a href="#">TooCSS website</a>{" "}
                for latest listing of HTML templates and a variety of useful
                templates.
                <br />
                <br />
                You just need to go and visit that website right now. IF you
                have any suggestion or comment about this template, you can feel
                free to go to contact page for our email address.
              </p>
              <div className="lb-details">
                <span>36 Hours</span>
                <span> 4 Weeks</span>
                <span> 3 Certificates</span>
              </div>
              <a className="subscribe-course">Subscribe Course</a>
            </div>
          </li>
          <li className={currentActive === 3 ? "active" : ""}>
            <div className="left-image">
              <img src={courses04}></img>
            </div>
            <div className="right-content">
              <h3>WordPress</h3>
              <p>
                Did you know that you can visit <a href="#">TooCSS website</a>{" "}
                for latest listing of HTML templates and a variety of useful
                templates.
                <br />
                <br />
                You just need to go and visit that website right now. IF you
                have any suggestion or comment about this template, you can feel
                free to go to contact page for our email address.
              </p>
              <div className="lb-details">
                <span>36 Hours</span>
                <span> 4 Weeks</span>
                <span> 3 Certificates</span>
              </div>
              <a className="subscribe-course">Subscribe Course</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
