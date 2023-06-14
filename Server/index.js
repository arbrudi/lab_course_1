import express, { json } from 'express';
const app = express();
import cors from 'cors';
import { createConnection } from 'mysql';
import jwt  from 'jsonwebtoken';
import crypto from  'crypto';

//Function qe kriojn nje string  random hexadecimal 32 bit per ta perdorur si JWT Secret key 

const generateSecretKey = () => {
  
  const secretKey = crypto.randomBytes(32).toString('hex'); 
  return secretKey;
};

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
app.use(express.json());


app.get('/admin', (req, res) => {
  const sql = 'SELECT COUNT(User_ID) AS count FROM client';

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error counting users");
    } else {
      const userCount = result[0].count;
      res.json({ count: userCount });
    }
  });
});

app.get('/admin/books/count', (req, res) => {
  const sql = "SELECT COUNT(ISBN) AS books FROM books";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error counting users");
    } else {
      const booksCount = result[0].books;
      res.json({ count: booksCount });
    }
  });
});

app.get('/admin/articles/count', (req, res) => {
  const sql = "SELECT COUNT(Article_ID) AS articles FROM articles";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error counting users");
    } else {
      const articleCount = result[0].articles;
      res.json({ count: articleCount });
    }
  });
});

app.get('/admin/events/count', (req, res) => {
  const sql = "SELECT COUNT(Event_ID) AS events FROM events";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error counting users");
    } else {
      const eventCount = result[0].events;
      res.json({ count: eventCount });
    }
  });
});





