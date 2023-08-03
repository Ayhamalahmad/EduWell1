import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
function ContactUs() {
  return (
    <div className="contact-us">
      <div className="container">
        <div className="map-content">
          <div
            className="map-container"
            style={{ position: "relative", zIndex: 2 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7151.84524236698!2d-122.19494600413192!3d47.56605883252286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490695e625f8965%3A0xf99b055e76477def!2sNewcastle%20Beach%20Park%20Playground%2C%20Bellevue%2C%20WA%2098006%2C%20USA!5e0!3m2!1sen!2sth!4v1644335269264!5m2!1sen!2sth"
              width="100%"
              height="420px"
              frameborder="0"
              style={{ border: 0, borderRadius: "15px" }}
              allowFullScreen
              title="Google Maps Embed"
            />
          </div>
          <div className="phones">
            <div className="item">
            <FontAwesomeIcon className='faPhone-icon' icon={faPhone} />
              <h4>
                phone number
                <a href="tel:+4733378901">+47 333 78 901 </a>
              </h4>
            </div>
            <div className="item">
            <FontAwesomeIcon className='faPhone-icon' icon={faPhone} />
              <h4>
                phone number
                <a href="tel:+4733378901">+47 333 78 901 </a>
              </h4>
            </div>
          </div>
        </div>
       
        <div className="contact-form">
          <div className="head">
            <span>contact us</span>
            <h4>
              Say<span>Hello</span>
            </h4>
            <p>
              IF you need a working contact form by PHP script, please visit
              TemplateMo's contact page for more info.
            </p>
          </div>
          <form>
            <input type="text" placeholder="Full Name"></input>
            <input type="email" placeholder="Your Email"></input>
            <textarea placeholder="Your Message"></textarea>
            <input type="submit" value="SEND MESSAGE"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
