import React from 'react'; 
//çimport './App.css'; 


//Class based components: 
export default class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      text: ''
    }
  }

 handleChange(text){
   this.setState({
     text:text
   })
 }

 handleSubmit(){
  alert(this.state.text); 
 }

  render(){
    return(
      <div style={{maxWidth:"700px", margin:"10px auto"}}> 
        <input type="text" value={this.state.text} onChange={e=>this.handleChange(e.target.value)}/>
        <button onClick={()=>this.handleSubmit()}>Submit</button>
      </div>
    )
  }
}

//export default App; 