import log from "../assets/images/templatemo-eduwell.png";
import { useRef, useState, useEffect } from "react";
import { Bullets } from "../Files";
// swiper-react-autoplay-progress
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import './styles.css';
// swiper-react-autoplay-progress
export default function Monials({ testimonialsRef }) {
  const itemsRef = useRef([]);
  const container = useRef();
  // Hnadle Slide
  const [currentSlide, setCurrentSlide] = useState(0);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 2500);
    return () => {
      clearInterval(interval);
    };
  }, []);
  // Hnadle Slide
  const data = [
    {
      id: 1,
      img: "../assets/images/templatemo-eduwell.png",
      title: "Olivia Too",
      Paragraph:
        "“Praesent accumsan condimentum arcu, id porttitor est semper nec Nunc diam lorem.”",
    },
    {
      id: 2,
      img: "../assets/images/templatemo-eduwell.png",
      title: "Another Title 1",
      Paragraph:
        "“Praesent accumsan condimentum arcu, id porttitor est semper nec Nunc diam lorem.”",
    },
    {
      id: 3,
      img: "../assets/images/templatemo-eduwell.png",
      title: "Another Title 2",
      Paragraph:
        "“Praesent accumsan condimentum arcu, id porttitor est semper nec Nunc diam lorem.”",
    },
    {
      id: 4,
      img: "../assets/images/templatemo-eduwell.png",
      title: "Another Title 3",
      Paragraph:
        "“Praesent accumsan condimentum arcu, id porttitor est semper nec Nunc diam lorem.”",
    },
    {
      id: 5,
      img: "../assets/images/templatemo-eduwell.png",
      title: "Another Title 4",
      Paragraph:
        "“Praesent accumsan condimentum arcu, id porttitor est semper nec Nunc diam lorem.”",
    },
    {
      id: 6,
      img: "../assets/images/templatemo-eduwell.png",
      title: "Another Title 5",
      Paragraph:
        "“Praesent accumsan condimentum arcu, id porttitor est semper nec Nunc diam lorem.”",
    },
    {
      id: 7,
      img: "../assets/images/templatemo-eduwell.png",
      title: "Another Title 6",
      Paragraph:
        "“Praesent accumsan condimentum arcu, id porttitor est semper nec Nunc diam lorem.”",
    },
  ];

  // swiper-react-autoplay-progress
  // const progressCircle = useRef(null);
  // const progressContent = useRef(null);
  // const onAutoplayTimeLeft = (s, time, progress) => {
  //   progressCircle.current.style.setProperty("--progress", 1 - progress);
  //   progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  // };
  // swiper-react-autoplay-progress
  return (
    <div ref={testimonialsRef} className="boxes">
      <p className="p-head">TESTIMONIALS</p>
      <h2 className="h2-head">
        What You Can <span>Learn</span>
      </h2>
      <div ref={container} className="container">
        {/* swiper-react-autoplay-progress */}
        {/* <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation,Pagination]}
          
          // onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide  className="wrapper">
             {data.map((tdata, index) => {
            return (
              <div
                key={tdata.id}
                ref={(e) => (itemsRef.current[index] = e)}
                style={{
                  transform: `translateX(-${currentSlide * 304.28}px)`,
                }}
                className="item"
              >
                <p>{tdata.Paragraph}</p>
                <h4>{tdata.title}</h4>
                <div className="down-content">
                  <span>Creative Designer</span>
                  <img src={log}></img>
                </div>
              </div>
            );
          })}
          </SwiperSlide>
        </Swiper> */}
        {/* swiper-react-autoplay-progress */}

        <div className="wrapper">
          {data.map((tdata, index) => {
            return (
              <div
                key={tdata.id}
                ref={(e) => (itemsRef.current[index] = e)}
                style={{
                  transform: `translateX(-${currentSlide * 304.28}px)`,
                }}
                className="item"
              >
                <p>{tdata.Paragraph}</p>
                <h4>{tdata.title}</h4>
                <div className="down-content">
                  <span>Creative Designer</span>
                  <img src={log}></img>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="bullets">
        {data.map((item, index) => (
            <span className={currentSlide === index ? "active": null}
            onClick={() => setCurrentSlide(index)}
            >{index.length}</span>
        ))}
      </div>
      {/* <Bullets /> */}
    </div>
  );
}
