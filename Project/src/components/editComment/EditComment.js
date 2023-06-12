import React from 'react';
import './editComment.css';

const EditComment = (props) =>{

  return (
    <div>
        <div>
            Edit selected comment
        </div>
        <div>
         <input onChange={(e) => console.log(e.target.value)}/>
        </div>     
    </div>
  )
}

export default EditComment