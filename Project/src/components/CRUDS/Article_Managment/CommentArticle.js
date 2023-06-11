import React, {  useState} from 'react';
import "../Article_Managment/CA.css";

import axios from 'axios';
import NavBar from '../../NavBar';
import Footer from '../../Footer';

function CommentArticle() {

    const [A_comments, setA_comments] = useState("");
    //
    const userId =JSON.parse(localStorage.getItem("userToken"))!=null?JSON.parse(localStorage.getItem("userToken")):"";
    console.log( userId.User," ID")
    const userIdfix=userId.User;
    function handleSubmit(event) {
        event.preventDefault()
        axios.post('http://localhost:3001/admin/article/Acomment_create', {
            A_comments:A_comments,
            Article_ID:"44444",
            User_ID:userIdfix,
            
          }).then(res=>{
            console.log(res);

          }).catch(err=> { 
            console.log(err) 
         });
           
         
    }

  return (
    <> 

    <div>CommentArticle</div>
    <div className=' '>
            <div className=''>
                <form onSubmit={handleSubmit}>
                    <h2>Add Comment</h2>
                    <div className='mb-2'>
                        <label htmlFor="A_comments">Comment</label>
                        <textarea  placeholder=' Enter Comment' className='form-control'
                        onChange={e=> setA_comments(e.target.value)}
                        />
                    </div>
                   <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
   

 
    </>
  )
}

export default CommentArticle