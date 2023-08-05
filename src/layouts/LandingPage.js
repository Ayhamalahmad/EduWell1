// import bannerRightImage from "banner-right-image.png";
import bannerRightImage from "../assets/images/banner-right-image.png";

function LandingPage({LandingPageRef}) {
  return (
    <div ref={LandingPageRef} className="landing">
      <div className="container">
        <div className="landing-left">
          <p>Welcome To Our School</p>
          <h1>
            Best Place To Learn Graphic <span>Design!</span>{" "}
          </h1>
          <a>JOIN US NOW!</a>
        </div>
        <div className="landing-right">
          <img src={bannerRightImage} />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
