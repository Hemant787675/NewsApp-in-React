import React from 'react';
import { useState, useEffect } from 'react';
import NewsStyle from './NewsStyle';

const News = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${apiKey}`;

    const fetchNews = async () => {
      try {
        const response = await fetch(url);
        
        if (response.status === 426) {
          console.error('Upgrade Required: The server wants the client to use a different protocol.');
          return;
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching the news:', error);
      }
    };

    fetchNews();
  }, [category]);

  return (
    <div>
      <h1 className='text-center text-blue-500 font-bold text-2xl py-2'>Trending News Today</h1>
      {articles && articles.map((news, i) => (
        <NewsStyle key={i} title={news.title} desc={news.description} src={news.urlToImage} url={news.url} />
      ))}
    </div>
  );
};

export default News;
