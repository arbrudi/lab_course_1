import React, { useState, useEffect } from 'react';
 import NavBar from '../../components/NavBar'
 import UserNav from '../../components/userNav'
 import Footer from '../../components/Footer'
import axios from 'axios';
 
function U_FavoriteArticle() {

    const userId =JSON.parse(localStorage.getItem("userToken"))!=null?JSON.parse(localStorage.getItem("userToken")):"";

    const [Flist, setFlist] = useState([]);
    const userIdfix=userId.User;
   
 
    useEffect(() => {
      axios.get(`http://localhost:3001/user/FArticle/${userIdfix}`)
        .then((response) => {
          setFlist(response.data);
        })
        .catch(error => {
          console.log('Error retrieving Article:', error);
        });
    }, []);
  return (
    <>



    <NavBar/>
    <UserNav/>
    
    <div>U_FavoriteArticle</div>
  
            <div className="news-cont">
              {Flist.map(item => (
                <div key={item.Article_ID} className="news-part">
                  <div className="news-image">
                    <img src={item.Article_image} alt={item.title} />
                  </div>
                  <div className="news-title">
                    <h2>{item.Article_title}</h2>
                  </div>
                  <div className="news-info">
                    <p>{item.Article_type}</p>
          
   
                  </div>
                </div>
              ))}
 </div>
<Footer/>
    </>
  )
}

export default U_FavoriteArticle