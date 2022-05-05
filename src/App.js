import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css';

import Home from "./components/home/home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={ <Home /> } />   
          <Route path="/home" exact element={ <Home /> } />   
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
