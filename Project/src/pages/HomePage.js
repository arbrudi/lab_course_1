import React, {useEffect, useState }from 'react';
import './pages_css/Homepage_style.css';
import ImageSlider from '../components/ImageSlider';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom'; 
import './pages_css/Page.css'
function HomePage() {
    
  
  const [events, setEvents] = useState([]);

  useEffect(() => {
    Axios
      .get('http://localhost:3001/')
      .then((res) => setEvents(res.data))
      .catch((err) => console.log(err));
  }, []);
  const [User_ID, setUser_ID] = useState(''); 
  const {Event_ID} =useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    Axios
      .post(`http://localhost:3001/admin/events/${Event_ID}`, { User_ID })
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  }
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
 
  
  
return (
    <>
        <NavBar />
    <div className="App">
      <header className="App-header">
        <h1>E-Library</h1>
      </header>
      <main>
        <section className="hero">
          <h2>Welcome to the E-Library</h2>
          <p>Explore our vast collection of books, articles, and documents.</p>
          <a href="/login" className="btn-primary">Get Started</a>
        </section> 
        <div className=''>
      <div className=''>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              
              <th></th>
            </tr>
          </thead>
          <tbody>
            {events.map((data, i) => (
              <tr key={i}>
                <td className='image-cell'>
                  {data.Event_image && (
                    <img
                      src={data.Event_image}
                      alt='Event Image'
                      className='event-image'
                    />
                  )}
                </td> 
               <div className='element'> 
                <td className='title'>Description:</td>
                <td>{data.Event_description}</td> 
                <td className='title'>Date:{data.Event_date}</td> 
        <form onSubmit={handleSubmit}>
          <h2 className='t2'>Register
            <input 
  type="text"
  id="User_ID"
  placeholder="User_ID"
  className="btn"
  value={User_ID}
  onChange={(e) => setUser_ID(e.target.value)}
/></h2> 
          
          <button type="submit" className="btn btn-success">
            Update Event_participants 
          </button>
        </form> 
                </div>
              </tr>
            ))}
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


<h1>Slider 2</h1>
      





      </main>
    </div>



    <Footer />
        </>
  );
}

export default HomePage;