import ert from "../assets/images/service-icon-01.png";
import {Bullets }from '../Files'
export default function Services({ boxesContainerRef }) {
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
      <Bullets />
    </>
  );
}
