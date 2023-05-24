import AdminNav from "../components/adminNav";
import "../pages/pages_css/admin_style.css"
import Axios from 'axios';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


//Arbi
const AdminDashboard = ()=> {
    const [userList, setUserList] = useState([]);
    const [newName, setNewName] = useState('');
    const [newSurname, setNewSurname] = useState('');
    const [newUser_Role, setNewUser_Role] = useState('');
    const [newEmail, setNewEmail] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [user_role, setUser_role] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[User_ID, setUser_ID] = useState();


  {/* Comment */}
  const handleSubmit = (event) => {
    event.preventDefault();
    if (name === '' || surname === '' || user_role === '' || email === '' || username === '' || password === '') {
      alert('Please fill in all the fields');
    } else {
      Axios.post('http://localhost:3001/admin/users/create', {
        name: name,
        surname: surname,
        user_role: user_role,
        email: email,
        username: username,
        password: password,
        User_ID: User_ID
      }).then(() => {
        console.log('Successful');
        alert("User Registered! Refresh the page or press the Users' button again!")
      });
    }
  };
  
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
  //erisi
  const [Article_ID, setArticle_ID] = useState("");
  const [Article_image	, setArticle_image	] = useState("");
  const [Article_title, setArticle_title] = useState("");
  const [Article_type, setArticle_type] = useState("");
  const [Article_Description, setArticle_Description] = useState("");
  const [Article_list, setArticle_list] = useState([]);

  const [newArticle_image, setNewArticle_image] = useState("");
  const [newArticle_title, setNewArticle_title] = useState("");
  const [newArticle_type, setNewArticle_type] = useState("");
  const [newArticle_Description, setNewArticle_Description] = useState("");

  const addArticle = () => {
    Axios.post('http://localhost:3001/admin/articles/create', {
      Article_ID: Article_ID,
      Article_image	: Article_image	,
      Article_title: Article_title,
      Article_type: Article_type,

      Article_Description: Article_Description
    }).then(() => {
      setArticle_list([...Article_list, {
        Article_ID: Article_ID,
        Article_image	: Article_image	,
        Article_title: Article_title,
        Article_type: Article_type,
        Article_Description: Article_Description
      }]);
    });
  };

  const getArticle = () => {
    Axios.get("http://localhost:3001/admin/articles").then((response) => {
      setArticle_list(response.data);
    });
  };


 const updateAllArticles= (Article_ID) => {
    Axios.put("http://localhost:3001/admin/articles/update", { 
      Article_image	 :newArticle_image	,
      Article_title :newArticle_title,
      Article_type :newArticle_type,
      Article_Description:newArticle_Description,
      Article_ID: Article_ID }).then(
      (response) => {
      setArticle_list(Article_list.map((val)=>{

      return val.Article_ID=== Article_ID ?
       {
        Article_image	 :newArticle_image	,
        Article_title :newArticle_title,
        Article_type :newArticle_type,
        Article_Description:newArticle_Description
      }:val
      }));
    }   
  );
};






const deletearticles =(Article_ID) =>{
  Axios.delete(`http://localhost:3001/admin/articles/delete/${Article_ID}`).then((response) => {
 
     setArticle_list(Article_list.filter((val)=>{

  return  val.Article_ID !== Article_ID;
 
     }))
   
  })
};

{/*Leka */}

const [ISBN, setISBN] = useState()
const [Book_image, setBook_image] = useState('')
const [Book_title, setBook_title] = useState('')
const [Book_author, setBook_author] = useState('')
const [Book_genre, setBook_genre] = useState('')
const [Book_description, setBook_description] = useState('')

const [newBook_description, setNewBook_description] = useState('')
const [newBook_image, setnewBook_image] = useState('')
const [newBook_title, setnewBook_title] = useState('')
const [newBook_author, setnewBook_author] = useState('')
const [newBook_genre, setnewBook_genre] = useState('')



const [booksList, setbooksList] = useState([]);

const addbooks = () => {
  Axios.post("http://localhost:3001/admin/books/create", {
    ISBN:ISBN,
    Book_image: Book_image,
    Book_title: Book_title,
    Book_author: Book_author,
    Book_genre: Book_genre,
    Book_description: Book_description
  }).then(() => {
    setbooksList([
      ...booksList, 
      {
        ISBN: ISBN,
        Book_image: Book_image,
        Book_title: Book_title,
        Book_author: Book_author,
        Book_genre: Book_genre,
        Book_description: Book_description
      }
    ]);
  });
};

const getbooks = () => {
  Axios.get("http://localhost:3001/admin/books/").then((response) => {
    console.log(response);
    setbooksList(response.data);
  });
};

const updateAll_books = (ISBN) => {
  Axios.put("http://localhost:3001/admin/books/update" ,{
     Book_description: newBook_description, 
      ISBN: ISBN  ,
     Book_image: newBook_image
  , Book_author: newBook_author
  , Book_title: newBook_title
  , Book_genre: newBook_genre }).then(
    (response) => {
      setbooksList(booksList.map((val)=> {
        return val.ISBN === ISBN ? 
        {ISBN: val.ISBN, 
          Book_image: newBook_image
          , Book_author: newBook_author
          , Book_title: newBook_title
          , Book_genre: newBook_genre
          , Book_description: newBook_description} : val
      }))
    }
  );
};

const deletebooks = (ISBN) => {
  Axios.delete(`http://localhost:3001/admin/books/delete/${ISBN}`).then((response)=> {
    setbooksList(booksList.filter((val)=> {
      return val.ISBN !== ISBN;
    }))
  })
};


    return (
     <>
     <NavBar />
      <div className="admin_page">
      <div className="admin_nav">
      <AdminNav />
    </div>
    <div className="test">
        <div className="users-list">
     
          <button onClick={getUsers}>Users</button>
          <div className="users-table">
          <label>User_ID</label>
          <input 
            type="number"
            onChange={(event) => { 
              setUser_ID(event.target.value);
            }}
          /> 
          <label>Name</label>
          <input 
            type="text" 
            onChange={(event) => { 
              setName(event.target.value);
            }}
          /> 
          <label>Surname:</label>
          <input 
            type="text"
            onChange={(event) => { 
              setSurname(event.target.value);
            }}
          /> 
             <label>User Role:</label>
          <input 
            type="text"
            onChange={(event) => { 
              setUser_role(event.target.value);
            }}
          /> 
             <label>Email:</label>
          <input 
            type="email"
            onChange={(event) => { 
              setEmail(event.target.value);
            }}
          /> 
             <label>Username:</label>
          <input 
            type="text"
            onChange={(event) => { 
              setUsername(event.target.value);
            }}
          /> 
             <label>Password:</label>
          <input 
            type="password"
            onChange={(event) => { 
              setPassword(event.target.value);
            }}
          /> 
         
          <button onClick={handleSubmit}>Create New User</button> 
        </div> 
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

{/*eris */}
      </div>
      <div className='information'>

      <label>ID	</label> 
        <input type='text' onChange={(event) => {setArticle_ID	(event.target.value)} } />

        <label>Image	</label> 
        <input type='text' onChange={(event) => {setArticle_image	(event.target.value)} } />

        <label>Title</label>
        <input type='text' onChange={(event) => {setArticle_title(event.target.value)} } />

        <label>Type</label>
        <input type='url' onChange={(event) => {setArticle_type(event.target.value)} }/>



        <label>Description (year)</label>
        <input type='text' onChange={(event) => {setArticle_Description(event.target.value)} } />

        <button onClick={addArticle} >Add Article</button>
      </div>

      <div className="Articles">
        <button onClick={getArticle}>Show Articles</button>
        
        {Article_list.map((val, key) => {
          return (
            <div className="Article" key={key}>
              <div>
                <h3>ID	: {val.Article_ID	}</h3> 
                <img src={val.Article_image} alt="event" />  
                <h3>Title: {val.Article_title}</h3>
                <h3>Type: {val.Article_type}</h3>

                <h3>Description: {val.Article_Description}</h3>
              </div>
              <div>
           

                
                <input
                  type="url"
                  placeholder="Img"
                  onChange={(event) => {
                    setNewArticle_image(event.target.value);
                  }}
                />
                  <input
                  type="text"
                  placeholder="Title"
                  onChange={(event) => {
                    setNewArticle_title(event.target.value);
                  }}
                />
                  <input
                  type="text"
                  placeholder="Type"
                  onChange={(event) => {
                    setNewArticle_type(event.target.value);
                  }}
                />
                  <input
                  type="text"
                  placeholder="Description"
                  onChange={(event) => {
                    setNewArticle_Description(event.target.value);
                  }}
                />

                <button
                  onClick={() => {
                    updateAllArticles(val.Article_ID);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button onClick={()=>(deletearticles(val.Article_ID))}>Delete</button>
              </div>
            </div>
          );
        })}
</div>
{/* LEKA */}
<div className="information">
      <label>ISBN:</label>
        <input type="number"
          onChange={(event) => {
            setISBN(event.target.value);
          }} />
        <label>Book_image:</label>
        <input type="url"
          onChange={(event) => {
            setBook_image(event.target.value);
          }} />
        <label>Book_title:</label>
        <input type="text"
          onChange={(event) => {
            setBook_title(event.target.value);
          }} />
        <label>Book_author:</label>
        <input type="text"
          onChange={(event) => {
            setBook_author(event.target.value);
          }} />
        <label>Book_genre:</label>
        <input type="text"
          onChange={(event) => {
            setBook_genre(event.target.value);
          }} />
        <label>Book_description:</label>
        <input type="text"
          onChange={(event) => {
            setBook_description(event.target.value);
          }} />
        <button onClick={addbooks}>Add books</button> 
        <button onClick={getbooks}>Show books</button>
      </div>

      <div className="books">
       

        {booksList.map((val, key) => {
          return (
            <div className="book" key={key}>
              <div>
              <h3>ISBN: {val.ISBN}</h3>  
              <img src={val.Book_image} alt="event" />
              <h3>Book_title: {val.Book_title}</h3>
              <h3>Book_author: {val.Book_author}</h3>
              <h3>Book_genre: {val.Book_genre}</h3>
              <h3>Book_description: {val.Book_description}</h3>
              </div>
            <div>
              {" "}
              <input 
              type="text" 
              placeholder="2000..." 
              onChange={(event) => {
               setnewBook_image(event.target.value);
              }} 
            />
            <input 
              type="text" 
              placeholder="2000..." 
              onChange={(event) => {
               setnewBook_title(event.target.value);
              }} 
            />
            <input 
              type="text" 
              placeholder="2000..." 
              onChange={(event) => {
               setnewBook_author(event.target.value);
              }} 
            />
            <input 
              type="text" 
              placeholder="2000..." 
              onChange={(event) => {
               setnewBook_genre(event.target.value);
              }} 
            />
            <input 
              type="text" 
              placeholder="2000..." 
              onChange={(event) => {
               setNewBook_description(event.target.value);
              }} 
            />

              <button onClick={() => {
                updateAll_books(val.ISBN);
                }}
              > 
              {" "}
              Update
              </button>

              <button onClick={()=>{deletebooks(val.ISBN)}}>Delete</button>
            </div>
          </div>
        );
        })}

</div>
</div>
</div>
<Footer />

      </>
    );
  }
   

export default AdminDashboard;