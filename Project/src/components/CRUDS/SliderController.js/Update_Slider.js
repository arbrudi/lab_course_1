import React, {  useState } from 'react';
import "../Article_Managment/CA.css";
import Axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

 
function Update_Slider(){
    const {Slider_ID} = useParams();
    const [Slider_image, setSlider_image	] = useState("");
    const [Slider_name, setSlider_name] = useState(""); 
    const navigate = useNavigate();
    

        function SubmitSlider(event) {
            event.preventDefault();
            Axios.put(`http://localhost:3001/admin/slidercontroller/update/${Slider_ID}`, {
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
                <form onSubmit={SubmitSlider}>
                    <h2>Update Slider</h2>

                    <div className='mb-2'>
                        <label htmlFor="Slider_image">Slider image</label>
                        <input type='url' placeholder=' Enter Slider image' className='form-control'
                        onChange={e=> setSlider_image(e.target.value)}
                        />
                    </div>
                    <div className='mb-2'>
                        <label htmlFor="Slider_name">Slider_name</label>
                        <input  type='text' placeholder=' Enter Slider name' className='form-control'
                        onChange={e=> setSlider_name(e.target.value)}
                        />
                    </div> 

                   <button className='btn btn-success'>Update</button>
                </form>
            </div>
        </div>
    )
}

   

 export default Update_Slider;