// -----------------------------------------------------------------CREATE NEW USER (UM CRUD)---------------------------------------------------------------------
//Arbi 
app.post('/admin/user/create', (req,res) =>{

 
  const email = req.body.email;
  const username = req.body.username;

  const sql = "INSERT INTO client (User_ID, Name, Surname, User_Role, Email, Username, Password) VALUES (?, ?, ?, ?,?,?,?)";
    const values = [
      req.body.User_ID,
      req.body.Name,
      req.body.Surname,
      req.body.User_Role,
      req.body.Email,
      req.body.Username,
      req.body.Password
    ];
  

  db.query('SELECT * FROM client WHERE email = ? OR username = ?', [email, username], (err, result) => {
      if (err) {
          console.log(err);
          res.send("Error checking if user exists");
      } else {
          if (result.length > 0) {
              let message = "User with this email or username already exists";
              res.status(400).send(message);
          } else {
           
             db.query(sql, values, (err, data) => { 
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

//console.log(res,'Response')
//console.log(req,'Request')
  // Check if email or username already exist in the database
  db.query('SELECT * FROM client WHERE email = ? OR username = ?', [email, username], (err, result) => {
      if (err) {
          console.log(err);
          res.send("Error checking if user exists");
      } else {
          if (result.length > 0) {
              // Email or username already exist in database, send error message
              alert("User with this email or username already exists") ;
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
// e merr id e user tu e lyp ne databas me email kur bohet match e bon pull edhe e bon log
// ne local storage bashk me jwttoken edhe role
  const User_ID = `SELECT User_ID FROM client WHERE email=${email}` 

  console.log(User_ID,"ID")
 

  db.query('SELECT * FROM client WHERE email = ? AND password = ?  ' , [email, password,User_ID], (err, result) => {
    if (err) {

      console.log(err);
      res.status(500).send("Error logging in");

    } else {
      if (result.length > 0) {
        // User exists and password is correct, generate JWT token
        const role = result[0].User_Role;
        console.log(result,"res")

        const token = jwt.sign({ email, role }, generateSecretKey()); 
        //
        const ID =result[0].User_ID;
        res.send({ role, token,ID });
        
      } else {
        // User does not exist or password is incorrect
        res.status(401).send("Invalid email or password");
      }
    }
  });
});

//calling all users
app.get('/admin/user', (req, res) => {
db.query('SELECT * FROM client',(err,result)=>{
  if(err){
    console.log(err);
  }else{
    res.send(result);
  }
})
})
   
//UPDATE USERS
app.put('/admin/user/update/:User_ID',(req,res)=>{
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
// DELETE USERS
app.delete('/admin/user/delete/:id',(req,res)=>{
  const User_ID = req.params.id
  db.query("DELETE FROM client WHERE User_ID=?", [User_ID],(err,result)=>{
    if(err){
      console.log(err)
    }else{
      res.send(result);
    }
  })
})

// --------------------------------------------------------NEWS CRUD----------------------------------------------------------------------


app.get('/newsList/news/:News_ID', (req, res) => {
  const sql = 'SELECT * FROM news WHERE News_ID = ?';
  const newsID = req.params.News_ID;

  db.query(sql, newsID, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error retrieving news");
    } else {
      res.json(result);
    }
  });
});




app.get('/admin/news', (req, res) => {
  const sql = 'SELECT News_ID, News_title, News_description, News_tags, Publishing_date, News_image FROM news';

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error retrieving news");
    } else {
      res.json(result);
    }
  });
});


app.post('/admin/news/create', (req, res) => {
   
  const sql='INSERT INTO news (News_ID, News_title, News_description, News_tags, Publishing_date, News_image) VALUES (?, ?, ?, ?, ?,?)'
  const values=[
   req.body.News_ID,
   req.body.News_title,
   req.body.News_description,
   req.body.News_tags,
   req.body.Publishing_date,
   req.body.News_image
  ]
  db.query(sql, values, (err, data) => { 
   if(err){
       console.log(err);
       res.send("Error uploading news");
   } else {
       res.send("News Uploaded Successfully");
   }
 }
 );
 });
 
app.put('/admin/news/update/:News_ID', (req, res) => {
  const News_ID = req.body.News_ID;
  const sql='UPDATE news SET News_title = ? ,News_description = ? ,News_tags = ?, Publishing_date = ?, News_image = ? WHERE News_ID = ?'
  const values=[ 
  
   req.body.News_title,
   req.body.News_description,
   req.body.News_tags,
   req.body.Publishing_date,
   req.body.News_image,
   req.body.News_ID
  ]
  

  db.query(sql, [...values,News_ID], (err, data) => { 
   if(err){
       console.log(err);
       res.send("Error");
   } else {
       res.send("Success");
   }
 }
 );
 });

 app.delete('/admin/news/delete/:News_ID', (req, res) => {
  const News_ID = req.params.News_ID;
  db.query('DELETE FROM news WHERE News_ID=?', News_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ----------------------------------------------------------------REVIEWS CRUD -------------------------------------------------------------------

app.get('/admin/reviews', (req, res) => {
  const sql = 'SELECT * FROM reviews';

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error retrieving reviews");
    } else {
      res.json(result);
    }
  });
});

app.post('/admin/reviews/create', (req, res) => {
   
  const sql='INSERT INTO reviews (Reviews_ID, Reviewer_Name, Reviewer_Surname, Reviews_Comment) VALUES (?, ?, ?, ?)'
  const values=[
   req.body.Reviews_ID,
   req.body.Reviewer_Name,
   req.body.Reviewer_Surname,
   req.body.Reviews_Comment,
  ]
  db.query(sql, values, (err, data) => { 
   if(err){
       console.log(err);
       res.send("Error uploading review");
   } else {
       res.send("Review Uploaded Successfully");
   }
 }
 );
 });

 app.put('/admin/reviews/update/:Reviews_ID', (req, res) => {
  const Reviews_ID = req.body.Reviews_ID;
  const sql='UPDATE reviews SET Reviewer_Name = ? , Reviewer_Surname = ? , Reviews_Comment = ? WHERE Reviews_ID = ?'
  const values=[ 
  
   req.body.Reviewer_Name,
   req.body.Reviewer_Surname,
   req.body.Reviews_Comment,
   req.body.Reviews_ID
  ]
  

  db.query(sql, [...values,Reviews_ID], (err, data) => { 
   if(err){
       console.log(err);
       res.send("Error");
   } else {
       res.send("Success");
   }
 }
 );
 });
 app.delete('/admin/reviews/delete/:Reviews_ID', (req, res) => {
  const Reviews_ID = req.params.Reviews_ID;

  db.query('DELETE FROM reviews WHERE Reviews_ID=?', Reviews_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// ---------------------------------------------------------- TEXT SECTION CRUD --------------------------------------------------------------------------------------------------

app.get('/admin/text_section', (req, res) => {
  const sql = 'SELECT * FROM text_section';

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error retrieving sections");
    } else {
      res.json(result);
    }
  });
});

app.post('/admin/text_section/create', (req, res) => {
   
  const sql='INSERT INTO text_section (Text_section_id, Text_section_title, Text_section_description) VALUES (?, ?, ?)'
  const values=[
   req.body.Text_section_id,
   req.body.Text_section_title,
   req.body.Text_section_description
  ]
  db.query(sql, values, (err, data) => { 
   if(err){
       console.log(err);
       res.send("Error uploading text section");
   } else {
       res.send("Text Section Uploaded Successfully");
   }
 }
 );
 });



 app.put('/admin/text_section/update/:Text_section_id', (req, res) => {
  const Text_section_id = req.body.Text_section_id;
  const sql='UPDATE Text_section SET Text_section_title = ? , Text_section_description = ? WHERE Text_section_id = ?'
  const values=[ 
  
   req.body.Text_section_title,
   req.body.Text_section_description,
   req.body.Text_section_id
  ]
  
  db.query(sql, [...values,Text_section_id], (err, data) => { 
   if(err){
       console.log(err);
       res.send("Error");
   } else {
       res.send("Success");
   }
 }
 );
 });

 app.delete('/admin/text_section/delete/:Text_section_id', (req, res) => {
  const Text_section_id = req.params.Text_section_id;

  db.query('DELETE FROM Text_section WHERE Text_section_id=?', Text_section_id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
// -------------------------------------------------------------Contact Page CRUD -----------------------------------------------------------------

app.get('/admin/contact/',(req,res)=>{

  const sql = 'SELECT * FROM contact_us';

  db.query(sql,(err,result)=>{
    if(err){
      console.log(err);
    }else{
      res.json(result);
    }
  })
})


app.post('/admin/contact/create',(req,res)=>{

  const sql = 'INSERT INTO contact_us(Contact_ID, Contact_email, Contact_number, Contact_address, Contact_city, Contact_postal_code) VALUES(?,?,?,?,?,?)';
  const values = [
    req.body.Contact_ID,
    req.body.Contact_email,
    req.body.Contact_number,
    req.body.Contact_address,
    req.body.Contact_city,
    req.body.Contact_postal_code
  ]

  db.query(sql, values, (err, data)=>{
    if(err){
      console.log(err);
      res.send('Error inserting data into the database!');
    }else{
      res.send('Data inserted successfully!')
    }
  })
})

app.put('/admin/contact/update/:Contact_ID',(req,res)=>{

  const Contact_ID = req.body.Contact_ID;
  const sql ='UPDATE contact_us SET Contact_email=?, Contact_number=?, Contact_address=?, Contact_city=?, Contact_postal_code=? WHERE Contact_ID=?';
  const values= [

    req.body.Contact_email,
    req.body.Contact_number,
    req.body.Contact_address,
    req.body.Contact_city,
    req.body.Contact_postal_code,
    req.body.Contact_ID

  ];

  db.query(sql,[...values,Contact_ID], (err, data)=>{
    if(err){
      console.log(err);
      res.send('Error');
    }else{
      res.send('Successful')
    }
  })
})


 app.delete('/admin/contact/delete/:Contact_ID', (req, res) => {
  const Contact_ID = req.params.Contact_ID;

  db.query('DELETE FROM contact_us WHERE Contact_ID=?', Contact_ID, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});


//Riona - -------------------------------------------------------------------------Events Management CRUD ----------------------------------------------------------------------
app.get("/", (req, res) => {
  const sql = "SELECT * FROM events";
  db.query(sql, (err, data) => {
    if (err) return res.json("Error");
    return res.json(data);
  });
}); 
app.post('/admin/events/createe', (req, res) => {
    const sql = "INSERT INTO events (Event_ID, Event_image, Event_description, Event_date) VALUES (?, ?, ?, ?)";
    const values = [
      req.body.Event_ID,
      req.body.Event_image,
      req.body.Event_description,
      req.body.Event_date
    ];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        console.log(err);
        return res.json("Error");
      }
      console.log("Data inserted successfully");
      return res.json(data);
    });
  }); 
  app.put('/admin/events/update/:Event_ID', (req, res) => {
    const sql = "UPDATE events SET Event_image = ?, Event_description = ?, Event_date = ? WHERE Event_ID = ?";
    const values = [
      req.body.Event_image,
      req.body.Event_description,
      req.body.Event_date,
      req.params.Event_ID
    ];
  
    db.query(sql, values, (err, data) => {
      if (err) {
        console.log(err);
        return res.json("Error");
      }
      console.log("Data updated successfully");
      return res.json(data);
    });
  }); 
  app.delete('/admin/events/delete/:Event_ID',(req,res)=>{
    const Event_ID = req.params.Event_ID
    db.query("DELETE FROM events WHERE Event_ID=?", [Event_ID],(err,result)=>{
      if(err){
        console.log(err)
      }else{
        res.send(result);
      }
    })
  }) 
  app.get("/events", (req, res) => {
    const sql = "Select ep.Event_ID, e.Event_image, e.Event_description, e.Event_date, ep.User_ID, c.Name, c.Surname From Event_participants ep INNER JOIN Events e on e.Event_ID = ep.Event_ID INNER JOIN client c on c.User_ID = ep.User_ID "
    db.query(sql, (err, data) => {
      if (err) return res.json("Error");
      return res.json(data);
    });
  }); 
  app.post('/admin/events/createparticipants', (req, res) => {
      const sql = "INSERT INTO event_participants (Event_ID, User_ID) VALUES (?,?)";
      const values = [ 
        req.body.Event_ID,
        req.body.User_ID 
      ];
    
      db.query(sql, values, (err, data) => {
        if (err) {
          console.log(err);
          return res.json("Error");
        }
        console.log("Data inserted successfully");
        return res.json(data);
      });
    }); 
    app.put('/admin/events/updateparticipants/:Event_ID', (req, res) => {
      const sql = "UPDATE event_participants SET User_ID=? WHERE Event_ID = ?";
      const values = [
        req.body.User_ID,
        req.params.Event_ID
      ];
    
      db.query(sql, values, (err, data) => {
        if (err) {
          console.log(err);
          return res.json("Error");
        }
        console.log("Data updated successfully");
        return res.json(data);
      });
    }); 
    app.post('/joinevent/:Event_ID', (req, res) => {
      const sql = "INSERT INTO event_participants (Event_ID, User_ID) VALUES (?, ?)";
      const values = [
        req.params.Event_ID,
        req.body.User_ID
      ];
    
      db.query(sql, values, (err, data) => {
        if (err) {
          console.log(err);
          return res.json("Error");
        }
        console.log("Data inserted successfully");
        return res.json(data);
      });
    }); 
    app.delete('/admin/events/:Event_ID', (req, res) => {
      const sql = "delete from event_participants where Event_ID=?"; 
      const Event_ID= req.params.Event_ID
    
    
      db.query(sql, [Event_ID], (err, data) => {
        if (err) 
          return res.json("Error");
        return res.json(data);
      });
    }); 
    app.get('/admin/slidercontroller', (req, res) => {
      const sql = 'SELECT * FROM slider_controller';
    
      db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          res.send("Error retrieving slider");
        } else {
          res.json(result);
        }
      });
    });
    
    app.post('/admin/slidercontroller/create', (req, res) => {
       
      const sql='INSERT INTO slider_controller (Slider_ID, Slider_image, Slider_name) VALUES (?, ?, ?)'
      const values=[
       req.body.Slider_ID,
       req.body.Slider_image,
       req.body.Slider_name, 
      ]
      db.query(sql, values, (err, data) => { 
       if(err){
           console.log(err);
           res.send("Error uploading slider");
       } else {
           res.send("Slider Uploaded Successfully");
       }
     }
     );
     });
    
     app.put('/admin/slidercontroller/update/:Slider_ID', (req, res) => {
      const Slider_ID = req.body.Slider_ID;
      const sql='UPDATE slider_controller SET Slider_image = ? , Slider_name = ?  WHERE Slider_ID = ?'
      const values=[ 
      
       req.body.Slider_image,
       req.body.Slider_name,
       req.body.Slider_ID
      ]
      
    
      db.query(sql, [...values,Slider_ID], (err, data) => { 
       if(err){
           console.log(err);
           res.send("Error");
       } else {
           res.send("Success");
       }
     }
     );
     });
     app.delete('/admin/slidercontroller/delete/:Slider_ID', (req, res) => {
      const Slider_ID = req.params.Slider_ID;
    
      db.query('DELETE FROM slider_controller WHERE Slider_ID=?', Slider_ID, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    }); 
    app.get('/admin/partners', (req, res) => {
      const sql = 'SELECT * FROM partners';
    
      db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          res.send("Error retrieving partner");
        } else {
          res.json(result);
        }
      });
    });
    
    app.post('/admin/partners/create', (req, res) => {
       
      const sql='INSERT INTO partners (Partner_ID, Partner_image, Partner_name , Partner_description) VALUES (?, ?, ?,? )'
      const values=[
       req.body.Partner_ID,
       req.body.Partner_image,
       req.body.Partner_name, 
       req.body.Partner_description,
      ]
      db.query(sql, values, (err, data) => { 
       if(err){
           console.log(err);
           res.send("Error uploading partner");
       } else {
           res.send("Partner Uploaded Successfully");
       }
     }
     );
     });
    
     app.put('/admin/partners/update/:Partner_ID', (req, res) => {
      const Partner_ID = req.body.Partner_ID;
      const sql='UPDATE partners SET Partner_image = ? , Partner_name = ? , Partner_description = ?  WHERE Partner_ID = ?'
      const values=[ 
      
       req.body.Partner_image,
       req.body.Partner_name, 
       req.body.Partner_description,
       req.body.Partner_ID
      ]
      
    
      db.query(sql, [...values,Partner_ID], (err, data) => { 
       if(err){
           console.log(err);
           res.send("Error");
       } else {
           res.send("Success");
       }
     }
     );
     });
     app.delete('/admin/partners/delete/:Partner_ID', (req, res) => {
      const Partner_ID = req.params.Partner_ID;
    
      db.query('DELETE FROM partners WHERE Partner_ID=?', Partner_ID, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    }); 
    app.get('/admin/benefits', (req, res) => {
      const sql = 'SELECT * FROM benefits';
    
      db.query(sql, (err, result) => {
        if (err) {
          console.log(err);
          res.send("Error retrieving reviews");
        } else {
          res.json(result);
        }
      });
    });
    
    app.post('/admin/benefits/createbenefits', (req, res) => {
       
      const sql='INSERT INTO benefits (Benefit_ID, Benefit_img, Benefit_title) VALUES (?, ?, ?)'
      const values=[
       req.body.Benefit_ID,
       req.body.Benefit_img,
       req.body.Benefit_title,
      ]
      db.query(sql, values, (err, data) => { 
       if(err){
           console.log(err);
           res.send("Error uploading review");
       } else {
           res.send("Benefit Uploaded Successfully");
       }
     }
     );
     });
    
     app.put('/admin/benefits/updatebenefits/:Benefit_ID', (req, res) => {
      const Benefit_ID = req.body.Benefit_ID;
      const sql='UPDATE benefits SET Benefit_img = ? , Benefit_title = ?  WHERE Benefit_ID=?'
      const values=[ 
      
       req.body.Benefit_img,
       req.body.Benefit_title,
       req.body.Benefit_ID
      ]
      
    
      db.query(sql, [...values,Benefit_ID], (err, data) => { 
       if(err){
           console.log(err);
           res.send("Error");
       } else {
           res.send("Success");
       }
     }
     );
     });
     app.delete('/admin/benefits/delete/:Benefit_ID', (req, res) => {
      const Benefit_ID = req.params.Benefit_ID;
    
      db.query('DELETE FROM benefits WHERE Benefit_ID=?', Benefit_ID, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send(result);
        }
      });
    });
    app.get('/user/joinuser/:User_ID', (req, res) => {
      const { User_ID } = req.params;
      const sql = `SELECT ep.Event_ID, e.Event_image, e.Event_description, e.Event_date, ep.User_ID, c.Name, c.Surname FROM Event_participants ep INNER JOIN Events e ON e.Event_ID = ep.Event_ID INNER JOIN client c ON c.User_ID = ep.User_ID WHERE ep.User_ID = ?`;
    
      db.query(sql, [User_ID], (err, data) => {
        if (err) {
          console.error('Error while fetching events:', err);
          res.status(500).json('Error');
        } else {
          res.json(data);
        }
      });
    });
    app.post('/user/joinuser/:Event_ID', (req, res) => {
      const { event_id } = req.params;
      const { User_ID } = req.body;
      const sql = 'INSERT INTO Event_participants (Event_ID, User_ID) VALUES (?, ?)';
    
      db.query(sql, [event_id, User_ID], (err) => {
        if (err) {
          console.error('Error while creating event participant:', err);
          res.status(500).json('Error');
        } else {
          res.sendStatus(200);
        }
      });
    });
// Erisi -------------------------------------------Articles--------------------------------------------------------------------------------
app.get('/Articlelist/articles/:Article_ID', (req, res) => {
  const sql = 'SELECT * FROM articles WHERE Article_ID = ?';
  const Article_ID = req.params.Article_ID;

  db.query(sql,Article_ID, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error retrieving Article ");
    } else {
      res.json(result);
    }
  });
});




