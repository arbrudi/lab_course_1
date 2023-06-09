import AdminNav from '../../components/adminNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../pages/pages_css/admin_style.css";
import Axios from 'axios';
import React, {useEffect, useState } from 'react';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';


//Arbi
const Text_section = ()=> {
  

  const [textList, setTextList] = useState([]);


  useEffect(()=>{
    Axios.get("http://localhost:3001/admin/text_section")
    .then(res => setTextList(res.data))
    .catch(err => console.log(err))

},
[])
  
const deleteSection = async(Text_section_id) => 
{
  try{
    await Axios.delete(`http://localhost:3001/admin/text_section/delete/${Text_section_id}`)
    window.location.reload() 
    
  }catch(err){
    console.log(err);
  }
}

    return (
     <>
     <NavBar />
      <div className="admin_page">
      <div className="admin_nav">
      <AdminNav />
    </div>
    <div className="test">

      <div className='d-flex justify-content-center align-items-center'>
         <div className='bg-white rounded p-3'>
            <Link to="/admin/text_section/create" className='btn btn-success' >Add Section</Link>
            <table className='table'>
                <thead> 
                    <tr>
                    <th>Text Section ID</th>
                    <th>Text Section Title</th>
                    <th>Text Section Description</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        textList.map((data,i)=>(
                            <tr key={i}>
                                <td>{data.Text_section_id}</td>
                                <td>{data.Text_section_title}</td>
                                <td>{data.Text_section_description}</td>
                                <td>
                                    <Link to={`update/${data.Text_section_id}`} className='btn btn-primary'>Update</Link>
                                    <button className='btn btn-danger ms-2' onClick={e => deleteSection(data.Text_section_id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </table>
         </div>
    </div>   

</div>

  
</div>


<Footer />

      </>
    );
  }
   

export default Text_section;