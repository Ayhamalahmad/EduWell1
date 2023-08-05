import React from "react";
import ctaLeft from "../assets/images/cta-left-image.png";

function Upto({upToRef}) {
  return (
    <div ref={upToRef} className="upto">
      <div className="container">
        <div className="image-left">
          <img src={ctaLeft} />
        </div>
        <div className="contant-right">
            <h6>Get the sale right now!</h6>
            <h4>Up to 50% OFF For 1+ courses</h4>
            <p>Kogi VHS freegan bicycle rights try-hard green juice probably haven't heard of them cliche la croix af chillwave.</p>
            <a href="/#">VIEW COURSES</a>
        </div>
      </div>
    </div>
  );
}

export default Upto;
