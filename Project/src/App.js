import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookList from './pages/BookList';
import BookPage from './pages/BookPage';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import PageNotFound from './pages/PageNotFound';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import Register from './pages/Register'; 
import Createe from './pages/createe';
import Update from './pages/Update'; 
import CreateUser from './components/CRUDS/User_Management/CreateUser';
import UpdateUser from './components/CRUDS/User_Management/UpdateUser';
import CreateArticle from './components/CRUDS/Article_Managment/CreateArticle';
import UpdateArticle from './components/CRUDS/Article_Managment/UpdateArticle';

<<<<<<< HEAD

=======
import CreateBook from './components/CRUDS/Book_Managment/CreateBook';
import UpdateBook from './components/CRUDS/Book_Managment/UpdateBook';
>>>>>>> 58ca2004a1849e1d099974dec6e51c848e913ed9

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        

        <div className="page-body">
          <Routes>

            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:bookid" element={<BookPage />} />
            <Route path="/articles" element={<ArticleList />} />
            <Route path="/articles/:articleid" element={<ArticlePage />} />
            <Route path="/user" element={<UserDashboard />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/create" element={<Createe />} /> 
            <Route path="/update/:Event_ID" element={<Update />} />
            <Route path="/admin/user/create" element={<CreateUser />} />
            <Route path="/admin/user/update/:User_ID" element={<UpdateUser />} />
            <Route path="/admin/articles/create" element={<CreateArticle />} />

            <Route path='/admin/articles/update/:Article_ID' element={<UpdateArticle />} />
<<<<<<< HEAD
           
=======
            <Route path="/admin/books/create" element={<CreateBook />} />
            <Route path='/admin/books/update/:ISBN' element={<UpdateBook/>} />

>>>>>>> 58ca2004a1849e1d099974dec6e51c848e913ed9

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
