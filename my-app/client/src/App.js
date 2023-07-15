import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./Login";
import Signup from "./Signup";
import HomePage from "./Home_Page";
import { useSelector } from "react-redux";

function App() {
  let isLoggedIn = Boolean(useSelector(state => state.token));
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomePage /> : <Login />} default />
        <Route path="Signup" element={<Signup />} />
        <Route path="Home" element={isLoggedIn ? <HomePage /> : <Login />} />
      </Routes>
    </HashRouter>
  );
}
export default App;
