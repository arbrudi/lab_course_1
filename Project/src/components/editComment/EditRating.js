import React, {useState} from 'react';
import './editComment.css';
import axios from 'axios';

const EditRating = (props) =>{

    const { articleId, userId } = props;
    const [ Rating , setRating ] = useState("");

    function handleEditRequest (articleId,userId,newRating) {

    const payload = {
        Article_ID: articleId,
        User_ID :userId,
        newRating : newRating,
    }

    axios.post("http://localhost:3001/admin/ARating/edit",payload)
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
         <button onClick={() => handleEditRequest(articleId,userId,Rating)}>Change selected Rating</button>
        </div>     
    </div>
  )
}

export default EditRating