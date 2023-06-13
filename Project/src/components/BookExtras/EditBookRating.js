import React, {useState} from 'react';
import './editComment.css';
import axios from 'axios';

const EditBookRating = (props) =>{

    const { ISBN, userId } = props;
    const [ Rating , setRating ] = useState("");

    function handleEditRequest (ISBN,userId,newRating) {

    const payload = {
        ISBN: ISBN,
        User_ID :userId,
        newRating : newRating,
    }

    axios.post("http://localhost:3001/admin/BRating/edit",payload)
    .then((response) =>{
        console.log(response);
    }).catch((error) =>{
        console.log(error)
    })
    }

  return (
    <div>
        <div>
            Edit the Rating
        </div>
        <div>
         <input placeholder='Write new Rating...' onChange={(e) => setRating(e.target.value)}/>
         <button onClick={() => handleEditRequest(ISBN,userId,Rating)}>Change selected Rating</button>
        </div>     
    </div>
  )
}

export default EditBookRating