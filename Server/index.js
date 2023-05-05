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
//Arbi - Register, Login, User Management CRUD

app.post('/admin/users/create', (req,res) =>{
  //calling data from the frontend to backend (requesting)
  const name = req.body.name;
  const surname = req.body.surname;
  const user_role = req.body.user_role;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
  const User_ID = req.body.User_ID;


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
              db.query('INSERT INTO client (User_ID, Name,Surname,User_Role,Email,Username,Password) VALUES (?,?,?,?,?,?,?)',
                  [User_ID,name, surname, user_role, email, username, password],
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


app.post('/register', (req,res) =>{
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

// eris - articles



app.post('/admin/articles/create', (req, res) => {
  console.log(req.body);
  const Article_ID = req.body.Article_ID;
  const Article_image = req.body.Article_image;
  const Article_title = req.body.Article_title;
  const Article_type = req.body.Article_type;
  const Article_Description = req.body.Article_Description;

  db.query(
    'INSERT INTO articles (Article_ID, Article_image, Article_title, Article_type, Article_Description) VALUES (?, ?, ?, ?, ?)',
    [Article_ID, Article_image, Article_title, Article_type, Article_Description],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send('Value inserted');
      }
    }
  );
});

app.get('/admin/articles/', (req, res) => {
  db.query('SELECT * FROM articles', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put('/admin/articles/update', (req, res) => {
  const Article_ID = req.body.Article_ID;
  const Article_image = req.body.Article_image;
  const Article_title = req.body.Article_title;
  const Article_type = req.body.Article_type;
  const Article_Description = req.body.Article_Description;

  db.query(
    'UPDATE articles SET Article_image=?, Article_title=?, Article_type=?, Article_Description=? WHERE Article_ID=?',
    [Article_image, Article_title, Article_type, Article_Description, Article_ID],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});




app.delete('/admin/articles/delete/:Article_ID', (req, res) => {
  const Article_ID = req.params.Article_ID;
  db.query('DELETE FROM articles WHERE Article_ID=?', Article_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// Leka - 

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
  const ISBN= req.body.ISBN;
  const Book_description = req.body.Book_description;
  db.query(
  "UPDATE books SET Book_description = ? WHERE ISBN = ?",
   [Book_description, ISBN],
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
