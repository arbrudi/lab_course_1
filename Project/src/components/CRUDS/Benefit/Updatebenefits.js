import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';
import "../Events/events.css";
function Updatebenefits() {
  const [Benefit_img, setBenefit_img] = useState('');
  const [Benefit_title, setBenefit_title] = useState('');
  const {Benefit_ID} =useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put(`http://localhost:3001/admin/benefits/updatebenefits/${Benefit_ID}`, {
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
          <h2>Update Benefits</h2>
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
            <label htmlFor="Benefit_title">Description</label>
            <input
              type="text"
              id="Benefit_title"
              placeholder="Description"
              className="form-control"
              onChange={(e) => setBenefit_title(e.target.value)}
            />
          </div> 
          <button type="submit" className="btn btn-success">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}

export default Updatebenefits