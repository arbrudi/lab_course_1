import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../pages/pages_css/Articlepage.css'

const BookPage = ()=>{
    const { ISBN } = useParams();
    const [BookPage, setBookPage] = useState(null);
    const [ BookComments , setBookComments] = useState();
    const [ BRating , setBRating] = useState();
    const [ module , setModule] = useState(false);
    const [ idx , setIdx ] = useState();
  
  
    function handleBookCommentsDelete (user_id,idx)  {
      const payload = {
        User_ID : user_id,
        ISBN:ISBN,
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
      Axios.get(`http://localhost:3001/admin/BRating/${ISBN}`)
      .then((response) => {
        console.log(response, "response Rating")
        setBRating([...response.data.result])
      }).catch((error) => {
        console.log(error)
      })
    }
  
    function handleRatingDelete(user_id,idx)  {
      const payload = {
        User_ID : user_id,
        Article_ID:Article_ID,
      }
  
  
      
      Axios.post(`http://localhost:3001/admin/BRating/delete`,payload)
      .then((response)=> {
        console.log(response)
        getRatingHandler();
      }).catch((error)=>{
        console.log(error)
      })
    }

    useEffect(() => {
        Axios.get(`http://localhost:3001/BooksList/books/${ISBN}`)
          .then(res => setBookPage(res.data[0]))
          .catch(err => console.log(err));
    

          
    
         
      }, [ISBN]);

    
  if (!BookPage) {
    return <div>Loading...</div>;
  }
    return(
        <>
        <NavBar />
        <div className="A_text"> 
  
  <h1 className="Title">Title:"{BookPage.Book_title}" </h1>
  <h1 className="Type">Type:{BookPage.Book_genre}</h1>
  </div>
 
<div className="A_info">
 <img className="Img" src={BookPage.Book_image} alt={BookPage.Book_title} />
  <p className="Description">{BookPage.Book_description}</p>
</div>
        <Footer />
        </>
    )
}

export default BookPage;