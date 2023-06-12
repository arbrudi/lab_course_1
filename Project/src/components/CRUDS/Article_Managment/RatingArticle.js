import React, {  useEffect, useState} from 'react';
import "../Article_Managment/CA.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
  


function RatingArticle() {


  const { Article_ID  } = useParams();
  const [A_Rating, setA_Rating] = useState("");
  console.log(A_Rating,"rating state")
  //
  const userId =JSON.parse(localStorage.getItem("userToken"))!=null?JSON.parse(localStorage.getItem("userToken")):"";
  console.log( userId.User," ID")
  const userIdfix=userId.User;

  useEffect(()=>{
    if(A_Rating > 5){
      alert("Cannot rate more than a 5")
    }
  },[A_Rating])

  function handleSubmit(event) {
      event.preventDefault()
      axios.post('http://localhost:3001/admin/ARating/ARating_create', {
          A_Rating:A_Rating,
          Article_ID: Article_ID,
          User_ID:userIdfix,
          
        }).then(res=>{
          console.log(res);

        }).catch(err=> { 
          console.log(err) 
       });
         
       
  }

  return (
    <> 

    <div>Rate This Article!!!</div>
    <div className=' '>
            <div className=''>
                <form onSubmit={handleSubmit} >
                    <h2>Add Rating</h2>
                    <div className='mb-2'>
                        <label htmlFor="A_Rating">Rate us</label>
                        <input type='number' placeholder='Enter rating' className='form-control'
                         onChange={e=> setA_Rating(e.target.value)}
                         
                        />
                    </div>
                   <button disabled={A_Rating > 5 ? true : false} className='btn btn-success' >Submit</button>
                </form>
            </div>
        </div>
   

 
    </>
  )
}

export default RatingArticle