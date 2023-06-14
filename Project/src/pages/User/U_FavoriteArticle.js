import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar';
import UserNav from '../../components/userNav';
import Footer from '../../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom';

function U_FavoriteArticle() {
  const userId = JSON.parse(localStorage.getItem('userToken')) || '';
  const [Flist, setFlist] = useState([]);
  const userIdfix = userId.User;

  useEffect(() => {
    axios
      .get(`http://localhost:3001/user/FArticle/${userIdfix}`)
      .then((response) => {
        setFlist(response.data);
      })
      .catch(error => {
        console.log('Error retrieving Article:', error);
      });
  }, [userIdfix]);

  const deleteFavoriteArticle = async Article_ID => {
    try {
      await axios.delete(`http://localhost:3001/user/FArticle/F_Article_Delete/${Article_ID}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <NavBar />
      <UserNav />

      <div>U_FavoriteArticle</div>

      <div className="news-cont">
        {Flist.map(item => (
          <div key={item.Article_ID} className="news-part">
            <div className="news-image">
              <img src={item.Article_image} alt={item.title} />
            </div>
            <div className="news-title">
              <h2>{item.Article_title}</h2>
            </div>
            <div className="news-info">
              <p>{item.Article_type}</p>
            </div>
            <Link to={`/user/FavoriteArticle/U_EditFavoritArticle/${item.Article_ID}`} className='btn btn-primary'>Update</Link>
            <button className="btn btn-danger ms-2" onClick={() => deleteFavoriteArticle(item.Article_ID)}>
              X
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default U_FavoriteArticle;
