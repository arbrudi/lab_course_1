import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import NavBar from "../../components/NavBar";
import AdminNav from "../../components/adminNav";
import Footer from "../../components/Footer";

const Contact =()=>{
    const [ContactList, setContactList] = useState([]);


    useEffect(()=>{
      Axios.get("http://localhost:3001/admin/contact")
      .then(res => setContactList(res.data))
      .catch(err => console.log(err))
  
  },
  [])
    
  const deleteContact = async(Contact_ID) => 
  {
    try{
      await Axios.delete(`http://localhost:3001/admin/contact/delete/${Contact_ID}`)
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
               <Link to="/admin/contact/create" className='btn btn-success' >Create Contact</Link>
               <table className='table'>
                   <thead> 
                       <tr>
                       <th>Contact ID</th>
                       <th>Contact Email</th>
                       <th>Contact Number</th>
                       <th>Contact Address</th>
                       <th>Contact City</th>
                       <th>Contact Postal Code</th>
                       <th>Actions</th>
                       </tr>
                   </thead>
                   <tbody>
                       {
                           ContactList.map((data,i)=>(
                               <tr key={i}>
                                   <td>{data.Contact_ID}</td>
                                   <td>{data.Contact_email}</td>
                                   <td>{data.Contact_number}</td>
                                   <td>{data.Contact_address}</td>
                                   <td>{data.Contact_city}</td>
                                   <td>{data.Contact_postal_code}</td>
                                   <td>
                                       <Link to={`update/${data.Contact_ID}`} className='btn btn-primary'>Update</Link>
                                       <button className='btn btn-danger ms-2' onClick={() => deleteContact(data.Contact_ID)}>Delete</button>

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

export default Contact;