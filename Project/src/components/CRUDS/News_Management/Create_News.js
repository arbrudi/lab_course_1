import React, {  useState } from 'react';
import "../Article_Managment/CA.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Create_News(){

    const [News_ID, setNews_ID] = useState("");
    const [News_title	, setNews_title	] = useState("");
    const [News_description, setNews_description] = useState("");
    const [News_tags, setNews_tags] = useState("");
    const [Publishing_date, setPublishing_date] = useState("");
    const [News_image, setNews_image] = useState("");
    const navigate = useNavigate();
    

        function handleSubmit(event) {
            event.preventDefault();
            axios.post('http://localhost:3001/admin/news/create', {
                News_ID,
                News_title,
                News_description,
                News_tags,
                Publishing_date,
                News_image

              }).then(res=>{
                console.log(res);
                navigate('/admin/news');
              }).catch(err=> { 
                console.log(err) 
             });
               
             
        }



    return(
        <div className='container '>
            <div className='cont'>
                <form onSubmit={handleSubmit}>
                    <h2>Create NEWS</h2>
                    <div className='mb-2'>
                        <label htmlFor="News_ID">News ID</label>
                        <input type='number' placeholder='News_ID' className='form-control'
                        onChange={e=> setNews_ID(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="News_title">News Title</label>
                        <input type='text' placeholder=' Enter News Title' className='form-control'
                        onChange={e=> setNews_title(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="News_description">News Description</label>
                        <textarea  placeholder=' Enter News Description' className='form-control'
                        onChange={e=> setNews_description(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="News_tags">News Tags</label>
                        <input type='text' placeholder=' Enter News Tags' className='form-control'
                        onChange={e=> setNews_tags(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="BooPublishing_datek_genre">Publishing Date</label>
                        <input type='date' placeholder=' Enter Publishing Date' className='form-control'
                        onChange={e=> setPublishing_date(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="News_image">News Image</label>
                        <input type='url' placeholder=' Enter News Image' className='form-control'
                        onChange={e=> setNews_image(e.target.value)}
                        />
                    </div>
                   <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

   

 export default Create_News;