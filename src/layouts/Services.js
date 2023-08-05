import ert from "../assets/images/service-icon-01.png";
import React, { useRef,forwardRef  } from "react";
export default function Services({ boxesContainerRef }) {
  // const boxesContainer = useRef();
  return (
    <>
      <p className="p-head">Our Services</p>
      <h2 className="h2-head">
        Provided <span>Services</span>
      </h2>
      <div ref={boxesContainerRef} className="col">
        <div className="box">
          <img src={ert} />
          <h3>Ready Target</h3>
          <p>
            Please tell your friends about the best CSS template website that is
            TemplateMo.
          </p>
        </div>
        <div className="box">
          <img src={ert} />
          <h3>Ready Target</h3>
          <p>
            Please tell your friends about the best CSS template website that is
            TemplateMo.
          </p>
        </div>
        <div className="box">
          <img src={ert} />
          <h3>Ready Target</h3>
          <p>
            Please tell your friends about the best CSS template website that is
            TemplateMo.
          </p>
        </div>
        <div className="box">
          <img src={ert} />
          <h3>Ready Target</h3>
          <p>
            Please tell your friends about the best CSS template website that is
            TemplateMo.
          </p>
        </div>
      </div>
      <div className="bullets">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>

    </>
  );
}

