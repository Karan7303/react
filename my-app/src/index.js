import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import './index.css';
import App from './App';
import Login from './Login'
import Signup from './Signup'
import HomePage from './Home_Page' 


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} default/>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="Home" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

