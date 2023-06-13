import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../pages/pages_css/Articlepage.css'
import CommentBook from '../components/CRUDS/Book_Managment/CommentBook';
import RatingBook from '../components/CRUDS/Book_Managment/RatingBook';
import FavoriteBook from '../components/CRUDS/Book_Managment/FavortieBook';
import EditBookComment from '../components/BookExtras/EditBookComment';

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
  
  
      
      Axios.post(`http://localhost:3001/admin/book/delete`,payload)
      .then((response)=> {
        console.log(response)
       getCommentsHandler();
      }).catch((error)=>{
        console.log(error)
      })
    }
  
    function getCommentsHandler () {
      Axios.get(`http://localhost:3001/admin/books/${ISBN}`)
      .then((response) => {
        console.log(response, "response comments")
        setBookComments([...response.data.result])
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
  
    function handleBRatingDelete(user_id,idx)  {
      const payload = {
        User_ID : user_id,
        ISBN:ISBN,
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
          getRatingHandler();
          getCommentsHandler()

          
    
         
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


<h1> comment Section</h1>
<div>
{
          BookComments?.map(((Bcomment , index)=>{
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
                      <td><div>{Bcomment.B_comments} </div></td>
                      <td> <div className="btn btn-danger" onClick={()=> handleBookCommentsDelete(Bcomment.User_ID,index)}>X</div>
                    <div className="btn btn-success" onClick={() => {setModule(!module);setIdx(index);}}>Edit</div> 
                    </td>
                    </tbody>
            </table>  
              {index == idx && 
              <EditBookComment ISBN={ISBN} userId={Bcomment.User_ID}/>
              }
             </div>

          }))
        }

</div>

<h1> Rating section </h1>
<div>

</div>




<table className='Extra_parts'>
        <thead><CommentBook/></thead>
        <thead> <RatingBook/> </thead>
        <thead> <FavoriteBook/></thead>
</table>
        <Footer />
        </>
    )
}

export default BookPage;