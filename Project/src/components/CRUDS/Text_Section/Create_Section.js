import React, {  useState } from 'react';
import "../Article_Managment/CA.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Create_Section(){

    const [Text_section_id, setText_section_id] = useState("");
    const [Text_section_title, setText_section_title] = useState("");
    const [Text_section_description, setText_section_description] = useState("");
    const navigate = useNavigate();
    

        function handleSubmit(event) {
            event.preventDefault();
            axios.post('http://localhost:3001/admin/text_section/create', {
                Text_section_id,
                Text_section_title,
                Text_section_description

              }).then(res=>{
                console.log(res);
                navigate('/admin/text_section');
              }).catch(err=> { 
                console.log(err) 
             });
               
             
        }



    return(
        <div className='container '>
            <div className='cont'>
                <form onSubmit={handleSubmit}>
                    <h2>Create Text Section</h2>Create_Section
                    <div className='mb-2'>
                        <label htmlFor="Secton_ID">Section ID</label>
                        <input type='number' placeholder='Section ID' className='form-control'
                        onChange={e=> setText_section_id(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Section Title">Section Title</label>
                        <textarea placeholder='Section Title' className='form-control'
                        onChange={e=> setText_section_title(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Text_section_description">Section Description</label>
                        <textarea  placeholder=' Enter Text Section Description' className='form-control'
                        onChange={e=> setText_section_description(e.target.value)}
                        />
                    </div>
                   <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

   

 export default Create_Section;