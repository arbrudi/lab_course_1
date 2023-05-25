import React from 'react';
import './pages_css/Homepage_style.css';
import ImageSlider from '../components/ImageSlider';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


function HomePage() {
    
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
        <div>
                <h1>Test slider 1
                  
             </h1>

             <table>
              <th>
             <div style={containerStyles}>
             <ImageSlider slides={slides} />
            </div>
              </th>
              <th>
              <div style={containerStyles}>
             <ImageSlider slides={slides} />
            </div>
              </th>
              <th>
              <div style={containerStyles}>
               <ImageSlider slides={slides} />
              </div>
              </th>
             </table>
       


       </div>
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