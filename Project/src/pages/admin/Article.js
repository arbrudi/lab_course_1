import AdminNav from '../../components/adminNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../pages/pages_css/admin_style.css";
import Axios from 'axios';
import React, {useEffect, useState } from 'react';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';


function Article() {


    const [Article_list, setArticle_list] = useState([]);


    useEffect(()=>{
      Axios.get("http://localhost:3001/admin/articles")
      .then(res => setArticle_list(res.data))
      .catch(err => console.log(err))
  
  },
  [])
    
  const deletearticles = async(Article_ID) => 
  {
    try{
      await Axios.delete(`http://localhost:3001/admin/articles/delete/${Article_ID}`)
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
            <Link to="/admin/articles/create" className='btn btn-success' >Add +</Link>
            <table className='table'>
                <thead> 
                    <tr>
                    <th>ID</th>
                    <th>Article_image</th>
                    <th>Article_title</th>
                    <th>Article_type</th>
                    <th>Article_Description</th>
                    <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Article_list.map((data,i)=>(
                            <tr key={i}>
                                <td>{data.Article_ID}</td>
                                <td> {data.Article_image && (
                    <img
                    src={data.Article_image}
                      alt='Article Image'
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  )}</td>
                                <td>{data.Article_title}</td>
                                <td>{data.Article_type}</td>
                                <td>{data.Article_Description}</td>
                                <td>
                                    <Link to={`update/${data.Article_ID}`} className='btn btn-primary'>Update</Link>
                                    <button className='btn btn-danger ms-2' onClick={e => deletearticles(data.Article_ID)}>Delete</button>
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

export default Article