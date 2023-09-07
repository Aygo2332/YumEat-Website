import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './components/Footer';
import Categories from './components/Categories';
import Delivery from './components/Delivery';
import Featured from './components/Featured';
import Meal from './components/Meal';
import NewsLetter from './components/NewsLetter';
import TopNav from './components/TopNav';
import TopPicks from './components/TopPicks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TopNav/>
      <Featured/>
      <Delivery/>
      <TopPicks/>
      <Meal/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

