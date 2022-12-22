import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="appBody">
      <Header />
      <Switch>
        <Route path="/" component={Home} exact />

      </Switch>
      <Footer />
    </div>
  );
}

export default App;
