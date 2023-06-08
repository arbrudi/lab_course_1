import React, { useState, useEffect } from "react"; 
import '../pages/pages_css/slider.css' ; 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import  Axios  from "axios";


function AboutPage() { 
 
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image: "https://d3vpszern3jgjo.cloudfront.net/wp-content/uploads/2021/01/Ebook-clear-design--992x523.jpg",
      active: true,
    },
    {
      image: "https://venngage-wordpress.s3.amazonaws.com/uploads/2019/06/eBook-BP-Header.jpg",
      active: false,
    },
    {
      image: "https://designercandies.net/wp-content/uploads/2021/02/Indesign-ebook-templates-22.jpg",
      active: false,
    } ,
    {
      image: "https://media.istockphoto.com/id/965143096/vector/set-of-brochure-design-templates-on-the-subject-of-education-school-online-learning.jpg?s=612x612&w=0&k=20&c=8wpg-LoYBkzvKN9Sng-G7O79KdAtyRhi2uRlUXaG_ho=",
      active: false,
    } ,
    {
      image: "https://i.fbcd.co/products/original/93519836ba9c2e88bfc88b6837ba15c2340e21d00ca2bf46dfa3200a9e7b2c51.jpg",
      active: false,
    } 
  ];

  const[section,setSection] = useState([]);

    useEffect (()=>{
      Axios.get('http://localhost:3001/admin/text_section')
      .then((res)=>setSection(res.data))
      .catch((err)=>console.log(err));
    },[]);

    if (!section) {
      return <div>Loading...</div>;
    }
  

  return (
    <>
    <div className="nav-bar">
    <NavBar />
    </div>
    <div className="slider-conatiner">
    <div className="slider">
      <div className="slider-content">
        <img src={slides[currentSlide].image} alt={slides[currentSlide].caption} />
        <div className="slider-icons">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slider-icon ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></div>
          ))}
        </div>
      </div>
      <div className="sliderp">
        <img src="https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png" alt="Left Arrow" onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)} />
      </div>
      <div className="slidern">
        <img src="https://cdn.icon-icons.com/icons2/1904/PNG/512/rightarrow_121279.png" alt="Right Arrow" onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)} />
      </div> 
     </div> 
     <div className="text"> 
     {section.map(item => (
                <div key={item.Text_section_id } className="text-1">
                <div className="elements">{item.Text_section_title}</div>
                <div className="atributes">{item.Text_section_description}</div>
                <div className="line"></div>     
                    
</div>
 ))} 
</div>
</div>

 <Footer />
 </>
  );
};


export default AboutPage; 