app.post('/admin/articles/create', (req, res) => {
   
 const sql='INSERT INTO articles (Article_ID, Article_image, Article_title, Article_type, Article_Description) VALUES (?, ?, ?, ?, ?)'
 const values=[
  req.body.Article_ID,
  req.body.Article_image,
  req.body.Article_title,
  req.body.Article_type,
  req.body.Article_Description
 ]
 db.query(sql, values, (err, data) => { 
  if(err){
      console.log(err);
      res.send("Error ");
  } else {
      res.send(" Success");
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

app.put('/admin/articles/update/:Article_ID', (req, res) => {
  const Article_ID = req.body.User_ID;
  const sql='UPDATE articles SET Article_image = ? ,Article_title = ? ,Article_type = ?, Article_Description = ?  WHERE Article_ID = ?'
  const values=[ 
  
   req.body.Article_image,
   req.body.Article_title,
   req.body.Article_type,
   req.body.Article_Description,
   req.body.Article_ID
  ]
  

  db.query(sql, [...values,Article_ID], (err, data) => { 
   if(err){
       console.log(err);
       res.send("Error");
   } else {
       res.send("Success");
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




//A-comment

  

app.post('/admin/article/Acomment_create', (req, res) => {
   const sql= "INSERT INTO article_comments (User_ID, Article_ID,A_comments) VALUES(?,?,?)"
   const values = [
    req.body.User_ID,
    req.body.Article_ID,
    req.body.A_comments,

  ]

  db.query(sql,values, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

// endpoint per te marrur komentet nga artikulli i caktuar 

app.get('/admin/article/:Article_ID', (req, res) => {

  const Article_ID = req.params.Article_ID;
  const sql = `SELECT * FROM article_comments WHERE Article_ID = ${Article_ID}`;

  db.query(sql,Article_ID, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error retrieving Article ");
    } else {
      res.send({result});
    }
  });
});

// deletign by post 
app.post('/admin/article/delete', (req, res) => {
  const Article_ID = req.body.Article_ID;
  const User_ID =req.body.User_ID
  db.query(`DELETE FROM article_comments WHERE Article_ID =? AND User_ID =?`, [Article_ID,User_ID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/admin/article/edit', (req, res) => {
  const Article_ID = req.body.Article_ID;
  const User_ID = req.body.User_ID;
  const A_comments = req.body.newComment;

  db.query(
    'UPDATE article_comments SET A_comments=? WHERE Article_ID=? AND User_ID=?',
    [A_comments, Article_ID, User_ID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred while updating the comment.');
      } else {
        res.send(result);
      }
    }
  );
});


//A-ratting

app.post('/admin/ARating/ARating_create', (req, res) => {
  const sql= "INSERT INTO article_ratings (User_ID, Article_ID,A_Rating) VALUES(?,?,?)"
  const values = [
   req.body.User_ID,
   req.body.Article_ID,
   req.body.A_Rating,

 ]

 db.query(sql,values, (err, result) => {
   if (err) {
     console.log(err);
   } else {
     res.send(result);
   }
 });
});



app.get('/admin/ARating/:Article_ID', (req, res) => {

  const Article_ID = req.params.Article_ID;
  const sql = `SELECT * FROM article_ratings WHERE Article_ID = ${Article_ID}`;

  db.query(sql,Article_ID, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error retrieving Rating ");
    } else {
      res.send({result});
    }
  });
});



app.post('/admin/ARating/delete', (req, res) => {
  const Article_ID = req.body.Article_ID;
  const User_ID =req.body.User_ID
  db.query(`DELETE FROM article_ratings WHERE Article_ID =? AND User_ID =?`, [Article_ID,User_ID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/admin/ARating/edit', (req, res) => {
  const Article_ID = req.body.Article_ID;
  const User_ID = req.body.User_ID;
  const A_Rating = req.body.newRating;

  db.query(
    'UPDATE article_ratings SET A_Rating=? WHERE Article_ID=? AND User_ID=?',
    [A_Rating, Article_ID, User_ID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred while updating the comment.');
      } else {
        res.send(result);
      }
    }
  );
});



//F-Article


app.post('/user/FArticle/F_Article_create', (req, res) => {
  const sql= "INSERT INTO favorite_articles (User_ID, Article_ID) VALUES(?,?)"
  const values = [
   req.body.User_ID,
   req.body.Article_ID,
  

 ]

 db.query(sql,values, (err, result) => {
   if (err) {
     console.log(err);
   } else {
     res.send(result);
   }
 });
});


app.get('/user/FArticle/:User_ID', (req, res) => {
  const User_ID = req.params.User_ID;

  const sql = `SELECT f.Article_ID, a.Article_image, a.Article_title, a.Article_type FROM favorite_articles AS f INNER JOIN articles AS a ON a.Article_ID = f.Article_ID WHERE User_ID = ${User_ID}`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving favorite articles");
    } else {
      res.send(result);
    }
  });
});




app.delete('/user/FArticle/F_Article_Delete/:Article_ID', (req, res) => {
  const Article_ID = req.params.Article_ID;

  db.query('DELETE FROM favorite_articles WHERE Article_ID =? ', [Article_ID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



app.put('/user/FArticle/F_Article_Update/:Article_ID', (req, res) => {
  const Article_ID = req.params.Article_ID;
  const newArticle = req.body.newArticle;

  db.query(
    'UPDATE favorite_articles SET Article_ID=? WHERE Article_ID=?',
    [newArticle, Article_ID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred while updating the article.');
      } else {
        res.send(result);
      }
    }
  );
});







// Leka ----------------------------------------------------------------Books-----------------------------------------------------------

app.get('/BooksList/books/:ISBN', (req, res) => {
  const sql = 'SELECT * FROM books WHERE ISBN = ?';
  const ISBN = req.params.ISBN;

  db.query(sql, ISBN, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error retrieving ISBN");
    } else {
      res.json(result);
    }
  });
});

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

app.put("/admin/books/update/:ISBN", (req, res) => {
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


app.post('/admin/BRating/BRating_create', (req, res) => {
  const sql= "INSERT INTO book_ratings (User_ID, ISBN,B_Rating) VALUES(?,?,?)"
  const values = [
   req.body.User_ID,
   req.body.ISBN,
   req.body.B_Rating,

 ]

 db.query(sql,values, (err, result) => {
   if (err) {
     console.log(err);
   } else {
     res.send(result);
   }
 });
});


app.post('/admin/BRating/edit', (req, res) => {
  const ISBN = req.body.ISBN;
  const User_ID = req.body.User_ID;
  const B_Rating = req.body.B_Rating;

  db.query(
    'UPDATE book_ratings SET B_Rating=? WHERE ISBN=? AND User_ID=?',
    [B_Rating, ISBN, User_ID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred while updating the comment.');
      } else {
        res.send(result);
      }
    }
  );
});

app.post('/admin/BRating/delete', (req, res) => {
  const ISBN = req.body.ISBN;
  const User_ID =req.body.User_ID
  db.query(`DELETE FROM book_ratings WHERE ISBN =? AND User_ID =?`, [ISBN,User_ID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/admin/BRating/:ISBN', (req, res) => {

  const ISBN = req.params.ISBN;
  const sql = `SELECT * FROM book_ratings WHERE ISBN = ${ISBN}`;

  db.query(sql,ISBN, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error retrieving Rating ");
    } else {
      res.send({result});
    }
  });
});

//Book comments
app.post('/admin/book/Bcomment_create', (req, res) => {
  const sql= "INSERT INTO book_comments (User_ID, ISBN,B_comments) VALUES(?,?,?)"
  const values = [
   req.body.User_ID,
   req.body.ISBN,
   req.body.B_comments,

 ]

 db.query(sql,values, (err, result) => {
   if (err) {
     console.log(err);
   } else {
     res.send(result);
   }
 });
});

app.get('/admin/books/:ISBN', (req, res) => {

  const ISBN = req.params.ISBN;
  const sql = `SELECT * FROM book_comments WHERE ISBN = ${ISBN}`;

  db.query(sql,ISBN, (err, result) => {
    if (err) {
      console.log(err);
      res.send("Error retrieving books");
    } else {
      res.send({result});
    }
  });
});

app.post('/admin/book/delete', (req, res) => {
  const ISBN = req.body.ISBN;
  const User_ID =req.body.User_ID
  db.query(`DELETE FROM book_comments WHERE ISBN =? AND User_ID =?`, [ISBN,User_ID], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post('/admin/book/edit', (req, res) => {
  const ISBN = req.body.ISBN;
  const User_ID = req.body.User_ID;
  const B_comments = req.body.newComment;

  db.query(
    'UPDATE book_comments SET B_comments=? WHERE ISBN=? AND User_ID=?',
    [B_comments, ISBN, User_ID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred while updating the comment.');
      } else {
        res.send(result);
      }
    }
  );
});

app.listen(PORT,()=>{
console.log(`The server is running on port ${PORT}`);
}); 

//F- Books

app.post('/user/FBook/F_Book_create', (req, res) => {
  const sql= "INSERT INTO favorite_books (User_ID, ISBN) VALUES(?,?)"
  const values = [
   req.body.User_ID,
   req.body.ISBN,
  

 ]

 db.query(sql,values, (err, result) => {
   if (err) {
     console.log(err);
   } else {
     res.send(result);
   }
 });
});


app.get('/user/FBook/:User_ID', (req, res) => {
  const User_ID = req.params.User_ID;

  const sql = `SELECT f.ISBN, a.Book_image, a.Book_title, a.Book_genre FROM favorite_books AS f INNER JOIN books AS a ON a.ISBN = f.ISBN WHERE User_ID = ${User_ID}`;

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving favorite articles");
    } else {
      res.send(result);
    }
  });
});




app.delete('/user/FBook/F_Book_Delete/:ISBN', (req, res) => {
  const ISBN = req.params.ISBN;

  db.query('DELETE FROM favorite_books WHERE ISBN =? ', [ISBN], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});



app.put('/user/FBook/F_Book_Update/:ISBN', (req, res) => {
  const ISBN = req.params.ISBN;
  const newBook = req.body.newBook;

  db.query(
    'UPDATE favorite_books SET ISBN=? WHERE ISBN=?',
    [newBook, ISBN],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('An error occurred while updating the article.');
      } else {
        res.send(result);
      }
    }
  );
});