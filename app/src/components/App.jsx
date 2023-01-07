import React from "react";
import Header from "./Header";
import "./App.css";
import Workers from "./Workers";
import { Routes ,Route } from 'react-router-dom';
import Home from "./Home";
import SignUp from "./SignUp";
import LogIn from "./LogIn";
import Footer from "./Footer";


function App() {
  return (
    <div className="appBody">
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} exact />
        <Route path="/workers" element={<Workers />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
