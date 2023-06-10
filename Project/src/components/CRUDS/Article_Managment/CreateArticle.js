import React, {  useState } from 'react';
import "../Article_Managment/CA.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateArticle(){

    const [Article_ID, setArticle_ID] = useState("");
    const [Article_image, setArticle_image] = useState("");
    const [Article_title, setArticle_title] = useState("");
    const [Article_type, setArticle_type] = useState("");
    const [Article_Description, setArticle_Description] = useState("");
    const navigate = useNavigate();
    

        function handleSubmit(event) {
            event.preventDefault();
            axios.post('http://localhost:3001/admin/articles/create', {
                Article_ID,
                Article_image,
                Article_title,
                Article_type,
                Article_Description

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
                        <label htmlFor="Article_ID">Article_ID</label>
                        <input type='text' placeholder='Article_ID' className='form-control'
                        onChange={e=> setArticle_ID(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Article_image">Article_image</label>
                        <input type='url' placeholder=' Enter Article_image' className='form-control'
                        onChange={e=> setArticle_image(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Article_title">Article_title</label>
                        <input type='text' placeholder=' Enter Article_title' className='form-control'
                        onChange={e=> setArticle_title(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Article_type">Article_type</label>
                        <input type='text' placeholder=' Enter Article_type' className='form-control'
                        onChange={e=> setArticle_type(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Article_Description">Article_Description</label>
                        <textarea  placeholder=' Enter Article_Description' className='form-control'
                        onChange={e=> setArticle_Description(e.target.value)}
                        />
                    </div>
                   <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

   

 export default CreateArticle;