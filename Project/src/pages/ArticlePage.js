import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticlePage = () => {
  const { Article_ID } = useParams();
  const [ArticlePage, setArticlePage] = useState(null);

  useEffect(() => {
    Axios.get(`http://localhost:3001/Articlelist/articles/${Article_ID}`)
      .then(res => setArticlePage(res.data[0])) // Assuming the result is an array with a single news item
      .catch(err => console.log(err));
  }, [Article_ID]);

  if (!ArticlePage) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h1>This is the Article PAGE!</h1>

      <div>
        <h1>{ArticlePage.Article_title}</h1>
        <p>{ArticlePage.Article_type}</p>
        <img src={ArticlePage.Article_image} alt={ArticlePage.Article_title} />
        <p>{ArticlePage.Article_Description}</p>
      </div>
    </>
  );
};

export default ArticlePage;