import React from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

function FavoriteBook() {

  const { ISBN  } = useParams();
  
  //
  const userId =JSON.parse(localStorage.getItem("userToken"))!=null?JSON.parse(localStorage.getItem("userToken")):"";
  console.log( userId.User," ID")
  const userIdfix=userId.User;

  function handleSubmit(event) {
      event.preventDefault()
      axios.post('http://localhost:3001/user/FBook/F_Book_create', {
         
          ISBN:ISBN,
          User_ID:userIdfix,
          
        }).then(res=>{
          console.log(res);

        }).catch(err=> { 
          console.log(err) 
       });
         
       
  }
  return (
    <>  
    <div>FavoriteArticle</div>
   

    <div></div>
    <div className=' '>
            <div className=''>
                <form  onSubmit={handleSubmit}>
                    <h2>Save to Read Later</h2>
                    <div className='mb-2'>
                    </div>
                   <button className='btn btn-success' >Save</button>
                </form>
            </div>
        </div>
   

 
    </>
  )
}

export default FavoriteBook