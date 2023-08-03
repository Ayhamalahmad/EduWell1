import log from "../assets/images/templatemo-eduwell.png";
import { useRef, useState } from "react";
function Monials(props) {
  const div = useRef(null);
  const [isDragStart, setisDragStart] = useState(false);
  const [prevPageX, setprevPageX] = useState();
  const [prevScrollLeft, setprevScrollLeft] = useState();
  const [LeftPostionDiff, setLeftPostionDiff] = useState();
  const DragStart = (e) => {
    setisDragStart(true);
    setprevPageX(e.pageX);
    setprevScrollLeft(div.scrollLeft);
  };
  const draggin = (e) => {
    if (!isDragStart) return;
    console.log(div.current.pageX);
    e.preventDefault();
    setLeftPostionDiff(e.pageX - prevPageX);
    div.current.scrollLeft -=LeftPostionDiff;
  };
  const dragStop = () => {
    setisDragStart(false);
  };
  return (
    <div className="boxes">
      <p className="p-head">our courses</p>
      <h2 className="h2-head">
        What You Can <span>Learn</span>
      </h2>
      <div
        onMouseUp={dragStop}
        onMouseMove={draggin}
        onMouseDown={DragStart}
        ref={div}
        // style={{ overflowX: 'scroll', width: '400px', height: '200px' }}
        className="container"
      >
        <div className="item">
          <p>
            “Praesent accumsan condimentum arcu, id porttitor est semper nec.
            Nunc diam lorem.”
          </p>
          <h4>Olivia Too</h4>
          <div className="down-content">
            <span>Creative Designer</span>
            <img src={log}></img>
          </div>
        </div>
        <div className="item">
          <p>
            “Praesent accumsan condimentum arcu, id porttitor est semper nec.
            Nunc diam lorem.”
          </p>
          <h4>Olivia Too</h4>
          <div className="down-content">
            <span>Creative Designer</span>
            <img src={log}></img>
          </div>
        </div>
        <div className="item">
          <p>
            “Praesent accumsan condimentum arcu, id porttitor est semper nec.
            Nunc diam lorem.”
          </p>
          <h4>Olivia Too</h4>
          <div className="down-content">
            <span>Creative Designer</span>
            <img src={log}></img>
          </div>
        </div>
        <div className="item">
          <p>
            “Praesent accumsan condimentum arcu, id porttitor est semper nec.
            Nunc diam lorem.”
          </p>
          <h4>Olivia Too</h4>
          <div className="down-content">
            <span>Creative Designer</span>
            <img src={log}></img>
          </div>
        </div>
        <div className="item">
          <p>
            “Praesent accumsan condimentum arcu, id porttitor est semper nec.
            Nunc diam lorem.”
          </p>
          <h4>Olivia Too</h4>
          <div className="down-content">
            <span>Creative Designer</span>
            <img src={log}></img>
          </div>
        </div>
        <div className="item">
          <p>
            “Praesent accumsan condimentum arcu, id porttitor est semper nec.
            Nunc diam lorem.”
          </p>
          <h4>Olivia Too</h4>
          <div className="down-content">
            <span>Creative Designer</span>
            <img src={log}></img>
          </div>
        </div>
        <div className="item">
          <p>
            “Praesent accumsan condimentum arcu, id porttitor est semper nec.
            Nunc diam lorem.”
          </p>
          <h4>Olivia Too</h4>
          <div className="down-content">
            <span>Creative Designer</span>
            <img src={log}></img>
          </div>
        </div>
      </div>
      <div className="bullets">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Monials;
