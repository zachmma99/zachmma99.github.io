import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./components/home/home";
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className='container'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={ <Home /> } />   
          <Route path='/home' exact element={ <Home /> } />   
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
