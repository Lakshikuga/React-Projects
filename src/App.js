import React from 'react';
import './App.css';
import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import SignUp from './components/pages/SignUp';
import Customer from './components/Customer';
import Ads from './components/ads';
import { Routes } from 'react-router-dom';




function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}/>
        
        <Route path="/ads_image" component={Ads} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
