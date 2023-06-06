import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../Events/events.css";
function Createe() {
  const [Event_ID, setEvent_ID] = useState('');
  const [Event_image, setEvent_image] = useState('');
  const [Event_description, setEvent_description] = useState('');
  const [Event_date, setEvent_date] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post('http://localhost:3001/admin/events/createe', {
        Event_ID,
        Event_image,
        Event_description,
        Event_date,
      })
      .then((res) => {
        console.log(res);
        navigate('/admin/events');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="cont">
        <form onSubmit={handleSubmit}>
          <h2>Create Events</h2>
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
            <label htmlFor="Event_image">Image</label>
            <input
              type="url"
              id="Event_image"
              placeholder="Image"
              className="form-control"
              onChange={(e) => setEvent_image(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Event_description">Description</label>
            <input
              type="text"
              id="Event_description"
              placeholder="Description"
              className="form-control"
              onChange={(e) => setEvent_description(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Event_date">Date</label>
            <input
              type="date"
              id="Event_date"
              placeholder="Date"
              className="form-control"
              onChange={(e) => setEvent_date(e.target.value)}
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

export default Createe