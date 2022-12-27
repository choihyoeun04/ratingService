import React from "react";
import Header from "./Header";
import "./App.css";
import Workers from "./Workers";
import { Routes ,Route } from 'react-router-dom';
import Home from "./Home";


function App() {
  return (
    <div className="appBody">
      <Header />
      <Routes>
        
        <Route path="/" element={<Home />} exact />
        <Route path="/workers" element={<Workers />} />

      </Routes>
    </div>
  );
}

export default App;
