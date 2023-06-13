import AdminNav from '../../components/adminNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../pages/pages_css/admin_style.css";
import Axios from 'axios';
import React, {useEffect, useState } from 'react';
import NavBar from '../../components/NavBar'
import Footer from '../../components/Footer';
import {Link} from 'react-router-dom';


//Arbi
const News = ()=> {
  

  const [NewsList, setNewsList] = useState([]);


  useEffect(()=>{
    Axios.get("http://localhost:3001/admin/news")
    .then(res => setNewsList(res.data))
    .catch(err => console.log(err))

},
[])
  
const deleteNews = async(News_ID) => 
{
  try{
    await Axios.delete(`http://localhost:3001/admin/news/delete/${News_ID}`)
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
            <Link to="/admin/news/create" className='btn btn-success' >Add </Link>
            <table className='table'>
                <thead> 
                    <tr>
                    <th>News ID</th>
                    <th>News Title</th>
                    <th>News Description</th>
                    <th>News Tags</th>
                    <th>Publishing Date</th>
                    <th>News Image</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        NewsList.map((data,i)=>(
                            <tr key={i}>
                                <td>{data.News_ID}</td>
                                <td>{data.News_title}</td>
                                <td>{data.News_description}</td>
                                <td>{data.News_tags}</td>
                                <td>{data.Publishing_date}</td>
                                <td> {data.News_image && (
                                <img
                                src={data.News_image}
                                alt='News Image'
                                style={{ maxWidth: '100px', maxHeight: '100px' }}
                                 />
                                )}</td>
                                <td>
                                    <Link to={`update/${data.News_ID}`} className='btn btn-primary'>Update</Link>
                                    <button className='btn btn-danger ms-2' onClick={e => deleteNews(data.News_ID)}>Delete</button>
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
   

export default News;