import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import UserNav from '../../components/userNav';
import Footer from '../../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function U_FavoriteBook() {
  const userId = JSON.parse(localStorage.getItem('userToken')) || '';
  const [Blist, setBlist] = useState([]);
  const userIdfix = userId.User;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/FBook/${userIdfix}`)
      .then((response) => {
        setBlist(response.data);
      })
      .catch(error => {
        console.log('Error retrieving Article:', error);
      });
  }, [userIdfix]);

  const deleteFavoriteBook = async ISBN => {
    try {
      await axios.delete(`http://localhost:3001/user/FBook/F_Book_Delete/${ISBN}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar />
      <UserNav />

      <div>U_FavoriteBook</div>

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
            </div>
            <Link to={`/user/FavoriteArticle/U_EditFavoritBook/${item.ISBN}`} className='btn btn-primary'>Update</Link>
            <button className="btn btn-danger ms-2" onClick={() => deleteFavoriteBook(item.ISBN)}>
              X
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default U_FavoriteBook;
