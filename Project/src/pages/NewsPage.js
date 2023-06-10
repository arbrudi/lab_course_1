import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './pages_css/News_Page.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const NewsPage = () => {
  const { News_ID } = useParams();
  const [newsPage, setNewsPage] = useState(null);

  useEffect(() => {
    Axios.get(`http://localhost:3001/newsList/news/${News_ID}`)
      .then(res => setNewsPage(res.data[0])) 
      .catch(err => console.log(err));
  }, [News_ID]);

  if (!newsPage) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <NavBar />

      <div className="news-page-container">
        <div className="news-title">
        <h1>{newsPage.News_title}</h1>
        </div>
        <div className="news-img">
        <img src={newsPage.News_image} alt={newsPage.title} />
        </div>
        <div className="description"> 
        <p> {newsPage.News_description}</p>
        </div>
        <div className="news-foot">
        <p>Publishing date: {newsPage.Publishing_date}</p>
        <div className="news-tag">
        <p>Tags: {newsPage.News_tags}</p>
        </div>
        </div>
        </div>
        
 <Footer />
    </>
  );
};

export default NewsPage;
