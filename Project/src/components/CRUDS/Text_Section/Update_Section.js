import React, {  useState } from 'react';
import "../Article_Managment/CA.css";
import Axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';


function Update_Section(){
    const {Text_section_id} = useParams();
    const [Text_section_title, setText_section_title] = useState("");
    const [Text_section_description, setText_section_description] = useState("");
    const navigate = useNavigate();
    

        function SubmitSection(event) {
            event.preventDefault();
            Axios.put(`http://localhost:3001/admin/text_section/update/${Text_section_id}`, {
                Text_section_id,
                Text_section_title,
                Text_section_description

              }).then(res=>{
                console.log(res);
                navigate('/admin/Text_section');
              }).catch(err=> { 
                console.log(err) 
             });

        }

    return(
        <div className='container '>
            <div className='cont'>
                <form onSubmit={SubmitSection}>
                    <h2>Update Section</h2>

                    <div className='mb-2'>
                        <label htmlFor="Text Section Title">Text Section Title</label>
                        <textarea type='text' placeholder=' Enter Text Section Title' className='form-control'
                        onChange={e=> setText_section_title(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Text Section Description">Text Section Description</label>
                        <textarea  type='text' placeholder=' Enter Text Section Description' className='form-control'
                        onChange={e=> setText_section_description(e.target.value)}
                        />
                    </div>

                   <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

   

 export default Update_Section;