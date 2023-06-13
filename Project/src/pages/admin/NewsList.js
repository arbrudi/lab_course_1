import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import './NewsList_style.css'
import { Link } from 'react-router-dom';

    const NewsList = ()=> {
        const [news, setNews] = useState([]);

        useEffect(() => {
          fetch('http://localhost:3001/admin/news')
            .then(response => response.json())
            .then(data => {
              setNews(data);
            })
            .catch(error => {
              console.log('Error retrieving news:', error);
            });
        }, []);
      
        return (
            <div>
                <NavBar />
            <h1>News List</h1>
            <div className="news-cont">
              {news.map(item => (
                <div key={item.News_ID} className="news-part">
                  <div className="news-image">
                    <img src={item.News_image} alt={item.title} />
                  </div>
                  <div className="news-title">
                    <h2>{item.News_title}</h2>
                  </div>
                  <div className="news-info">
                    <p>{item.Publishing_date}</p>
                    <p>{item.News_tags}</p>
                    
                    <Link to={`/newsList/news/${item.News_ID}`} className='read_more'>
                Read more...
              </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      };
      


    export default NewsList;