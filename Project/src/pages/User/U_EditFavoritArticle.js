import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function U_EditFavoriteArticle() {
  const { Article_ID } = useParams();
  const [newArticle, setNewArticle] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`http://localhost:3001/user/FArticle/F_Article_Update/${Article_ID}`, {
        Article_ID: Article_ID,
        newArticle: newArticle
      })
      .then(res => {
        console.log(res);
        navigate('/user/FavoriteArticle');
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className='container'>
      <div className='cont'>
        <form onSubmit={handleSubmit}>
          <h2>Article</h2>
          <div className='mb-2'>
            <label htmlFor='Article_image'>ID</label>
            <input
              type='text'
              placeholder='Enter ID'
              className='form-control'
              onChange={e => setNewArticle(e.target.value)}
            />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default U_EditFavoriteArticle;
