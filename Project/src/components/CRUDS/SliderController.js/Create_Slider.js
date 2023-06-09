import React, {  useState } from 'react';
import "../Article_Managment/CA.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Create_Slider(){

    const [Slider_ID, setSlider_ID] = useState("");
    const [Slider_image, setSlider_image	] = useState("");
    const [Slider_name, setSlider_name] = useState(""); 
    const navigate = useNavigate();
    

        function handleSubmit(event) {
            event.preventDefault();
            axios.post('http://localhost:3001/admin/slidercontroller/create', {
                Slider_ID,
                Slider_image,
                Slider_name 

              }).then(res=>{
                console.log(res);
                navigate('/admin/slidercontroller');
              }).catch(err=> { 
                console.log(err) 
             });
               
             
        }



    return(
        <div className='container '>
            <div className='cont'>
                <form onSubmit={handleSubmit}>
                    <h2>Create Slider</h2>
                    <div className='mb-2'>
                        <label htmlFor="Slider_ID">Slider ID</label>
                        <input type='number' placeholder='Slider ID' className='form-control'
                        onChange={e=> setSlider_ID(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Slider_image">Slider image</label>
                        <input type='url' placeholder=' Slider_image' className='form-control'
                        onChange={e=> setSlider_image(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Slider_name">Slider name</label>
                        <input type='text' placeholder=' Enter Slider name' className='form-control'
                        onChange={e=> setSlider_name(e.target.value)}
                        />
                    </div> 
                   <button className='btn btn-success'>Submit</button>
                </form>
            </div>
        </div>
    )
}

   

 export default Create_Slider;