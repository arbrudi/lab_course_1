import React, {  useState } from 'react';
import "../Article_Managment/CA.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateBook(){

    const [ISBN, setISBN] = useState("");
    const [Book_image	, setBook_image	] = useState("");
    const [Book_title, setBook_title] = useState("");
    const [Book_author, setBook_author] = useState("");
    const [Book_genre, setBook_genre] = useState("");
    const [Book_description, setBook_description] = useState("");
    const navigate = useNavigate();
    

        function handleSubmit(event) {
            event.preventDefault();
            axios.post('http://localhost:3001/admin/books/create', {
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
                    <h2>Add Article</h2>
                    <div className='mb-2'>
                        <label htmlFor="ISBN">ISBN</label>
                        <input type='number' placeholder='ISBN' className='form-control'
                        onChange={e=> setISBN(e.target.value)}
                        />
                    </div>
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
                   <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

   

 export default CreateBook;