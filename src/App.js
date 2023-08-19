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
import React, { useRef, forwardRef } from "react";
export default forwardRef(function App(_, ref) {
  const boxesContainerRef = useRef();
  const colCoursesRef = useRef();
  const upToRef = useRef();
  const LandingPageRef = useRef();
  const testimonialsRef = useRef();
  const ContactUsAndFooterRef = useRef();
  return (
    <div className="App">
      <Header
        ContactUsAndFooterRef={ContactUsAndFooterRef}
        testimonialsRef={testimonialsRef}
        LandingPageRef={LandingPageRef}
        boxesContainerRef={boxesContainerRef}
        colCoursesRef={colCoursesRef}
        upToRef={upToRef}
      />
      <LandingPage LandingPageRef={LandingPageRef} />
        <Services boxesContainerRef={boxesContainerRef} />
        <Courses colCoursesRef={colCoursesRef} />
      <Upto upToRef={upToRef} />
      <Monials testimonialsRef={testimonialsRef} />
      <ContactUsAndFooter ContactUsAndFooterRef={ContactUsAndFooterRef}>
        <ContactUs />
        <Footer />
      </ContactUsAndFooter>
    </div>
  );
});
