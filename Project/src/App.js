import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
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
    </div>
    <div className="page-body">
    <Routes>
    <Route path="/" element = {<HomePage />} />
    <Route path="/about" element = {<AboutPage />} />
    <Route path="/books" element = {<BookList />} />
    <Route path="/books/:bookid" element = {<BookPage />} />
    <Route path="/articles" element = {<ArticleList />} />
    <Route path="/articles/:articleid" element = {<ArticlePage />} />
    <Route path="/UserDashboard" element = {<UserDashboard />} />
    <Route path="/AdminDashboard" element = {<AdminDashboard />} />
    <Route path="/*" element = {<PageNotFound />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
