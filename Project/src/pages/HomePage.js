import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';  
import './pages_css/Homepage_style.css';
import ImageSlider from '../components/ImageSlider';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Axios from 'axios'; 





function HomePage() {
    
  
  const [events, setEvents] = useState([]);

  useEffect(() => {
    Axios
      .get('http://localhost:3001/')
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);
    const slides = [
      { url: "http://localhost:3000/image-1.jpg", title: "beach" },
      { url: "http://localhost:3000/image-2.jpg", title: "boat" },
      { url: "http://localhost:3000/image-3.jpg", title: "forest" },
      { url: "http://localhost:3000/image-4.jpg", title: "city" },
      { url: "http://localhost:3000/image-5.jpg", title: "italy" },
    ];

    const containerStyles = {
      width: "500px",
      height: "280px",
      margin: "0 auto",
    };
 

    const[reviews,setReviews] = useState([]);

    useEffect (()=>{
      Axios.get('http://localhost:3001/admin/reviews')
      .then((res)=>setReviews(res.data))
      .catch((err)=>console.log(err));
    },[]);

    if (!reviews) {
      return <div>Loading...</div>;
    }
  
return (
    <>
        <NavBar />
    <div className="App">
      <header className="App-header">
        <h1>E-Library</h1>
      </header>
      <main>
        <section className="hero">
          <div className='h-hero'>
          <h2>Welcome to the E-Library</h2>
          <p>Explore our vast collection of books, articles, and documents.</p>
          <a href="/login" className="btn-primary">Get Started</a>
          </div>
        </section> 
        <div className=''>
      <div className=''>
        <table className='table'>
        
      
       
         
          <tbody> 
           
          
         <div className='events'>
  {events.map((data, i) => (
    <div key={i} className="event-card">
      <div className="event-image-container">
      <div className="event-image-container">
  {data.Event_image && (
    <img
      src={data.Event_image}
      alt="Event Image"
      className="event-image style"
    />
  )}
</div> 
      </div>
      <div className="event-info">
      <p><span className="info">Description:</span></p>
  <p>{data.Event_description}</p>
  <p ><span className='info'>Data:</span></p>
  <p>{data.Event_date}</p>
  <Link to={`/joinevent/${data.Event_ID}`} className="btn">
    <button className="btn-update rounded">Register</button>
  </Link>
</div>
</div>
  ))}</div>


          </tbody>
        </table>
    
    
      </div> 
      </div>

      <div>
                <h1>Test slider 1
                  
             </h1>

             <div>
        <h1>ImageSlider</h1>
        <div style={containerStyles}>
          <ImageSlider slides={slides} parentWidth={500} />
        </div>
      </div>
     </div>
       <br></br>
        <section className="featured-books">
          <h3>Featured Books</h3>
          <div className="book-list">
            <div className="book-card">
              <img src="book1.jpg" alt="Book Cover" />
              <h4>Book Title</h4>
              <p>Author Name</p>
            </div>
            <div className="book-card">
              <img src="book2.jpg" alt="Book Cover" />
              <h4>Book Title</h4>
              <p>Author Name</p>
            </div>
            <div className="book-card">
              <img src="book3.jpg" alt="Book Cover" />
              <h4>Book Title</h4>
              <p>Author Name</p>
            </div>
          </div>
        </section>

        <section>
        <h1 id='review_h1'> Reviews Section</h1>
          <div className='rev_slider'>
            <div className='rev_cont'>
            {reviews.map(item => (
                <div key={item.Reviews_ID} className='rev_n_s'>
                <p>{item.Reviewer_Name}</p>
                <p>{item.Reviewer_Surname}</p>
                
                  <div className='rev_comm'>
                  <p>{item.Reviews_Comment}</p>
                </div>
            </div>
            ))}
          </div>
          </div>
        </section>

      </main>
    </div>
    <Footer />
        </>
  );
}

export default HomePage;