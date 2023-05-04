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
    //Riona  
  const [Event_ID, setEvent_ID] = useState(''); 
  const [Event_image, setEvent_image] = useState(''); 
  const [Event_description, setEvent_description] = useState(''); 
  const [Event_date, setEvent_date] = useState(''); 
  const [eventlist,seteventlist]=useState([]); 

  const [newEvent_description,setNewEvent_description]=useState([]) 
  const [newEvent_image,setNewEvent_image]=useState([]) 
  const [newEvent_date,setNewEvent_date]=useState([]) 


  const addEvent = () => {
    Axios.post('http://localhost:3001/admin/event/create',{
      Event_ID: Event_ID, 
      Event_image: Event_image, 
      Event_description: Event_description, 
      Event_date: Event_date
    }) 
    .then(() => {
      seteventlist([...eventlist,{Event_ID: Event_ID, 
        Event_image: Event_image, 
        Event_description: Event_description, 
        Event_date: Event_date, 
      }, 
    ])
    });
  }; 
  const getEvent =()=>{ Axios.get('http://localhost:3001/admin/event')

  .then((response) => {
   seteventlist(response.data)
    
  }) 
} 
const updateEvent=(Event_ID)=>{
  Axios.put("http://localhost:3001/admin/event/update",{Event_description:newEvent_description,Event_ID:Event_ID,Event_image:newEvent_image,Event_date:newEvent_date}).then((response)=>{ 

  seteventlist(eventlist.map((val)=>{
    return val.Event_ID==Event_ID ? {Event_ID: Event_ID, Event_image:newEvent_image,Event_description:newEvent_description,Event_date:newEvent_date} : val 
  }) 
  )
  
  })}  

  
 const deleteEvent =(Event_ID)=>{
    Axios.delete(`http://localhost:3001/admin/event/delete/${Event_ID}`).then((response)=>{
      seteventlist(eventlist.filter((val)=>{
        return val.Event_ID!=Event_ID
      }))
    })
  } 

    return (
     <>
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
      <div className="App"> 
        <div className="users-table">
          <label>Id:</label>
          <input 
            type="text"
            onChange={(event) => { 
              setEvent_ID(event.target.value);
            }}
          /> 
          <label>Images:</label>
          <input 
            type="url" 
            onChange={(event) => { 
              setEvent_image(event.target.value);
            }}
          /> 
          <label>Description:</label>
          <input 
            type="text"
            onChange={(event) => { 
              setEvent_description(event.target.value);
            }}
          /> 
          <label>Date:</label> 
          <input 
            type="date" 
            onChange={(event) => { 
              setEvent_date(event.target.value);
            }}
          /> 
          <button onClick={addEvent}>Add Event</button> 
        </div> 
        <div className="e">
        <button onClick={getEvent}>Show Events</button> 
        {eventlist.map((val,key)=>{
          return (<div className="a"> 
          <div>
            <h3> Event id:{val.Event_ID}</h3> 
            <img src={val.Event_image} alt="event" />
       <h3>Descrition:{val.Event_description}</h3> 
           <h3>Date:{val.Event_date}</h3> 
           </div> 
           <div> 
            <input type="text" 
            placeholder="2000..." 
            onChange={(event) => { 
              setNewEvent_description(event.target.value) 
              
            }}/> 
            <input type="url" 
            placeholder="2000..." 
            onChange={(event) => { 
              setNewEvent_image(event.target.value) 
              
            }}/>
            <input type="date" 
            placeholder="2000..." 
            onChange={(event) => { 
              setNewEvent_date(event.target.value) 
              
            }}/>
           <button onClick={()=>{updateEvent
             (val.Event_ID)}}>Update </button>  
             
               
             <button onClick={()=>{deleteEvent
            (val.Event_ID)}
            }>Delete</button> 
           </div> 
          </div> 
          )
        })} 
        </div>
      </div>
      </>
    );
  }
   

export default AdminDashboard;