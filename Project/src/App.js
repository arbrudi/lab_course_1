import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BookList from './pages/BookList';
import BookPage from './pages/BookPage';
import ArticleList from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import PageNotFound from './pages/PageNotFound';
import UserDashboard from './pages/UserDashboard';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
   
    <div className="page-body">
    <Routes>
    <Route path="/" element = {<HomePage />} />
    <Route path="/about" element = {<AboutPage />} />
    <Route path="/books" element = {<BookList />} />
    <Route path="/books/:bookid" element = {<BookPage />} />
    <Route path="/articles" element = {<ArticleList />} />
    <Route path="/articles/:articleid" element = {<ArticlePage />} />
    <Route path="/userdashboard" element = {<UserDashboard />} />
    <Route path="/admindashboard" element = {<AdminDashboard />} />
    <Route path="/*" element = {<PageNotFound />} />
    </Routes>
    </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
