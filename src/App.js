import './App.css';
import NavBar from "./pages/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import  Home  from "./pages/Home";
import  Menu  from "./pages/Menu";
import  Servicios  from "./pages/Servicios";
import Galería from "./pages/Galería"

 // eslint-disable-next-line 
function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/servicios" component={Servicios} />
            <Route path="/galería" component={Galería} />
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
