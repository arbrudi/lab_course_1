import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

function Updateparticipants() {
  const [User_ID, setUser_ID] = useState(''); 
  const {Event_ID} =useParams();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .put('http://localhost:3001/admin/events/Updateparticipants/'+Event_ID, {
        User_ID, 
      })
      .then((res) => {
        console.log(res);
        navigate('/');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
      <div className="w-50 bg-white rounded p-3">
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

export default Updateparticipants