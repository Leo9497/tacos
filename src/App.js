import logo from './logo.svg';
import './App.css';
import NavBar from "./pages/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import  Menu  from "./pages/Menu";


function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
          
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

/*
import React from 'react';
import GoogleMap from './components/GoogleMap'

function App() {
  return (
    <div className="App">
      <h1>Unbicacion</h1>
      <GoogleMap />
    </div>
  )
}

export default App;*/
