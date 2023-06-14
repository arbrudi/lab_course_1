import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Joinuser() {
  const [User_ID, setUser_ID] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/userevents/${User_ID}`);
  }

  return (
    <div className="container">
      <div className="cont">
        <form onSubmit={handleSubmit}>
          <h2>Events</h2>
          <div className="mb-2">
            <label htmlFor="User_ID">User_ID</label>
            <input
              type="text"
              id="User_ID"
              placeholder="User_ID"
              className="form-control"
              value={User_ID}
              onChange={(e) => setUser_ID(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Show events
          </button>
        </form>
      </div>
    </div>
  );
}

export default Joinuser;