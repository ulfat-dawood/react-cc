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
      name:'',
      balance: 0
    }
  }

  handleChange(name){
    this.setState({
      name: name
    });
  }

  render(){
    return(
      <div>
        <input 
        type="text" 
        value={this.state.name} 
        onChange={e=> this.handleChange(e.target.value)}>
        
        </input>
      </div>
    )
  }
}