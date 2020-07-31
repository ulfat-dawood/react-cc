import React from 'react'; 
import logo from './logo.svg';
import './App.css'; 
import { render } from 'react-dom';

//Class based components: 
class App extends React.Component{

  render(){
    return(
      <div>
        <h1 className="app-title">ToDo App</h1>
         <div className="container">
           Add an item... 
         </div>
         <br/>
         <input type="text" className="input-text" placeholder="write a todo"/>
      </div>
    )
  }
}