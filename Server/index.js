import express, { json } from 'express';
const app = express();
import { createConnection } from 'mysql';
import cors from 'cors';
const PORT=3001;

app.use(cors());
app.use(json());
//db connection
const db = createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'idk'
});

//routes
//CREATE USER
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
                            console.log("Successful Registration");
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
  




app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`);
    });