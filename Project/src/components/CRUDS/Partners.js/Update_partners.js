import React, {  useState } from 'react';
import "../Article_Managment/CA.css";
import Axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

 
function Update_Partner(){
    const {Partner_ID} = useParams();
    const [Partner_image, setPartner_image	] = useState("");
    const [Partner_name, setPartner_name] = useState(""); 
    const [Partner_description, setPartner_description	] = useState("");
    const navigate = useNavigate();
    

        function SubmitPartner(event) {
            event.preventDefault();
            Axios.put(`http://localhost:3001/admin/partners/update/${Partner_ID}`, {
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
                <form onSubmit={SubmitPartner}>
                    <h2>Update Partner</h2>

                    <div className='mb-2'>
                        <label htmlFor="Partner_image">Partner image</label>
                        <input type='url' placeholder=' Enter Partner image' className='form-control'
                        onChange={e=> setPartner_image(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Partner_name">Partner_name</label>
                        <input  type='text' placeholder=' Enter Partner name' className='form-control'
                        onChange={e=> setPartner_name(e.target.value)}
                        />
                    </div> 
                    <div className='mb-2'>
                        <label htmlFor="Partner_description">Partner description</label>
                        <input type='text' placeholder=' Enter Partner description' className='form-control'
                        onChange={e=> setPartner_description(e.target.value)}
                        />
                    </div>
                   <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

   

 export default Update_Partner;