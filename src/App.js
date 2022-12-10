
import './App.css';
import React, { useState, useEffect } from 'react';
import NewsDta from "./component/news";
import CategoryNews from './component/category';
import { tab } from '@testing-library/user-event/dist/tab';
// import CategoryNewsData from './component/categoryNews';

function App() {
  let [news, setNews] = useState([])

  // 3. Create useEffect function ///Top 10 News  
  useEffect(() => {
    fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=c8142a3477794ffaab3dbf211457df94")
      .then(response => response.json())
      .then(data => {
        // console.log(data)
        setNews(data.articles)
      })
  }, [])
  // console.log(news)

// Function for new tab
  const openNewTab = (url) => {
    console.log(url)
    window.open(url, '_blank');
  }




  // function FOR Category News
  const categoryClick = (category) => {
    // fetch(`https://newsapi.org/v2/top-headlines/sources?category=${category}&pageSize=20&apiKey=c8142a3477794ffaab3dbf211457df94`)
    fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=b226f1e77746421089a2c04357808a9c`)
      .then(response => response.json())
      .then(data => {
        setNews(data.articles)
      })
  }
  console.log(news)

  return (
    <div className='parentDiv'>
      <CategoryNews
        CategoryNews={categoryClick}
      />
    <h1>Top 10 News </h1> 
      <NewsDta
        TopNews={news}
        Newpage={openNewTab}
      />
      {/* < CategoryNewsData /> */}
    </div>
  )

}

export default App;
