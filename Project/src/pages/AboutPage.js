import React, { useState } from "react"; 
import '../components/components_css/slider.css' ; 

function AboutPage() { 
 
  const [currentSlide, setCurrentSlide] = useState(0); 
  const slides = [
    { 
        image: "https://mintbook.com/blog/wp-content/uploads/How-To-Set-up-an-eLibrary-For-the-Schools.jpeg",

    },
    {
      image: "https://mintbook.com/blog/wp-content/uploads/How-To-Set-up-an-eLibrary-For-the-Schools.jpeg",
    
    },
    {
      image: "https://doku.moodlearning.com/lib/exe/fetch.php?media=elibrary.png",
      
    }
  ];

  return (
    <div className="slider">
      <img src={slides[currentSlide].image} alt={slides[currentSlide].caption} />
      <p>{slides[currentSlide].caption}</p> 
      
    <div className="sliderp">
  <img src="./images/left-arrow.png" alt="Left Arrow" onClick={() => setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)} />
</div>

  
      <div className="slidern">
  <img src="./images/right-arrow.png" alt="Right Arrow" onClick={() => setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1)}/>
</div> 
<div className="elements">Who are we?</div> 
<div className="atributes">elibrary is an application that will help students and other people to have access to different books and articles.
The material we offer includes a wide range and different genres of art, culture, sports, IT, health and much more. Users will have the opportunity 
to access the e-bookstore where they will be able to get books, place read books in their reading library, like books, post comments about different 
books, rate them, access articles, the various news and magazines that are located in our web application. Customers will have the opportunity to make requests
 about the various books that they want to be part of our electronic system. Also, various events will be organized where users can take part.</div> 
     <div className="elements">Missions & Goals </div> 
<div className="atributes"> The missions and goals of our elibrary is to offer:
Providing access to a wide range of digital resources  such as e-books, research papers, magazines
  and other multimedia materials.
Supporting research and education by providing users with access to reliable, authoritative and up-to-date information.
Ensuring equal access: Another important mission is to ensure that all users, regardless of location, socio-economic status or physical abilities, have equal
 access to the digital resources and services provided.
Supporting sustainable development reducing the need for physical resources such as paper and ink and providing environmentally friendly digital alternatives.
Providing personalized services to users such as personalized reading recommendations, alerts for new material and access to specialized resources tailored to
 specific research interests or topics.
Supporting education and research by providing resources that can help students, researchers and academics access the information they need to succeed.
eLibrary is committed to ensuring that every user has a positive experience using our service.</div> 
 <div className="elements">Work with us </div> 
<div className="atributes">"eLibrary is open to everyone who wants to create a collaboration and partnership together to be more successful in achieving goals 
and providing the best services for clients. Partnership with others is very important to us, that's why we are very cooperative. 
The client has the possibility of donating various donations, whether money, old books or something else, and this would also help other
 users to have a collection of different books. Whoever wants to organize events, we are open to organize together to help users gain
  new knowledge. Partnership with others would help us to create new experiences and to offer users a wider range of services. 
  Anyone who wants to create a partnership with us or wants to donate can contact us through the data found in our application."</div>
 </div> 

  );
};

export default AboutPage; 