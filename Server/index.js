import express, { json } from 'express';
const app = express();
import cors from 'cors';
import { createConnection } from 'mysql';

//db connection
const db = createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'idk'
});

const PORT=3001;

app.use(cors());
app.use(json());

app.post('/create', (req,res) =>{
  //calling data from the frontend to backend (requesting)
  const name = req.body.name;
  const surname = req.body.surname;
  const user_role = req.body.user_role;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  // Check if email or username already exist in the database
  db.query('SELECT * FROM client WHERE email = ? OR username = ?', [email, username], (err, result) => {
      if (err) {
          console.log(err);
          res.send("Error checking if user exists");
      } else {
          if (result.length > 0) {
              // Email or username already exist in database, send error message
              let message = "User with this email or username already exists";
              res.status(400).send(message);
          } else {
              // Insert new user into the database
              db.query('INSERT INTO client (Name,Surname,User_Role,Email,Username,Password) VALUES (?,?,?,?,?,?)',
                  [name, surname, user_role, email, username, password],
                  (err,result) =>{
                      if(err){
                          console.log(err);
                          res.send("Error registering user");
                      } else {
                          res.send("User Registered Successfully");
                      }
                  }
              );
          }
      }
  });
  });
// Login route
app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
  
    db.query('SELECT * FROM client WHERE email = ? AND password = ?', [email, password], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error logging in");
      } else {
        if (result.length > 0) {
          // User exists and password is correct, return user's role
          const role = result[0].User_Role;
          res.send({ role: role });
        } else {
          // User does not exist or password is incorrect
          res.status(401).send("Invalid email or password");
        }
      }
    });
  });
//calling all users
app.get('/admin/users', (req, res) => {
db.query('SELECT * FROM client',(err,result)=>{
  if(err){
    console.log(err);
  }else{
    res.send(result);
  }
})
})
   
//UPDATE USERS
app.put('/admin/users/update',(req,res)=>{
  const User_ID = req.body.User_ID;
  const {Name, Surname,User_Role,Email, Username, Password} = req.body;
  db.query("UPDATE client SET Name = ?, Surname=?, User_Role=?, Email = ?, Username = ?, Password = ? WHERE User_ID = ?",[Name, Surname,User_Role,Email, Username, Password, User_ID], (err,result)=> {
    if(err){
      console.log(err);
    }else{
      res.send(result);
    }
  })
})

app.delete('/admin/users/delete/:id',(req,res)=>{
  const User_ID = req.params.id
  db.query("DELETE FROM client WHERE User_ID=?", [User_ID],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})

//Riona - Events Management 
app.post("/admin/event/create", (req, res) => { 
  console.log(req.body )
const Event_ID = req.body.Event_ID;
const Event_image = req.body.Event_image;
const Event_description = req.body.Event_description;
const Event_date = req.body.Event_date; 

db.query(
  'INSERT INTO events (Event_ID, Event_image, Event_description, Event_date) VALUES (?, ?, ?, ?)',
  [Event_ID, Event_image, Event_description, Event_date],
  (err, result) => {
    if (err) {
      console.log(err)
    } 
    else {
      res.send("Values inserted");
    }
  }
); 
});
app.get('/admin/event',(req,res)=>{
  db.query("Select * from events", (err,result)=>{
      if(err){
          console.log(err)
      }else{
          res.send(result)
      }
  })
}) 
app.put('/admin/event/update',(req,res)=>{
const Event_ID=req.body.Event_ID ; 
const Event_image=req.body.Event_description; 
const Event_description=req.body.Event_description ; 
const Event_date=req.body.Event_date;
db.query("Update events set Event_image=? , Event_description=? , Event_date=? where Event_ID=?",[Event_image,Event_description,Event_date,Event_ID,],(err,result)=>{
  if(err){
    console.log(err);   
  } 
  else{
    res.send(result);
  }
}); 
}) 
app.delete ('/admin/event/delete/:Event_ID',(req,res)=>{
const Event_ID=req.params.Event_ID ;
db.query("Delete from events where Event_ID=? " , [Event_ID],(err,result)=>{
  
if(err){
  console.log(err) 
} 
else 
{ 
res.send(result) 
}
}) 
})

//leka book crud

app.post('/admin/books/create', (req, res) => {
  console.log(req.body);
  const ISBN = req.body.ISBN; 
  const Book_image = req.body.Book_image;
  const Book_title = req.body.Book_title;
  const Book_author = req.body.Book_author;
  const Book_genre = req.body.Book_genre;
  const Book_description = req.body.Book_description;

  db.query(
    'INSERT INTO books (ISBN, Book_image,Book_title,Book_author,Book_genre,Book_description) VALUES (?,?,?,?,?,?)',
    [ISBN,Book_image, Book_title, Book_author, Book_genre, Book_description],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Values Inserted');
      }
    }
  );
});

app.get('/admin/books', (req, res) => {
db.query("SELECT * FROM books", (err, result) => {
if (err) {
    console.log(err);
} else {
    res.send(result);
}
});
});  

app.put("/admin/books/update", (req, res) => {
  const ISBN = req.body.ISBN; 
  const Book_image = req.body.Book_image;
  const Book_title = req.body.Book_title;
  const Book_author = req.body.Book_author;
  const Book_genre = req.body.Book_genre;
  const Book_description = req.body.Book_description;
  db.query(
  "UPDATE books SET  Book_image = ? ,Book_title = ? ,Book_author = ?,Book_genre = ?, Book_description = ?  WHERE ISBN = ?",
   [Book_image,Book_title,Book_author,Book_genre,Book_description, ISBN],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});


app.delete('/admin/books/delete/:ISBN', (req, res) => {
  const ISBN = req.params.ISBN
  db.query ("DELETE FROM books WHERE ISBN = ?", ISBN,(err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  })
})

app.listen(PORT,()=>{
console.log(`The server is running on port ${PORT}`);
}); 



/////


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
