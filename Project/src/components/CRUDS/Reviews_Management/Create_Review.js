import React, {  useState } from 'react';
import "../Article_Managment/CA.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Create_Review(){

    const [Reviews_ID, setReviews_ID] = useState("");
    const [Reviewer_Name, setReviewer_Name	] = useState("");
    const [Reviewer_Surname, setReviewer_Surname] = useState("");
    const [Reviews_Comment, setReviews_Comment] = useState("");
    const navigate = useNavigate();
    

        function handleSubmit(event) {
            event.preventDefault();
            axios.post('http://localhost:3001/admin/reviews/create', {
                Reviews_ID,
                Reviewer_Name,
                Reviewer_Surname,
                Reviews_Comment

              }).then(res=>{
                console.log(res);
                navigate('/admin/reviews');
              }).catch(err=> { 
                console.log(err) 
             });
               
             
        }



    return(
        <div className='container '>
            <div className='cont'>
                <form onSubmit={handleSubmit}>
                    <h2>Create Review</h2>
                    <div className='mb-2'>
                        <label htmlFor="Reviews_ID">Reviews ID</label>
                        <input type='number' placeholder='Reviews ID' className='form-control'
                        onChange={e=> setReviews_ID(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Reviewer_Name">Reviewer Name</label>
                        <input type='text' placeholder=' Reviewer Name' className='form-control'
                        onChange={e=> setReviewer_Name(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Reviewer_Surname">Reviewer Surname</label>
                        <input type='text' placeholder=' Enter Reviewer Surname' className='form-control'
                        onChange={e=> setReviewer_Surname(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Reviews_Comment">Reviews Comment</label>
                       <textarea type='text' placeholder=' Enter Reviews Comment' className='form-control'
                        onChange={e=> setReviews_Comment(e.target.value)}
                        />
                    </div>
                   <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

   

 export default Create_Review;