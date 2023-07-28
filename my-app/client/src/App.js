import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Login from "./Login";
import Signup from "./Signup";
import HomePage from "./Home_Page";
import { useSelector } from "react-redux";
import HomePageNotify from "./Sections/HomePage_Notify";
import Admin from "./Sections/Admin";
function App() {
  let isLoggedIn = Boolean(useSelector((state) => state.token));
  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <HomePage /> : <Login />}
          default
        />
        <Route path="Signup" element={<Signup />} />
        <Route path="Home" element={isLoggedIn ? <HomePage /> : <Login />} />
        <Route
          path="userProfile"
          element={isLoggedIn ? <HomePageNotify /> : <Login />}
        />
        <Route
          path="Admin"
          element={isLoggedIn ? <Admin /> : <Login />}
        />
      </Routes>
    </HashRouter>
  );
}
export default App;
