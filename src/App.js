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
import React, { useRef, forwardRef,useEffect } from "react";
export default forwardRef(function App(_,ref) {
  const boxesContainerRef = useRef();
  const headerRef = useRef();
  console.log(headerRef); // تحقق هنا للتأكد من قيمة headerRef

  // console.log(boxesContainerRef.current); // logs <div>Deep!</div>
  // useEffect(() => {
  //   console.log(boxesContainerRef.current); // logs <div>Deep!</div>
  // }, [])
  // console.log(boxesContainerRef);
  return (
    // don't forget to move container to components
    <div className="App">
      <Header boxesContainerRef={boxesContainerRef} ref={headerRef}/>
      <LandingPage />
      <div className="container">
        <Services boxesContainerRef={boxesContainerRef}  />
        <Courses />
      </div>
      <Upto />
      <Monials />
      <ContactUsAndFooter>
        <ContactUs />
        <Footer />
      </ContactUsAndFooter>
    </div>
  );
});
