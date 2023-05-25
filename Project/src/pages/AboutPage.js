import React, { useState } from "react"; 
import '../pages/pages_css/slider.css' ; 
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

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
     <div className="text-1">
      <div className="elements">Who are we?</div>
      <div className="atributes">elibrary is an application that will help students and other people to have access to different books and articles.
        The material we offer includes a wide range and different genres of art, culture, sports, IT, health and much more. Users will have the opportunity
        to access the e-bookstore where they will be able to get books, place read books in their reading library, like books, post comments about different
        books, rate them, access articles, the various news and magazines that are located in our web application. Customers will have the opportunity to make requests
        about the various books that they want to be part of our electronic system. Also, various events will be organized where users can take part.</div></div> 
        <div className="line"></div>
        <div className="text-1"> 
      <div className="elements">Missions & Goals</div>
      <div className="atributes">The missions and goals of our elibrary is to offer:
        Providing access to a wide range of digital resources such as e-books, research papers, magazines
        and other multimedia materials.
        Supporting research and education by providing users with access to reliable, authoritative and up-to-date information.
        Ensuring equal access: Another important mission is to ensure that all users, regardless of location, socio-economic status or physical abilities, have equal
        access to the digital resources and services provided.
        Supporting sustainable development reducing the need for physical resources such as paper and ink and providing environmentally friendly digital alternatives.
        Providing personalized services to users such as personalized reading recommendations, alerts for new material and access to specialized resources tailored to
        specific research interests or topics.
        Supporting education and research by providing resources that can help students, researchers and academics access the information they need to succeed.
        eLibrary is committed to ensuring that every user has a positive experience using our service.</div></div> 
        <div className="line"></div>
        <div className="text-1">
      <div className="elements"> Work with us 
      </div>
<div className="atributes">
    "eLibrary is open to everyone who wants to create a collaboration and partnership together to be more successful in achieving goals
    and providing the best services for clients. Partnership with others is very important to us, that's why we are very cooperative.
    The client has the possibility of donating various donations, whether money, old books or something else, and this would also help other
    users to have a collection of different books. Whoever wants to organize events, we are open to organize together to help users gain
    new knowledge. Partnership with others would help us to create new experiences and to offer users a wider range of services.
    Anyone who wants to create a partnership with us or wants to donate can contact us through the data found in our application."
</div></div>
</div> 
</div>
 <Footer />
 </>
  );
};


export default AboutPage; 