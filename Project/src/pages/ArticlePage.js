import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../pages/pages_css/Articlepage.css'

import CommentArticle from "../components/CRUDS/Article_Managment/CommentArticle";
import RatingArticle from "../components/CRUDS/Article_Managment/RatingArticle";
import FavoriteArticle from "../components/CRUDS/Article_Managment/FavoriteArticle";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const ArticlePage = () => {
  const { Article_ID } = useParams();
  const [ArticlePage, setArticlePage] = useState(null);

  useEffect(() => {
    Axios.get(`http://localhost:3001/Articlelist/articles/${Article_ID}`)
      .then(res => setArticlePage(res.data[0]))
      .catch(err => console.log(err));
  }, [Article_ID]);

  if (!ArticlePage) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavBar/>
       
      <div className="A_text"> 
  
        <h1 className="Title">Title:"{ArticlePage.Article_title}" </h1>
        <h1 className="Type">Type:{ArticlePage.Article_type}</h1>
        </div>
       
      <div className="A_info">
       <img className="Img" src={ArticlePage.Article_image} alt={ArticlePage.Article_title} />
        <p className="Description">{ArticlePage.Article_Description}</p>
      </div>
      <h1>Comment Section</h1>



<table className="Extra_parts">
  <thead><CommentArticle/></thead>
  <thead><RatingArticle/></thead>
  <thead><FavoriteArticle/> </thead>
</table>
    
    
 

    <Footer/>
   </>
  );
};

export default ArticlePage;