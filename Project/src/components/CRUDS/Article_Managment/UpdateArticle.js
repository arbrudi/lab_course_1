import React, {  useState } from 'react';
import "../Article_Managment/CA.css";
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';


function UpdateArticle(){
    const {Article_ID} = useParams();
    const [Article_image, setArticle_image	] = useState("");
    const [Article_title, setArticle_title] = useState("");
    const [Article_type, setArticle_type] = useState("");
    const [Article_Description, setArticle_Description] = useState("");
    const navigate = useNavigate();
    

        function handleSubmit(event) {
            event.preventDefault();
            axios.put(`http://localhost:3001/admin/articles/update/${Article_ID}`, {
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
                    <h2>Article</h2>

                    <div className='mb-2'>
                        <label htmlFor="Article_image">Image</label>
                        <input type='text' placeholder=' Enter Article_image' className='form-control'
                        onChange={e=> setArticle_image(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Article_title">Title</label>
                        <input type='text' placeholder=' Enter Article_title' className='form-control'
                        onChange={e=> setArticle_title(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Article_type">Type</label>
                        <input type='text' placeholder=' Enter Article_type' className='form-control'
                        onChange={e=> setArticle_type(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Article_Description">Description</label>
                        <textarea  placeholder=' Enter Article_Description' className='form-control'
                        onChange={e=> setArticle_Description(e.target.value)}
                        />
                    </div>
                   <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
        
    )
}

   

 export default UpdateArticle;