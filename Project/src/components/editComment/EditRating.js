import React, {useState} from 'react';
import './editComment.css';
import axios from 'axios';

const EditRating = (props) =>{

    const { articleId, userId } = props;
    const [ comment , setComment ] = useState("");

    function handleEditRequest (articleId,userId,newComment) {

    const payload = {
        Article_ID: articleId,
        User_ID :userId,
        newComment : newComment,
    }

    axios.post("http://localhost:3001/admin/article/edit",payload)
    .then((response) =>{
        console.log(response);
    }).catch((error) =>{
        console.log(error)
    })
    }

  return (
    <div>
        <div>
            Edit selected comment
        </div>
        <div>
         <input placeholder='Write new comment...' onChange={(e) => setComment(e.target.value)}/>
         <button onClick={() => handleEditRequest(articleId,userId,comment)}>Change selected comment</button>
        </div>     
    </div>
  )
}

export default EditRating