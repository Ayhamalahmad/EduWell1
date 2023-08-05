import {
  Header,
  LandingPage,
  Services,
  Courses,
  Upto,
  Monials,
  ContactUsAndFooter,
  ContactUs,
  Footer,
} from "./Files";
import "./assets/css/homepage.css";
import React, { useRef, forwardRef, useEffect } from "react";
export default forwardRef(function App(_, ref) {
  const boxesContainerRef = useRef();
  const colCoursesRef = useRef();
  const upToRef = useRef();
  const LandingPageRef = useRef();
  const testimonialsRef = useRef();
  const ContactUsAndFooterRef = useRef();
  return (
    // don't forget to move container to components
    <div className="App">
      {/* ref={headerRef} */}
      <Header
        ContactUsAndFooterRef={ContactUsAndFooterRef}
        testimonialsRef={testimonialsRef}
        LandingPageRef={LandingPageRef}
        boxesContainerRef={boxesContainerRef}
        colCoursesRef={colCoursesRef}
        upToRef={upToRef}
      />
      <LandingPage LandingPageRef={LandingPageRef} />
      <div className="container">
        <Services boxesContainerRef={boxesContainerRef} />
        <Courses colCoursesRef={colCoursesRef} />
      </div>
      <Upto upToRef={upToRef} />
      <Monials testimonialsRef={testimonialsRef} />
      <ContactUsAndFooter ContactUsAndFooterRef={ContactUsAndFooterRef}>
        <ContactUs />
        <Footer />
      </ContactUsAndFooter>
    </div>
  );
});
