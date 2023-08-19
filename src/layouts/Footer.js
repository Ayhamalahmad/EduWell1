import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineGithub,
  AiOutlineBehance,
} from "react-icons/ai";
function Footer() {
  // Dynamic Year
  const dynamicYear = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="container">
        <div className="social-media">
          <a>
            <AiFillFacebook />
          </a>
          <a>
            <AiFillTwitterCircle />
          </a>
          <a>
            <AiOutlineGithub />
          </a>
          <a>
            <AiOutlineBehance />
          </a>
        </div>
        <div className="content">
          <p>
            Copyright © <span>{dynamicYear}</span> Ayham Co., Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
