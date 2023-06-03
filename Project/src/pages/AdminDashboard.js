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
      Article_image	 :newArticle_image,
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
      <div className='information'>

     

      <table>
       <label>ID	</label> 
       <td><input type='text' onChange={(event) => {setArticle_ID	(event.target.value)} } /></td> 

        <label>Image	</label> 
       <td><input type='text' onChange={(event) => {setArticle_image	(event.target.value)} } /></td> 

        <label>Title</label>
       <td><input type='text' onChange={(event) => {setArticle_title(event.target.value)} } /></td> 

        <label>Type</label>
    <td><input type='url' onChange={(event) => {setArticle_type(event.target.value)} }/></td>     



        <label>Description (year)</label>
        <input type='text' onChange={(event) => {setArticle_Description(event.target.value)} } />
</table>
        <button onClick={addArticle} >Add Article</button>
      </div>

      <div className="Articles">
        <button onClick={getArticle}>Show Articles</button>
        </div>
        <table className="user-table">
            <thead>
              <tr>
                <th>Article ID</th>
                <th>Article Image</th>
                <th>Article Title</th>
                <th>Article Type</th>
                <th>Article Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {Article_list.map((val, key) => ( 
                <tr key={val.key}>
                  <td>{val.Article_ID}</td>
                  <td></td>
                  <td>{val.Article_title}</td>
                  <td>{val.Article_type}</td>
                  <td>{val.Article_Description}</td>
                  <td>
                      <input placeholder ="Article Title" defaultValue={val.Article_title} onChange={(event) => setNewArticle_title(event.target.value)} />
                      <input placeholder ="Article Type" defaultValue={val.Article_type} onChange={(event) => setNewArticle_type(event.target.value)} />
                      <input placeholder ="Article Description" defaultValue={val.Article_Description} onChange={(event) => setNewArticle_Description(event.target.value)} />
                       <button variant="primary" onClick={() =>{updateAllArticles(val.Article_ID)} }>
                      Edit
                    </button>
                  </td>
                  <td><button onClick={()=>{deletearticles(val.Article_ID)}}>Delete</button></td>
                </tr>
                ))}
            </tbody>
          </table>

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