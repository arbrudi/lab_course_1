import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Events/events.css";
function Createbenefits() {
  const [Benefit_ID, setBenefit_ID] = useState('');
  const [Benefit_img, setBenefit_img] = useState('');
  const [Benefit_title, setBenefit_title] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:3001/admin/benefits/createbenefits', {
        Benefit_ID,
        Benefit_img,
        Benefit_title,
      })
      .then((res) => {
        console.log(res);
        navigate('/admin/benefits');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="cont">
        <form onSubmit={handleSubmit}>
          <h2>Create Benefits</h2>
          <div className="mb-2">
            <label htmlFor="Event_ID">ID</label>
            <input
              type="text"
              id="Benefit_ID"
              placeholder="Enter ID"
              className="form-control"
              onChange={(e) => setBenefit_ID(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Benefit_img">Image</label>
            <input
              type="url"
              id="Benefit_img"
              placeholder="Image"
              className="form-control"
              onChange={(e) => setBenefit_img(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Benefit_title">Title</label>
            <input
              type="text"
              id="Event_description"
              placeholder="Description"
              className="form-control"
              onChange={(e) => setBenefit_title(e.target.value)}
            />
          </div> 
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Createbenefits