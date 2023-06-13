import React, {useState} from 'react';
import './EditComment.css';
import axios from 'axios';

const EditBookComment = (props) =>{

    const { ISBN, userId } = props;
    const [ Bcomment , setBComment ] = useState("");

    function handleEditRequest (ISBN,userId,newComment) {

    const payload = {
        ISBN: ISBN,
        User_ID :userId,
        newComment : newComment,
    }

    axios.post("http://localhost:3001/admin/book/edit",payload)
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
         <input placeholder='Write new comment...' onChange={(e) => setBComment(e.target.value)}/>
         <button onClick={() => handleEditRequest(ISBN,userId,Bcomment)}>Change selected comment</button>
        </div>     
    </div>
  )
}

export default EditBookComment