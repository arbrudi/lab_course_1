import React, {  useState } from 'react';
import "../Article_Managment/CA.css";
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';


function UpdateBook(){
    const {ISBN} = useParams();
    const [Book_image	, setBook_image	] = useState("");
    const [Book_title, setBook_title] = useState("");
    const [Book_author, setBook_author] = useState("");
    const [Book_genre, setBook_genre] = useState("");
    const [Book_description, setBook_description] = useState("");
    const navigate = useNavigate();
    

        function handleSubmit(event) {
            event.preventDefault();
            axios.put(`http://localhost:3001/admin/books/update/${ISBN}`, {
                ISBN,
                Book_image,
                Book_title,
                Book_author,
                Book_genre,
                Book_description

              }).then(res=>{
                console.log(res);
                navigate('/admin');
              }).catch(err=> { 
                console.log(err) 
             });
               
             
        }



    return(
        <div className='container '>
            <div className='cont'>
                <form onSubmit={handleSubmit}>
                    <h2>update book</h2>

                    <div className='mb-2'>
                        <label htmlFor="Book_image">Book_image</label>
                        <input type='url' placeholder=' Enter Book_image' className='form-control'
                        onChange={e=> setBook_image(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Book_title">Book_title</label>
                        <input type='text' placeholder=' Enter Book_title' className='form-control'
                        onChange={e=> setBook_title(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Book_author">Book_author</label>
                        <input type='text' placeholder=' Enter Book_author' className='form-control'
                        onChange={e=> setBook_author(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="Book_genre">Book_genre</label>
                        <input type='text' placeholder=' Enter Book_genre' className='form-control'
                        onChange={e=> setBook_genre(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Book_Description">Book_Description</label>
                        <input type='text' placeholder=' Enter Book_Description' className='form-control'
                        onChange={e=> setBook_description(e.target.value)}
                        />
                    </div>
                   <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

   

 export default UpdateBook;