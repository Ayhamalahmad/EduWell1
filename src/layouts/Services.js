import ert from "../assets/images/service-icon-01.png";
import { Bullets } from "../Files";
import { useRef, useState, useEffect } from "react";
export default function Services({ boxesContainerRef }) {
  // Hnadle Slide
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % BoxData.length);
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // Hnadle Slide
  const BoxData = [
    {
      id: 1,
      img: "../assets/images/service-icon-01.png",
      title: "Another Title ",
      Paragraph:
        "“Praesent accumsan condimentum arcu, id porttitor est semper nec Nunc diam lorem.”",
    },
    {
      id: 2,
      img: "../assets/images/service-icon-01.png",
      title: "Another Title 1",
      Paragraph:
        "“Praesent accumsan condimentum arcu, id porttitor est semper nec Nunc diam lorem.”",
    },
    {
      id: 3,
      img: "../assets/images/service-icon-01.png",
      title: "Another Title 2",
      Paragraph:
        "“Praesent accumsan condimentum arcu, id porttitor est semper nec Nunc diam lorem.”",
    },
    {
      id: 4,
      img: "../assets/images/service-icon-01.png",
      title: "Another Title 3",
      Paragraph:
        "“Praesent accumsan condimentum arcu, id porttitor est semper nec Nunc diam lorem.”",
    },
    {
      id: 5,
      img: "../assets/images/service-icon-01.png",
      title: "Another Title 4",
      Paragraph:
        "“Praesent accumsan condimentum arcu, id porttitor est semper nec Nunc diam lorem.”",
    },
    {
      id: 6,
      img: "../assets/images/service-icon-01.png",
      title: "Another Title 5",
      Paragraph:
        "“Praesent accumsan condimentum arcu, id porttitor est semper nec Nunc diam lorem.”",
    },
    {
      id: 7,
      img: "../assets/images/service-icon-01.png",
      title: "Another Title 6",
      Paragraph:
        "“Praesent accumsan condimentum arcu, id porttitor est semper nec Nunc diam lorem.”",
    },
  ];
  return (
    <>
      <p className="p-head">Our Services</p>
      <h2 className="h2-head">
        Provided <span>Services</span>
      </h2>
      <div className="container">
        <div ref={boxesContainerRef} className="col">
          {BoxData.map((tdata, index) => {
            return (
              <div
                key={tdata.id}
                style={{
                  transform: `translateX(-${currentSlide * 290}px)`,
                }}
                className={`box ${currentSlide === index ? "active" : ""}`}
              >
                <img src={ert}></img>
                <h3>{tdata.title}</h3>
                <p>{tdata.Paragraph}</p>
              </div>
            );
          })}
          {/* <div className="box">
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
        </div> */}
        </div>
      </div>

      <div className="bullets">
        {BoxData.map((item, index) => (
          <span
            className={currentSlide === index ? "active" : null}
            onClick={() => setCurrentSlide(index)}
          >
            {index.length}
          </span>
        ))}
      </div>
      {/* <Bullets /> */}
    </>
  );
}
