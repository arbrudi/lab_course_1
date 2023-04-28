import React from 'react';
import './pages_css/Homepage_style.css';
import { Carousel } from 'react-bootstrap';

function HomePage() {
    return (
        <div className="home-container">
            <h1>Welcome to the e-Library!</h1>
            <p>Here, you can browse through our collection of books, articles, and other resources.</p>
            <div className="search-bar">
                <input type="text" placeholder="Search for a book or article" />
                <button>Search</button>
            </div>
            <div className="featured-books">
                <h2>Featured Books</h2>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/20x30"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Book Title</h3>
                            <p>Author Name</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/200x300"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Book Title</h3>
                            <p>Author Name</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/200x300"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Book Title</h3>
                            <p>Author Name</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="categories">
                <h2>Browse by Category</h2>
                <Carousel>
                    <Carousel.Item>
                        <div className="category-card">
                            <img src="https://via.placeholder.com/100" alt="Category Image" />
                            <h3>Category Name</h3>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="category-card">
                            <img src="https://via.placeholder.com/100" alt="Category Image" />
                            <h3>Category Name</h3>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="category-card">
                            <img src="https://via.placeholder.com/100" alt="Category Image" />
                            <h3>Category Name</h3>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default HomePage;