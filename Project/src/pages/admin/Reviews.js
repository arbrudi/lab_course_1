import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import AdminNav from "../../components/adminNav";
import { Link } from "react-router-dom";
import  Axios  from "axios";
import { useState, useEffect } from "react";


const Reviews = ()=>{

    const [ReviewsList, setReviewsList] = useState([]);


    useEffect(()=>{
      Axios.get("http://localhost:3001/admin/reviews")
      .then(res => setReviewsList(res.data))
      .catch(err => console.log(err))
  
  },
  [])
    
  const deleteReviews = async(Reviews_ID) => 
  {
    try{
      await Axios.delete(`http://localhost:3001/admin/reviews/delete/${Reviews_ID}`)
      window.location.reload() 
      
    }catch(err){
      console.log(err);
    }
  }

    return(
        <>
        <NavBar />
         <div className="admin_page">
         <div className="admin_nav">
         <AdminNav />
       </div>
       <div className="test">
   
         <div className='d-flex justify-content-center align-items-center'>
            <div className='bg-white rounded p-3'>
               <Link to="/admin/reviews/create" className='btn btn-success' >Create Review</Link>
               <table className='table'>
                   <thead> 
                       <tr>
                       <th>Reviews ID</th>
                       <th>Reviewer Name</th>
                       <th>Reviewer Surname</th>
                       <th>Reviews Comment</th>
                       <th>Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           ReviewsList.map((data,i)=>(
                               <tr key={i}>
                                   <td>{data.Reviews_ID}</td>
                                   <td>{data.Reviewer_Name}</td>
                                   <td>{data.Reviewer_Surname}</td>
                                   <td>{data.Reviews_Comment}</td>
                                   <td>
                                       <Link to={`update/${data.Reviews_ID}`} className='btn btn-primary'>Update</Link>
                                       <button className='btn btn-danger ms-2' onClick={e => deleteReviews(data.Reviews_ID)}>Delete</button>
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



    )


}

export default Reviews;