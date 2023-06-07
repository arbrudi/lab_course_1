import React, { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Createparticipants() {
  const [Event_ID, setEvent_ID] = useState('');
  const [User_ID, setUser_ID] = useState(''); 
  const navigate = useNavigate();



  const [events, setEvents] = useState([]); 
  useEffect(() => {
    axios.get('http://localhost:3001/')
      .then(res => setEvents(res.data))
      .catch(err => console.log(err));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:3001/admin/events/createparticipants', {
        Event_ID,
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
          <h2>Create Event_participants </h2>
          <div className="mb-2">
            <label htmlFor="Event_ID">ID</label>
            <input
              type="text"
              id="Event_ID"
              placeholder="Enter ID"
              className="form-control"
              onChange={(e) => setEvent_ID(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="User_ID">User_ID</label>
            <input
              type="text"
              id="User_ID"
              placeholder="User_ID"
              className="form-control"
              onChange={(e) => setUser_ID(e.target.value)}
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

export default Createparticipants