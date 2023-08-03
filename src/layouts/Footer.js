import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faFacebook } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <ul className="social-media">
          <li>
            <a>
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </li>
          <li>
            <a>
              <FontAwesomeIcon icon={faPhone} />
            </a>
          </li>
        </ul>
        <div className="content">
          <p>
            Copyright © <span>2022</span> EduWell Co., Ltd. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
