import React from 'react'; 
import logo from './logo.svg';
import './App.css'; 
import { render } from 'react-dom';

//Class based components: 
class App extends React.Component{

  render(){
    return(
      <div style={{maxWidth:"700px", margin:"10px auto"}}> 
        <h1 className="app-title">ToDo App</h1>
         <div className="container">
           Add an item... 
         </div>
         <br/>
         <input type="text" className="input-text" placeholder="write a todo"/>
         <button className="add-btn">Add to-do</button>
         <div className="list">
           <ul>
             <li>
               <input type="checkbox" name="" id=""/>
               Read a book
               <button class="btn">Delete</button>
             </li>
           </ul>
         </div>
      </div>
    )
  }
}

export default App; 