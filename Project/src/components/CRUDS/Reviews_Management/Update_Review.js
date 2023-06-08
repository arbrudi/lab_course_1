import React, {  useState } from 'react';
import "../Article_Managment/CA.css";
import Axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';


function Update_Reviews(){
    const {Reviews_ID} = useParams();
    const [Reviewer_Name, setReviewer_Name	] = useState("");
    const [Reviewer_Surname, setReviewer_Surname] = useState("");
    const [Reviews_Comment, setReviews_Comment] = useState("");
    const navigate = useNavigate();
    

        function SubmitReview(event) {
            event.preventDefault();
            Axios.put(`http://localhost:3001/admin/reviews/update/${Reviews_ID}`, {
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
                <form onSubmit={SubmitReview}>
                    <h2>Update Reviews</h2>

                    <div className='mb-2'>
                        <label htmlFor="Reviewer_Name">Reviewer Name</label>
                        <input type='text' placeholder=' Enter Reviewer Name' className='form-control'
                        onChange={e=> setReviewer_Name(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Reviewer_Surname">Reviewer_Surname</label>
                        <input  type='text' placeholder=' Enter Reviewer Surname' className='form-control'
                        onChange={e=> setReviewer_Surname(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Reviews_Comment">Reviews Comment</label>
                        <textarea  placeholder=' Enter Reviews Comment' className='form-control'
                        onChange={e=> setReviews_Comment(e.target.value)}
                        />
                    </div>

                   <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

   

 export default Update_Reviews;