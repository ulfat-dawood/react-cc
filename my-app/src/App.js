import React from 'react'; 
import logo from './logo.svg';
import './App.css'; 
import { render } from 'react-dom';

 //Functional based components: 

//  function App(){
//    return(
//      <h1>
//         ho
//      </h1>
//    );
//  }

//  export default App; 


//Class based components: 
class App extends React.Component{

  constructor(props){
    super(props);
    this.state= {
      newItem: '',
      list: []
    }
  }

  addItem(todoValue){
    if(todoValue !=''){
      cosnt newItem={
        id: Date.now(), 
        value: todoValue,
        isDone: false 
      }
    }
  }

  render(){
    return(
      <h1>hi</h1>
    )
  }
}