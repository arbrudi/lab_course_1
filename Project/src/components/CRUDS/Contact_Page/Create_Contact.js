import React, {  useState } from 'react';
import "../Article_Managment/CA.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Create_Contact(){

    const [Contact_ID, setContact_ID] = useState("");
    const [Contact_email, setContact_email] = useState("");
    const [Contact_number, setContact_number] = useState("");
    const [Contact_address, setContact_address] = useState("");
    const [Contact_city, setContact_city] = useState("");
    const [Contact_postal_code, setContact_postal_code] = useState("");
    const navigate = useNavigate();
    

        function handleSubmit(event) {
            event.preventDefault();
            axios.post('http://localhost:3001/admin/contact/create', {
                Contact_ID,
                Contact_email,
                Contact_number,
                Contact_address,
                Contact_city,
                Contact_postal_code
              }).then(res=>{
                console.log(res);
                navigate('/admin/contact');
              }).catch(err=> { 
                console.log(err) 
             });
               
             
        }



    return(
        <div className='container '>
            <div className='cont'>
                <form onSubmit={handleSubmit}>
                    <h2>Create Contact</h2>
                    <div className='mb-2'>
                        <label htmlFor="Contact_ID">Contact ID </label>
                        <input type='number' placeholder='Contact ID' className='form-control'
                        onChange={e=> setContact_ID(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Contact_email">Contact_email</label>
                        <input type='email' placeholder='Contact_email' className='form-control'
                        onChange={e=> setContact_email(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Contact_number">Contact_number </label>
                        <input type='number' placeholder='Contact_number ID' className='form-control'
                        onChange={e=> setContact_number(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Contact_address">Contact_address </label>
                        <input type='text' placeholder='Contact_address' className='form-control'
                        onChange={e=> setContact_address(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Contact_city">Contact_city </label>
                        <input type='text' placeholder='Contact_city' className='form-control'
                        onChange={e=> setContact_city(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Contact_postal_code">Contact_postal_code </label>
                        <input type='number' placeholder='Contact_postal_code' className='form-control'
                        onChange={e=> setContact_postal_code(e.target.value)}
                        />
                    </div>
                   <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

   

 export default Create_Contact;