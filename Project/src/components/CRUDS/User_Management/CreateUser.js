import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../User_Management/UM_style.css";

function CreateUser() {
  const [User_ID, setUser_ID] = useState('');
  const [Name, setName] = useState('');
  const [Surname, setSurname] = useState('');
  const [User_Role, setUser_Role] = useState('');
  const [Email, setEmail] = useState('');
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (!User_ID || !Name || !Surname || !User_Role || !Email || !Username || !Password) {
        setErrorMessage('Please fill in all fields');
        return;
      }
      setErrorMessage('');
    axios
      .post('http://localhost:3001/admin/user/create', {
        User_ID,
        Name,
        Surname,
        User_Role,
        Email,
        Username,
        Password
      })
      .then((res) => {
        console.log(res);
        navigate('/admin');
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="container">
      <div className="cont">
        <form onSubmit={handleSubmit}>
            
          <h2>Create User</h2>
          {errorMessage && <p className="error">{errorMessage}</p>}
          <div className="mb-2">
            <label htmlFor="User_ID">User_ID</label>
            <input
              type="text"
              id="User_ID"
              placeholder="Enter User ID"
              className="form-control"
              onChange={(e) => setUser_ID(e.target.value)}
            />
            
          </div>
          <div className="mb-2">
            <label htmlFor="Name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Name"
              className="form-control"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="Surnme">Surname</label>
            <input
              type="text"
              id="surname"
              placeholder="Surname"
              className="form-control"
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="User_role">User Role</label>
            <input
              type="text"
              id="name"
              placeholder="User Role"
              className="form-control"
              onChange={(e) => setUser_Role(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              id="Email"
              placeholder="Email"
              className="form-control"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="Username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Username"
              className="form-control"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-2">
            <label htmlFor="Password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Password"
              className="form-control"
              onChange={(e) => setPassword(e.target.value)}
            />
      </div>
          <button type="submit" className="btn-submit">
            Submit
          </button>

        
        </form>
      </div>
    </div>
  );
}

export default CreateUser;