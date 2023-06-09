import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookList from './pages/BookList';
import BookPage from './pages/BookPage';
import ArticlePage from './pages/ArticlePage';
import PageNotFound from './pages/PageNotFound';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Register from './pages/Register'; 
import Update from './components/CRUDS/Events/Update'; 
import CreateUser from './components/CRUDS/User_Management/CreateUser';
import UpdateUser from './components/CRUDS/User_Management/UpdateUser';
import CreateArticle from './components/CRUDS/Article_Managment/CreateArticle';
import UpdateArticle from './components/CRUDS/Article_Managment/UpdateArticle';
import CreateBook from './components/CRUDS/Book_Managment/CreateBook';
import UpdateBook from './components/CRUDS/Book_Managment/UpdateBook';
import NewsList from './pages/admin/NewsList';
import News from './pages/admin/News';
import Create_News from './components/CRUDS/News_Management/Create_News';
import Update_News from '../src/components/CRUDS/News_Management/Update_News';
import Article from './pages/admin/Article';
import Book from './pages/admin/Book';
import Createe from './components/CRUDS/Events/createe';
import Events from './pages/admin/Events'; 
import NewsPage from './pages/NewsPage';
import Articlelist from './pages/admin/Articlelist';
import Createparticipants from './components/CRUDS/Events/createparticipants';
import Updateparticipants from './components/CRUDS/Events/Updateparticipants'; 
import Reviews from './pages/admin/Reviews';
import Create_Review from './components/CRUDS/Reviews_Management/Create_Review';
import Update_Reviews from './components/CRUDS/Reviews_Management/Update_Review'; 
import Joinevent from './pages/Joinevent'; 
import Text_section from './pages/admin/Text_section';
import Create_Section from './components/CRUDS/Text_Section/Create_Section';
import Update_Section from './components/CRUDS/Text_Section/Update_Section';
import SliderController from './pages/admin/SliderControllerr'; 
import Create_Slider from './components/CRUDS/SliderController.js/Create_Slider'; 
import Update_Slider from './components/CRUDS/SliderController.js/Update_Slider'; 
import { useEffect } from 'react';
import Partners from './pages/admin/Partners'; 
import Create_partners from './components/CRUDS/Partners.js/Create_partners'; 
import Update_Partner from './components/CRUDS/Partners.js/Update_partners'; 
import OurPartners from './components/OurPartners';

function App() {

  const user = localStorage.getItem("userToken");
  const admin = localStorage.getItem("adminToken");


  console.log(user,"user")
  console.log(admin ,"admin")
  return (
    <BrowserRouter>
      <div className="App"> 
        <div className="page-body">
          
          <Routes>
          {user || admin == null &&
           <>
           <Route index element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/*" element={<PageNotFound />} />
           </> 
          }
          {user &&
          <>
           <Route index element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:bookid" element={<BookPage />} />
            <Route path="/articles/:articleid" element={<ArticlePage />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/home" element={<HomePage />} />
            <Route path='/newsList' element={<NewsList />} />
            <Route path = 'newsList/news/:News_ID' element = {<NewsPage />} />
            <Route path = '/Articlelist' element = {<Articlelist />} />
            <Route path = 'Articlelist/articles/:Article_ID' element = {<ArticlePage />} /> 
          </>
          }
           
           {admin &&
           <>
           <Route index element={<HomePage />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:bookid" element={<BookPage />} />
            <Route path="/articles/:articleid" element={<ArticlePage />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/admin/events/createe" element={<Createe />} /> 
            <Route path="/admin/events/update/:Event_ID" element={<Update />} />
            <Route path="/admin/user/create" element={<CreateUser />} />
            <Route path="/admin/user/update/:User_ID" element={<UpdateUser />} />
            <Route path="/admin/articles/create" element={<CreateArticle />} />
            <Route path='/admin/articles/update/:Article_ID' element={<UpdateArticle />} />
            <Route path="/admin/books/create" element={<CreateBook />} />
            <Route path='/admin/books/update/:ISBN' element={<UpdateBook/>} />
            <Route path="/admin/books/create" element={<CreateBook />} />
            <Route path='/admin/books/update/:ISBN' element={<UpdateBook/>} />
            <Route path='/newsList' element={<NewsList />} />
            <Route path='/admin/news' element={<News />} />
            <Route path='/admin/news/create' element={<Create_News />} />
            <Route path='/admin/news/update/:News_ID' element={<Update_News />} />
            <Route path='/admin/articles' element={<Article />} />
            <Route path='/admin/books' element={<Book />} />
            <Route path='/admin/events' element={<Events />} />
            <Route path='newsList/news/:News_ID' element = {<NewsPage />} />
            <Route path='/Articlelist' element = {<Articlelist />} />
            <Route path='Articlelist/articles/:Article_ID' element = {<ArticlePage />} /> 
            <Route path="/admin/events/createparticipants" element={<Createparticipants />} /> 
            <Route path="/admin/events/Updateparticipants/:Event_ID" element={<Updateparticipants />} />
            <Route path='/admin/reviews' element={<Reviews />} />
            <Route path='/admin/reviews/create' element={<Create_Review />} />
            <Route path='/admin/reviews/update/:Reviews_ID' element={<Update_Reviews />} />
            <Route path="/joinevent/:Event_ID" element={<Joinevent />} /> 
            <Route path="/admin/text_section" element={<Text_section />} />
            <Route path="/admin/text_section/create" element={<Create_Section />} />
            <Route path="/admin/text_section/update/:Text_section_id" element={<Update_Section />} /> 
            <Route path='/admin/slidercontroller' element={<SliderController />} /> 
            <Route path='/admin/slidercontroller/create' element={<Create_Slider />} /> 
            <Route path='/admin/slidercontroller/update/:Slider_ID' element={<Update_Slider />} /> 
            <Route path='/admin/partners' element={<Partners />} /> 
            <Route path='/admin/partners/create' element={<Create_partners />} /> 
            <Route path='/admin/partners/update/:Partner_ID' element={<Update_Partner />} /> 
            <Route path='/OurPartners' element={<OurPartners />} />
           </>
           }
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
