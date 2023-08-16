// import React, { useState, useEffect } from 'react';
// // import './Slider.css'; // استيراد ملف الأنماط الذي قمنا بإنشائه

// const Slider = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % 9);
//     }, 2500);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <div className="slider-container">
//       <div className="swiper">
//         <div
//           className="swiper-wrapper"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           <div className="swiper-slide">Slide 1</div>
//           <div className="swiper-slide">Slide 2</div>
//           <div className="swiper-slide">Slide 3</div>
//           <div className="swiper-slide">Slide 4</div>
//           <div className="swiper-slide">Slide 5</div>
//           <div className="swiper-slide">Slide 6</div>
//           <div className="swiper-slide">Slide 7</div>
//           <div className="swiper-slide">Slide 8</div>
//           <div className="swiper-slide">Slide 9</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Slider;
