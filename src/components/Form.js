export default  function Form(props) {
    return (
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
    );
}
