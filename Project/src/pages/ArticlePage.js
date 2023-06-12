import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../pages/pages_css/Articlepage.css'
import CommentArticle from "../components/CRUDS/Article_Managment/CommentArticle";
import RatingArticle from "../components/CRUDS/Article_Managment/RatingArticle";
import FavoriteArticle from "../components/CRUDS/Article_Managment/FavoriteArticle";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EditComment from "../components/editComment/EditComment";

const ArticlePage = () => {
  const { Article_ID } = useParams();
  const [ArticlePage, setArticlePage] = useState(null);
  const [ comments , setComments] = useState();
  const [ ARating , setARating] = useState();
  const [ module , setModule] = useState(false);
  const [ idx , setIdx ] = useState();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  console.log(ARating,"ARating")
  console.log(comments , "comment")

  function handleCommentsDelete (user_id,idx)  {
    const payload = {
      User_ID : user_id,
      Article_ID:Article_ID,
    }
    Axios.post(`http://localhost:3001/admin/article/delete`,payload)
    .then((response)=> {
      console.log(response)
     getCommentsHandler();
    }).catch((error)=>{
      console.log(error)
    })
  }

  function getCommentsHandler () {
    Axios.get(`http://localhost:3001/admin/article/${Article_ID}`)
    .then((response) => {
      console.log(response, "response comments")
      setComments([...response.data.result])
    }).catch((error) => {
      console.log(error)
    })
  }

  function getRatingHandler () {
    Axios.get(`http://localhost:3001/admin/ARating/${Article_ID}`)
    .then((response) => {
      console.log(response, "response Rating")
      setARating([...response.data.result])
    }).catch((error) => {
      console.log(error)
    })
  }


  useEffect(() => {
    Axios.get(`http://localhost:3001/Articlelist/articles/${Article_ID}`)
      .then(res => setArticlePage(res.data[0]))
      .catch(err => console.log(err));

      getCommentsHandler();
      getRatingHandler();

     
  }, [Article_ID]);

  if (!ArticlePage) {
    return <div>Loading...</div>;
  }

  console.log(ARating,"Arate")

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
       <div>
        
        {
          comments?.map(((comment , index)=>{
            return <div>

          
                  <table>
                    <thead>
                      <tr> 
                          <th>Username</th>
                          <th>Comment</th>
                          <th>Action</th>
                         
                      </tr>
                    </thead>
                  <tbody>
                      <td>Username</td>
                      <td><div>{comment.A_comments} </div></td>
                      <td> <div className="btn btn-danger" onClick={()=> handleCommentsDelete(comment.User_ID,index)}>X</div>
                    <div className="btn btn-success" onClick={() => {setModule(!module);setIdx(index);}}>Edit</div> 
                    </td>
                    </tbody>
            </table>  
              {index == idx && 
              <EditComment articleId={Article_ID} userId={comment.User_ID}/>
              }
             </div>

          }))
        }
       </div>
       
        <h2>Rating</h2>

        
          <div className="rating-container">
            {
          ARating?.map(((ARate, index)=>(
            
            <div className="star-rating">
            {[...Array(ARate.A_Rating)].map((star, index) => {
              index += 1;
              return (
                <button
                  type="button"
                  key={index}
                  className={"button on"}
                >
                  <span className="star">&#9733;</span>
                </button>
              );
            })}
          </div>
          )))
}
          </div>
        
        

       <div>

       


       </div>


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