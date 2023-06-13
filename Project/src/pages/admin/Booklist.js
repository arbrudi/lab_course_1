import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import './NewsList_style.css'
import { Link } from 'react-router-dom';

function Booklist() {
    const [Blist, setBlist] = useState([]);

    useEffect(() => {
      fetch('http://localhost:3001/admin/books')
        .then(response => response.json())
        .then(data => {
          setBlist(data);
        })
        .catch(error => {
          console.log('Error retrieving Books:', error);
        });
    }, []);

  return (
    <div>
        <NavBar />
    <h1>Book List</h1>
    <div className="news-cont">
      {Blist.map(item => (
        <div key={item.ISBN} className="news-part">
          <div className="news-image">
            <img src={item.Book_image} alt={item.title} />
          </div>
          <div className="news-title">
            <h2>{item.Book_title}</h2>
          </div>
          <div className="news-info">
            <p>{item.Book_genre}</p>
  
            <Link to={`/BookList/books/${item.ISBN}`} className='read_more'>
            
        Read more...
      </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);
}

export default Booklist
