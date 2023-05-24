import {Link} from 'react-router-dom';
import React, { useState } from 'react';
import '../pages/pages_css/Register_style.css';
import Axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [user_role, setUser_role] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '' || surname === '' || user_role === '' || email === '' || username === '' || password === '') {
      alert('Please fill in all the fields');
    } else {
      Axios.post('http://localhost:3001/register', {
        name: name,
        surname: surname,
        user_role: user_role,
        email: email,
        username: username,
        password: password
      }).then(() => {
        console.log('Successful');
        window.location.href = '/login';
      });
    }
  };

  return (
    <div className='bg-img'>
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="register-heading">Register</h2>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            id="name" 
            className="form-control" 
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Surname</label>
          <input 
            type="text" 
            id="surname" 
            className="form-control" 
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="name" className="form-label">User Role</label>
          <input 
            type="text" 
            id="user_role" 
            className="form-control" 
            value={user_role}
            onChange={(event) => setUser_role(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input 
            type="text" 
            id="username" 
            className="form-control" 
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input 
            type="password" 
            id="password" 
            className="form-control" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
            required 
          />
        </div>
    
        <button type="submit" className="btn btn-primary">Register</button>
        <div className='go-to-login'> <Link to="/login">Login</Link></div>

      </form>
    </div>
    </div>
  );
}

export default Register;
