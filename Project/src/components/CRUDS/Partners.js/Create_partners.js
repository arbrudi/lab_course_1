import React, {  useState } from 'react';
import "../Article_Managment/CA.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Create_partners(){

    const [Partner_ID, setPartner_ID] = useState("");
    const [Partner_image, setPartner_image	] = useState("");
    const [Partner_name, setPartner_name] = useState(""); 
    const [Partner_description, setPartner_description] = useState("");
    const navigate = useNavigate();
    

        function handleSubmit(event) {
            event.preventDefault();
            axios.post('http://localhost:3001/admin/partners/create', {
                Partner_ID,
                Partner_image,
                Partner_name,  
                Partner_description,

              }).then(res=>{
                console.log(res);
                navigate('/admin/partners');
              }).catch(err=> { 
                console.log(err) 
             });
               
             
        }



    return(
        <div className='container '>
            <div className='cont'>
                <form onSubmit={handleSubmit}>
                    <h2>Create partners</h2>
                    <div className='mb-2'>
                        <label htmlFor="Partner_ID">Partner ID</label>
                        <input type='number' placeholder='Partner ID' className='form-control'
                        onChange={e=> setPartner_ID(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Partner_image">Partner image</label>
                        <input type='url' placeholder=' Partner_image' className='form-control'
                        onChange={e=> setPartner_image(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Partner_name">Partner name</label>
                        <input type='text' placeholder=' Enter Partner name' className='form-control'
                        onChange={e=> setPartner_name(e.target.value)}
                        />
                    </div> 
                    <div className='mb-2'>
                        <label htmlFor="Partner_description">Partner description</label>
                        <input type='text' placeholder='Partner description' className='form-control'
                        onChange={e=> setPartner_description(e.target.value)}
                        />
                    </div>
                   <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

   

 export default Create_partners;