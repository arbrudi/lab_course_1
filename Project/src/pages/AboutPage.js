import React, { useState, useEffect, useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../pages/pages_css/slider.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Axios from "axios";
import { Link } from "react-router-dom";

function AboutPage() {
  const [slidercontroller, setSliderController] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [section, setSection] = useState([]);
  const sliderRef = useRef(null);

  useEffect(() => {
    Axios.get("http://localhost:3001/admin/text_section")
      .then((res) => setSection(res.data))
      .catch((err) => console.log(err));

    Axios.get("http://localhost:3001/admin/slidercontroller")
      .then((res) => setSliderController(res.data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    },1000);

    return () => clearInterval(interval);
  }, []);

  if (!section || !slidercontroller) {
    return <div>Loading...</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 50000, // Change the autoplay speed to 5000ms (5 seconds)
    beforeChange: (_, nextSlide) => setCurrentSlide(nextSlide),
  };

  return (
    <>
      <div className="nav-bar">
        <NavBar />
      </div>

      <div className="slider-container">
        <Slider {...settings} ref={sliderRef} initialSlide={currentSlide}>
          {slidercontroller.map((data, i) => (
            <div key={i}>
              <img
                src={data.Slider_image}
                alt="Slider Image"
                className="slider-image"
              />
            </div>
          ))}
        </Slider>
      </div>

      <div className="text">
        {section.map((item) => (
          <div key={item.Text_section_id} className="text-1">
            <div className="elements">{item.Text_section_title}</div>
            <div className="atributes">{item.Text_section_description}</div>
            <div className="line"></div>
          </div>
        ))}
      </div>

      <Link to={"/OurPartners"} className="btn">
        <button className="btn">Our Partners</button>
      </Link>

      <Footer />
    </>
  );
}

export default AboutPage;