import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import React from 'react';
import styles from '../pages/pages_css/ArticleListPage.module.css';

const ArticleList = ()=>{

  
  
   

    return(
        <>
        <NavBar />
        
         <div className={styles.container}>
          <h1>Article List</h1>
          <ul className={styles.articleList}>
            {articles.map(article => (
              <li key={article.id} className={styles.articleItem}>
                <h2>{article.title}</h2>
                <p>Author: {article.author}</p>
              </li>
            ))}
          </ul>
        </div>


        <Footer />
        </>
    );
 };

export default ArticleList;