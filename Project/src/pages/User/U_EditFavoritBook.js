import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function U_EditFavoriteBook() {
  const { ISBN } = useParams();
  const [newBook, setNewBook] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`http://localhost:3001/user/FBook/F_Book_Update/${ISBN}`, {
        ISBN: ISBN,
        newBook: newBook
      })
      .then(res => {
        console.log(res);
        navigate('/user/FavoriteBook');
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <div className='container'>
      <div className='cont'>
        <form onSubmit={handleSubmit}>
          <h2>Book</h2>
          <div className='mb-2'>
            <label htmlFor='Article_image'>ID</label>
            <input
              type='text'
              placeholder='Enter ID'
              className='form-control'
              onChange={e => setNewBook(e.target.value)}
            />
          </div>
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default U_EditFavoriteBook;
