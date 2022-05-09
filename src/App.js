import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./components/home/home";
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={ <Home /> } />   
          <Route path='/home' exact element={ <Home /> } />   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
