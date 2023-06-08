import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

function Joinevent() {
  const [User_ID, setUser_ID] = useState(''); 
  const {Event_ID} =useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`http://localhost:3001/joinevent/${Event_ID}`, { User_ID })
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  }
  

  return (
    <div className="conatiner">
      <div className="cont">
        <form onSubmit={handleSubmit}>
          <h2>Update Events participants</h2>
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
            Update Event_participants 
          </button>
        </form>
      </div>
    </div>
  );
}

export default Joinevent