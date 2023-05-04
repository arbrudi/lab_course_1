import AdminNav from "../components/adminNav";
import "../pages/pages_css/admin_style.css"
import Axios from 'axios';
import React, { useState } from 'react';

const AdminDashboard = ()=> {
    const [userList, setUserList] = useState([]);
    const [newName, setNewName] = useState('');
    const [newSurname, setNewSurname] = useState('');
    const [newUser_Role, setNewUser_Role] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
  
    const getUsers = () => {
        Axios.get('http://localhost:3001/admin/users').then((response) => {
          console.log(response);
          setUserList(response.data);
        });
      };

    const updateUser = (User_ID) => {
      Axios.put('http://localhost:3001/admin/users/update', {
        Name: newName,
        Surname: newSurname,
        User_Role:newUser_Role,
        Email:newEmail,
        Username: newUsername,
        Password: newPassword,
        User_ID:User_ID
      }).then((response) => {
        console.log(response)
        setUserList(userList.map((val)=>{
          return val.User_ID === User_ID ? {User_ID: val.User_ID, Name:newName, Surname: newSurname, User_Role: newUser_Role, Email: newEmail, Username: newUsername, Password: newPassword}: val
        }))
      });
    };
    
    const deleteUser = (User_ID)=>{
      Axios.delete(`http://localhost:3001/admin/users/delete/${User_ID}`).then((response)=>{
       setUserList(userList.filter((val)=>{
        return val.User_ID != User_ID;
       }))
      })
    }
  
    return (
     
      <div className="App">
    
        <div className="users-list">
     
          <button onClick={getUsers}>Users</button>
          
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
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {userList.map((val,key) => ( 
                <tr key={val.key}>
                  <td>{val.User_ID}</td>
                  <td>{val.Name}</td>
                  <td>{val.Surname}</td>
                  <td>{val.User_Role}</td>
                  <td>{val.Email}</td>
                  <td>{val.Username}</td>
                  <td>{val.Password}</td>
                  <td>
                <input placeholder ="Name" defaultValue={val.Name} onChange={(event) => setNewName(event.target.value)} />
                <input placeholder ="Surname" defaultValue={val.Surname} onChange={(event) => setNewSurname(event.target.value)} />
                <input placeholder ="User Role" defaultValue={val.User_Role} onChange={(event) => setNewUser_Role(event.target.value)} />
                <input placeholder ="Email" defaultValue={val.Email} onChange={(event) => setNewEmail(event.target.value)} />
                <input placeholder ="Username" defaultValue={val.Username} onChange={(event) => setNewUsername(event.target.value)} />
                <input placeholder ="Password" defaultValue={val.Password} onChange={(event) => setNewPassword(event.target.value)} />
        
                    <button variant="primary" onClick={() =>{updateUser(val.User_ID)} }>
                      Edit
                    </button>
                  </td>
                  <td><button onClick={()=>{deleteUser(val.User_ID)}}>Delete</button></td>
                </tr>
                ))}
            </tbody>
          </table>
         
    </div>
    </div>
    
    );  
    }

export default AdminDashboard;