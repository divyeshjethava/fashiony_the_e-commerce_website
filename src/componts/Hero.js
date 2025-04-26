import React, { useEffect, useState,useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import p1 from '../images/slid1.jpg';
import p2 from '../images/slid2.jpg';
import p3 from '../images/slide3.jpg';
import p4 from '../images/slid4.jpg';
import p5 from '../images/slid5.jpg';
import p6 from '../images/slide6.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {motion} from 'framer-motion';
import { useInView } from "react-intersection-observer";


export default function Hero() {
  const navigate = useNavigate();
   const { ref, inView } = useInView({ threshold: 0.5, });
  const [iconStyles, setIconStyles] = useState([]);
  const icons = useMemo(() => [
    "fa-shopping-bag",
    "fa-shopping-cart",
    "fa-tag",
    "fa-percent",
    "fa-tags",
    "fa-credit-card",
    "fa-store",
    "fa-box",
    "fa-dollar-sign",
    "fa-heart",
    "fa-gift",
    "fa-search",
    "fa-star fa-rotate-90"
  ], []);
  const settings = {
    dots: true,        
    infinite: true,   
    speed: 500,       
    slidesToShow: 1,   
    slidesToScroll: 1, 
    autoplay: true,    
    autoplaySpeed: 3000,
    cssEase: 'ease-in-out',
    fade: true,
  };
  const explore = () => {
    
    navigate('/Explore');
  }
  useEffect(() => {
    const generateStyles = () => {
      const styles = Array(icons.length)
        .fill(0)
        .map((_, index) => {
          const duration = Math.random() * 15 + 10; 
          const delay = `${Math.random() * 2}s`; 
          const durationString = `${duration}s`;

          return {
            animationDuration: durationString,
            animationDelay: delay,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            icon: icons[index % icons.length] 
          };
        });

      setIconStyles(styles);
    };

    generateStyles();
  },  [icons]); 
  return (
    <div className='heroMain'>
      <div className='frame_icon'>
      {iconStyles.map((style, index) => (
          <i
            key={index}
            className={`fas ${style.icon}`}
            style={{
              ...style,
              position: "absolute",
              fontSize: "1.5rem",
            }}
          ></i>
        ))}

      </div>
      <motion.div
         ref={ref}
         initial={{ opacity: 0, x: -50 }}
         animate={inView ? { opacity: 1, x: 0 } : {}}
         transition={{ duration: 0.8, ease: "easeOut" }} 

         className="hero1">
        <h1 className='h1'>Discover and Find Your Own Fashion!</h1>
        <p className='p'>Explore our curated collection of unique and stylish clothing items and accessories tailored to your unique taste.</p>
        <button className="heroButton" onClick={explore}>EXPLORE NOW</button>
      </motion.div>
      <div className="hero2">
     
      <motion.div
         ref={ref}
         initial={{ opacity: 0, y: -50 }}
         animate={inView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.8, ease: "easeOut" }}
       className='frame1'></motion.div>
      <motion.div
         ref={ref}
         initial={{ opacity: 0, y: -50 }}
         animate={inView ? { opacity: 1, y: 0 } : {}}
         transition={{ duration: 0.8, ease: "easeOut" }}

       className='frame2'></motion.div>
      <motion.div
         ref={ref}
         initial={{ opacity: 0, x: 50 }}
         animate={inView ? { opacity: 1, x: 0 } : {}}
         transition={{ duration: 0.8, ease: "easeOut" }}
       className='frame_img'>
      <Slider {...settings}>
        <div className="slide">
          <img src={p1} alt = ""/>
          <span className="frame_span1">Up to 20% Off</span>
          <span className="frame_title">Fashiony</span>
        </div>
        <div className="slide">
          <img src={p2} alt = ""/>
          <span className="frame_span1">Up to 40% Off</span>
          <span className="frame_title">Fashiony</span>
        </div>
        <div className="slide">
          <img src={p3} alt = ""/>
          <span className="frame_span1">Up to 50% Off</span>
          <span className="frame_title" style={{color:"#224F34"}}>Fashiony</span>
        </div>
        <div className="slide">
          <img src={p4} alt = ""/>
          <span className="frame_span1">Up to 18% Off</span>
          <span className="frame_title">Fashiony</span>
        </div>
        <div className="slide">
          <img src={p5} alt = ""/>
          <span className="frame_span2">Up to 35% Off</span>
          <span className="frame_title" style={{color:"#224F34"}}>Fashiony</span>
        </div>
        <div className="slide">
          <img src={p6} alt = ""/>
          <span className="frame_span2">Up to 10% Off</span>
          <span className="frame_title" style={{color:"#224F34"}}>Fashiony</span>
        
        </div>
       </Slider>
      </motion.div>
      
      </div>

     
    </div>
  )
}
