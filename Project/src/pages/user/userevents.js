import AdminNav from '../../components/adminNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../pages/pages_css/admin_style.css";
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Link, useParams } from 'react-router-dom';
import "../../components/CRUDS/Events/events.css";
import UserNav from '../../components/userNav';

function Userevents() {
  const { User_ID } = useParams();
  const [event_participants, setEvent_participants] = useState([]);

   useEffect(() => {
  Axios.get(`http://localhost:3001/user/joinuser/${User_ID}`)
    .then(res => setEvent_participants(res.data))
    .catch(err => console.log(err));
}, [User_ID]);

  const handleDelete = async (Event_ID) => {
    try {
      await Axios.delete(`http://localhost:3001/admin/events/delete/${Event_ID}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <NavBar />
      <div className="admin_page">
        <div className="admin_nav">
          <UserNav />
        </div>
        <div className="App">
          <div className='users-list'>
            <Link to="/user/joinuser" className='btn'>
              <button className='btn-new-user rounded'>User_ID</button>
            </Link>
            <table className='users-table'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>User_ID</th>
                  <th>Event_image</th>
                  <th>Event_description</th>
                  <th>Event_date</th>
                  <th>Name</th>
                  <th>Surname</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {event_participants.map((data, i) => (
                  <tr key={i}>
                    <td>{data.Event_ID}</td>
                    <td>{data.User_ID}</td>
                    <td>
                      <img src={data.Event_image} alt="Event" />
                    </td>
                    <td>{data.Event_description}</td>
                    <td>{data.Event_date}</td>
                    <td>{data.Name}</td>
                    <td>{data.Surname}</td>
                    <td>
                      <button onClick={() => handleDelete(data.Event_ID)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Userevents;