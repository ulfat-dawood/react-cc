import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom'; 
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Homepage from './components/Homepage'; 
import Login from './components/Login'; 
import Signup from './components/Signup'; 
import NotFound from './components/NotFound'; 

const routing= (
  <Router>
    <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route  path='/login' component={Login}/>
      <Route  path='/signup' component={Signup}/>
      <Route  component={NotFound}/> //404 route doesn't exist
    </Switch>
  </Router>
)
ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
