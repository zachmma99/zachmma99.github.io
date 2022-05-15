import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Home from "./components/home/home";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';

function App() {
  return (
    <div className='container'>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element= { <Navigate to="/home" /> } /> 
          <Route path='/home' exact element={ <Home /> } />
          <Route path='/about' exact element={ <Contact /> } />
          <Route path='/projects' exact element={ <Projects /> } />
          <Route path='/blog' exact element={ <Contact /> } />
          <Route path='/contact' exact element={ <Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
