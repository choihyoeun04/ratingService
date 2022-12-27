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
        
        <Route path="/" component={Home} exact />
        <Route path="/workers" component={Workers} />

      </Routes>
    </div>
  );
}

export default App;
