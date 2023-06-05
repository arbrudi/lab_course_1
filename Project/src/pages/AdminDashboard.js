import AdminNav from "../components/adminNav";
import "../pages/pages_css/admin_style.css"
import Axios from 'axios';
import React, {useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer'; 
import {Link} from 'react-router-dom';


//Arbi
const AdminDashboard = ()=> {
  const [User, setUsers] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/admin/user')
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);
const handleDeleteU =async (User_ID)=>{
  try{
    await Axios.delete(`http://localhost:3001/admin/user/delete/${User_ID}`) 
    window.location.reload() 
  } catch(err){
    console.log(err);
  }
}
    //Riona  
    const [events, setEvents] = useState([]);

    useEffect(() => {
      Axios.get('http://localhost:3001/')
        .then(res => setEvents(res.data))
        .catch(err => console.log(err));
    }, []);
  const handleDelete =async (Event_ID)=>{
    try{
      await Axios.delete('http://localhost:3001/events/'+Event_ID) 
      window.location.reload() 
    } catch(err){
      console.log(err);
    }
  }

  //erisi


  const [Article_list, setArticle_list] = useState([]);


  useEffect(()=>{
    Axios.get("http://localhost:3001/admin/articles")
    .then(res => setArticle_list(res.data))
    .catch(err => console.log(err))

},
[])
  
const deletearticles = async(Article_ID) => 
{
  try{
    await Axios.delete(`http://localhost:3001/admin/articles/delete/${Article_ID}`)
    window.location.reload() 
    
  }catch(err){
    console.log(err);
  }
}


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
        <Link to="/admin/user/create" className='btn'>
          <button className='btn-new-user'>Create New User</button>
        </Link>
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
                <th>Action</th>
                
              </tr>
            </thead>
            <tbody>
            {User.map((data, i) => (
              <tr key={i}>
                <td>{data.User_ID}</td>
                <td>{data.Name }</td>
                <td>{data.Surname }</td>
                <td>{data.User_Role}</td>
                <td>{data.Email}</td> 
                <td>{data.Username}</td> 
                <td>{data.Password}</td> 
                <td className="buttons_user">
                <Link to={`user/update/${data.User_ID}`} className='btn'>
                    <button className='btn-update'>Update</button>
                  </Link>
                  <button className='btn-delete'onClick={e => handleDeleteU(data.User_ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          </table>
         
    </div>
   
    <div className="App">
      <div className='users-list'>
      <Link to="/create" className='btn'>
          <button className='btn'>Create</button>
        </Link>
        <table className='users-table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Description</th>
              <th>Date</th> 
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((data, i) => (
              <tr key={i}>
                <td>{data.Event_ID}</td>
                <td>
                  {data.Event_image && (
                    <img
                    src={data.Event_image}
                      alt='Event Image'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  )}
                </td>
                <td>{data.Event_description}</td>
                <td>{data.Event_date}</td> 
                <td>
                <Link to={`/update/${data.Event_ID}`} className='btn'>
                    <button className='btn'>Update</button>
                  </Link>
                  <button className='btn 'onClick={e => handleDelete(data.Event_ID)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    

{/*eris */}




      </div>
      <div className='d-flex  bg-primary justify-content-center align-items-center'>
         <div className='bg-white rounded p-3'>
            <Link to="/admin/articles/create" className='btn btn-success' >Add +</Link>
            <table className='table'>
                <thead> 
                    <tr>
                    <th>ID</th>
                    <th>Article_image</th>
                    <th>Article_title</th>
                    <th>Article_type</th>
                    <th>Article_Description</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Article_list.map((data,i)=>(
                            <tr key={i}>
                                <td>{data.Article_ID}</td>
                                <td>{data.Article_image}</td>
                                <td>{data.Article_title}</td>
                                <td>{data.Article_type}</td>
                                <td>{data.Article_Description}</td>
                                <td>
                                    <Link to={`articles/update/${data.Article_ID}`} className='btn btn-primary'>Update</Link>
                                    <button className='btn btn-danger ms-2' onClick={e => deletearticles(data.Article_ID)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
         </div>
    </div>   

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
      <button onClick={getbooks}>Show Books</button>
        </div>
        <table className="user-table">
            <thead>
              <tr>
                <th>ISBN</th>
                <th>Book Image</th>
                <th>Book Title</th> 
                <th>Book author</th>
                <th>Book genre</th>
               
                <th>Book Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {booksList.map((val, key) => ( 
                <tr key={val.key}>
                  <td>{val.ISBN}</td>
                  <td></td>
                  <td>{val.Book_title}</td>
                  <td>{val.Book_author}</td>
                  <td>{val.Book_genre}</td>
                  <td>{val.Book_description}</td>
                  <td>
                      <input placeholder ="book title" defaultValue={val.Book_title} onChange={(event) => setnewBook_title(event.target.value)} />
                      <input placeholder ="book author" defaultValue={val.Book_author} onChange={(event) => setnewBook_author(event.target.value)} />
                      <input placeholder ="book genre" defaultValue={val.Book_genre} onChange={(event) => setnewBook_genre(event.target.value)} />
                      <input placeholder ="book Description" defaultValue={val.Book_description} onChange={(event) => setNewBook_description(event.target.value)} />
                        <button variant="primary" onClick={() =>{updateAll_books(val.ISBN)} }>
                      Edit
                    </button>
                  </td>
                  <td><button onClick={()=>{deletebooks(val.ISBN)}}>Delete</button></td>
                </tr>
                ))}
            </tbody>
          </table>
</div>


<Footer />

      </>
    );
  }
   

export default AdminDashboard;