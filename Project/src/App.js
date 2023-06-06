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
import CreateBook from './components/CRUDS/Book_Managment/CreateBook';
import UpdateBook from './components/CRUDS/Book_Managment/UpdateBook';
import NewsList from './pages/admin/NewsList';
import News from './pages/admin/News';
import Create_News from './components/CRUDS/News_Management/Create_News';
import Update_News from '../src/components/CRUDS/News_Management/Update_News';
import Article from './pages/admin/Article';
import Book from './pages/admin/Book';



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

          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
