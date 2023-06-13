import React, {useState} from 'react';
import './EditComment.css';
import axios from 'axios';

const EditBookRating = (props) =>{

    const { ISBN, userId } = props;
    const [ B_Rating , setB_Rating ] = useState("");

    function handleEditRequest (ISBN,userId,B_Rating) {

    const payload = {
        ISBN: ISBN,
        User_ID :userId,
        B_Rating : B_Rating,
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
         <input placeholder='Write new Rating...' onChange={(e) => setB_Rating(e.target.value)}/>
         <button onClick={() => handleEditRequest(ISBN,userId,B_Rating)}>Change selected Rating</button>
        </div>     
    </div>
  )
}

export default EditBookRating