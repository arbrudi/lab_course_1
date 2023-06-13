import React, {  useEffect, useState} from 'react';
import "../Article_Managment/CA.css";
import { useParams } from 'react-router-dom';
import axios from 'axios';
  


function RatingBook() {


  const { ISBN  } = useParams();
  const [B_Rating, setB_Rating] = useState("");
  console.log(B_Rating,"rating state")
  //
  const userId =JSON.parse(localStorage.getItem("userToken"))!=null?JSON.parse(localStorage.getItem("userToken")):"";
  console.log( userId.User," ID")
  const userIdfix=userId.User;

  useEffect(()=>{
    if(B_Rating > 5){
      alert("Cannot rate more than a 5")
    }
  },[B_Rating])

  function handleSubmit(event) {
      event.preventDefault()
      axios.post('http://localhost:3001/admin/BRating/BRating_create', {
          B_Rating:B_Rating,
          ISBN: ISBN,
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
                        <label htmlFor="B_Rating">Rate us</label>
                        <input type='number' placeholder='Enter rating' className='form-control'
                         onChange={e=> setB_Rating(e.target.value)}
                         
                        />
                    </div>
                   <button disabled={B_Rating > 5 ? true : false} className='btn btn-success' >Submit</button>
                </form>
            </div>
        </div>
   

 
    </>
  )
}

export default RatingBook