import AdminNav from '../../components/adminNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../pages/pages_css/admin_style.css";
import Axios from 'axios';
import React, {useEffect, useState } from 'react';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';

function Book() {

    const [booksList,setbooksList] = useState([]);


    useEffect(()=>{
        Axios.get("http://localhost:3001/admin/books")
        .then(res => setbooksList(res.data))
        .catch(err => console.log(err))
      
      },
      [])
      
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
    <div  className='test'>
        <div className='d-flex justify-content-center align-items-center'>
         <div className='bg-white rounded p-3'>
            <Link to="/admin/books/create" className='btn btn-success' >Add +</Link>
            <table className='table'>
                <thead> 
                    <tr>
                    <th>ISBN</th>
                    <th>Book_image</th>
                    <th>Book_title</th>
                    <th>Book_title</th>
                    <th>Book_genre</th>
                    <th>Book_Description</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        booksList.map((data,i)=>(
                            <tr key={i}>
                                <td>{data.ISBN}</td>
                                <td> {data.Book_image && (
                    <img
                    src={data.Book_image}
                      alt='Book Image'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  )}</td>
                                <td>{data.Book_title}</td>
                                <td>{data.Book_author}</td>
                                <td>{data.Book_genre}</td>    
                                <td>{data.Book_description}</td> 
                                <td>
                                    <Link to={`update/${data.ISBN}`} className='btn btn-primary'>Update</Link>
                                    <button className='btn btn-danger ms-2' onClick={e => deletebooks(data.ISBN)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
         </div>
    </div>   
</div>
</div>
<Footer />
</>
    
  )
};

export default Book;