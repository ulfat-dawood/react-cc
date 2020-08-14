import React from 'react'; 
//çimport './App.css'; 


//Class based components: 
export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      name: '',
      gender:''
    }
  }

 handleChange(event){
   this.setState({
     //ES6 way of creating dynamic object key
     [event.target.name]:event.target.value
   })
 }

 handleSubmit(event){
   event.preventDefault(); 
   console.log(this.state); 
 }

  render(){
    return(
      <div style={{maxWidth:"700px", margin:"10px auto"}}> 
        name:
        <input type="text" name='name' value={this.state.name} onChange={e=>this.handleChange(e)}/><br/>
        gender:
        <input type="text" name='gender' value={this.state.gender} onChange={e=>this.handleChange(e)}/>

        <button onClick={(e)=>this.handleSubmit(e)}>Submit</button>
      </div>
    )
  }
}

//export default App; 