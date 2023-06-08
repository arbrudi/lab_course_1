import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import './NewsList_style.css'
import { Link } from 'react-router-dom';

    const Articlelist = ()=> {
        const [Alist, setAlist] = useState([]);

        useEffect(() => {
          fetch('http://localhost:3001/admin/articles')
            .then(response => response.json())
            .then(data => {
              setAlist(data);
            })
            .catch(error => {
              console.log('Error retrieving Article:', error);
            });
        }, []);
      
        return (
            <div>
                <NavBar />
            <h1>Article</h1>
            <div className="news-cont">
              {Alist.map(item => (
                <div key={item.Article_ID} className="news-part">
                  <div className="news-image">
                    <img src={item.Article_image} alt={item.title} />
                  </div>
                  <div className="news-title">
                    <h2>{item.Article_title}</h2>
                  </div>
                  <div className="news-info">
                    <p>{item.Article_type}</p>
          
                    <Link to={`/Articlelist/articles/${item.Article_ID}`} className='read_more'>
                Read more...
              </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      };
      


    export default Articlelist;