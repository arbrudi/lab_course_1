import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/pages_css/Login_style.css';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const loginUser = () => {
    Axios.post('http://localhost:3001/login', {
      email: email,
      password: password
    }).then((response) => {
      if (response.data.role === 'user') {
        // Redirect to user dashboard
        navigate('/user',{replace:true})
        localStorage.setItem("userToken", JSON.stringify({
          role : "user",
          token : response.data.token
        }))
        window.location.reload()
      } else if (response.data.role === 'admin') {
        // Redirect to admin dashboard
        navigate('/admin',{replace:true})
        localStorage.setItem("adminToken", JSON.stringify({
          role : "admin",
          token : response.data.token
        }))
        window.location.reload()
      }
    }).catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className='bg-image'>
    <div className="login-container">
      <form className="login-form">
        <h2 className="login-heading">Login</h2>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            id="email" 
            className="form-control" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} 
            required 
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
        <button type="submit" className="btn-login" onClick={(event) => {event.preventDefault(); loginUser();}}>Login</button>
        <div className='go-to-register'><Link to="/register">Register</Link></div> 
      </form>  
    </div>
    
    </div>
  );
}

export default Login;