import AdminNav from "../components/adminNav";
import 'bootstrap/dist/css/bootstrap.min.css'
import "../pages/pages_css/admin_style.css"
import Axios from 'axios';
import React, {useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'; 
import {Link} from 'react-router-dom';


//Arbi
const AdminDashboard = ()=> {
  const [User, setUsers] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/admin/user')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);
  
const handleDeleteU =async (User_ID)=>{
  try{
    await Axios.delete(`http://localhost:3001/admin/user/delete/${User_ID}`) 
    window.location.reload() 
  } catch(err){
    console.log(err);
  }
}
    //Riona  
    const [events, setEvents] = useState([]);

    useEffect(() => {
      Axios.get('http://localhost:3001/')
        .then(res => setEvents(res.data))
        .catch(err => console.log(err));
    }, []);
  const handleDelete =async (Event_ID)=>{
    try{
      await Axios.delete('http://localhost:3001/events/'+Event_ID) 
      window.location.reload() 
    } catch(err){
      console.log(err);
    }
  }









const [count, setCount] = useState(null);

  useEffect(() => {
   
    fetch('http://localhost:3001/admin')
      .then(response => response.json())
      .then(data => setCount(data.count))
      .catch(error => console.error(error));
  }, []);


  const [booksCount, setBooksCount] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:3001/admin/books/count')
      .then(res => {
        setBooksCount(res.data.count);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  const [articlesCount, setArticlesCount] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:3001/admin/articles/count')
      .then(res => {
        setArticlesCount(res.data.count);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  const [EventsCount, setEventsCount] = useState(null);

  useEffect(() => {
    Axios.get('http://localhost:3001/admin/events/count')
      .then(res => {
        setEventsCount(res.data.count);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

    return (
     <>
     <NavBar />
      <div className="admin_page">
      <div className="admin_nav">
      <AdminNav />
    </div>
    <div className="test">

        <div className="User-count">
        {count !== null ? (
          <div className="count-box">
        <p className="user-count-text">Total number of users: {count}</p>
        </div>
      ) : (
        <div className="loading-box">
        <p className="loading-text">Loading...</p>
        </div>
      )}

      <div>
      {booksCount !== null ? (
         <div className="count-box">
        <p className="user-count-text">Total number of books: {booksCount}</p>
        </div>
      ) : (
        <div className="loading-box">
        <p className="loading-text">Loading...</p>
        </div>
      )}
      </div>

      <div>
      {articlesCount !== null ? (
         <div className="count-box">
        <p className="user-count-text">Total number of articles: {articlesCount}</p>
        </div>
      ) : (
        <div className="loading-box">
        <p className="loading-text">Loading...</p>
        </div>
      )}
      </div>

      <div>
      {EventsCount !== null ? (
         <div className="count-box">
        <p className="user-count-text">Total number of events: {EventsCount}</p>
        </div>
      ) : (
        <div className="loading-box">
        <p className="loading-text">Loading...</p>
        </div>
      )}
      </div>
     
    
        </div>
        <div className="users-list">
        <Link to="/admin/user/create" className='btn'>
          <button className='btn-new-user rounded'>Create New User</button>
        </Link>
          <table className="user-table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Surname</th>
                <th>User Role</th>
                <th>Email</th>
                <th>Username</th>
                <th>Password</th>
                <th>Action</th>
                
              </tr>
            </thead>
            <tbody>
            {User.map((data, i) => (
              <tr key={i}>
                <td>{data.User_ID}</td>
                <td>{data.Name }</td>
                <td>{data.Surname }</td>
                <td>{data.User_Role}</td>
                <td>{data.Email}</td> 
                <td>{data.Username}</td> 
                <td>{data.Password}</td> 
                <td className="buttons_user">
                <Link to={`user/update/${data.User_ID}`} className='btn'>
                    <button className='btn-update rounded'>Update</button>
                  </Link>
                  <button className='btn-delete rounded'onClick={e => handleDeleteU(data.User_ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
         
    </div>
   
    <div className="App">
      <div className='users-list'>
      <Link to="/create" className='btn'>
          <button className='btn'>Create</button>
        </Link>
        <table className='users-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Description</th>
              <th>Date</th> 
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((data, i) => (
              <tr key={i}>
                <td>{data.Event_ID}</td>
                <td>
                  {data.Event_image && (
                    <img
                    src={data.Event_image}
                      alt='Event Image'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  )}
                </td>
                <td>{data.Event_description}</td>
                <td>{data.Event_date}</td> 
                <td>
                <Link to={`/update/${data.Event_ID}`} className='btn'>
                    <button className='btn'>Update</button>
                  </Link>
                  <button className='btn 'onClick={e => handleDelete(data.Event_ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    

      </div>
  

</div>
{/* LEKA */}

  
</div>


<Footer />

      </>
    );
  }
   

export default AdminDashboard;