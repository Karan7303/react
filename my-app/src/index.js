import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter,Route,Routes } from 'react-router-dom'
import './index.css';
import Post from './Post';
import Login from './Login'
import Signup from './Signup'
import HomePage from './Home_Page' 
import store from './store'
import { Provider } from 'react-redux'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>} default/>
      <Route path="Signup" element={<Signup/>}/>
      <Route path="Home" element={<HomePage/>}/>


    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

