import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      <h1>This is the NEWS PAGE!</h1>

      <div>
        <h1>{newsPage.News_title}</h1>
        <p>{newsPage.Publishing_date}</p>
        <p>{newsPage.News_tags}</p>
        <img src={newsPage.News_image} alt={newsPage.title} />
        <p>{newsPage.News_description}</p>
      </div>
    </>
  );
};

export default NewsPage;
