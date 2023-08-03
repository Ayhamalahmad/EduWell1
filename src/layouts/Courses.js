import courses01 from "../assets/images/courses-01.jpg";

function Courses(props) {
  return (
    <>
      <p className="p-head">our courses</p>
      <h2 className="h2-head">
        What You Can <span>Learn</span>
      </h2>
      <p className="p-about">
        You just think about TemplateMo whenever you need free CSS templates for
        your business website
      </p>
      <div className="col-courses">
        <div className="buttons-menu">
          <span>Web Development</span>
          <span>Web Development</span>
          <span>Web Development</span>
          <span>Web Development</span>
        </div>
        <ul>
          <li>
            <div className="left-image">
              <img src={courses01}></img>
            </div>
            <div className="right-content">
              <h3>Web Development</h3>
              <p>
                Did you know that you can visit <a href="#">TooCSS website</a> for
                latest listing of HTML templates and a variety of useful
                templates.
                <br />
                <br />
                You just need to go and visit that website right now. IF you
                have any suggestion or comment about this template, you can feel
                free to go to contact page for our email address.
              </p>
              <div className="lb-details">
                <span>36 Hours</span>
                <span> 4 Weeks</span>
                <span> 3 Certificates</span>
              </div>
              <a className="subscribe-course">Subscribe Course</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Courses;
