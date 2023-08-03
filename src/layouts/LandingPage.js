// import bannerRightImage from "banner-right-image.png";
import bannerRightImage from "../assets/images/banner-right-image.png";


function LandingPage(props) {
    return (
        
        <div className='landing'>
        <div className='landing-left'>
            <p>Welcome To Our School</p>
            <h1>Best Place To Learn Graphic <span>Design!</span> </h1>
            <a>JOIN US NOW!</a>
        </div>
        <div className='landing-right'>
            <img src={bannerRightImage}/>
        </div>
        </div>
    );
}

export default LandingPage;