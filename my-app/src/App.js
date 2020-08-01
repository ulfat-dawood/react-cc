import React from 'react'; 
import logo from './logo.svg';
import './App.css'; 
import { render } from 'react-dom';

//Class based components: 
class App extends React.Component{

  constructor(props){
    super(props);
    this.state={
      newItem: {},
      list:[]
    }
  }

  addItem(todoValue){
    if(todoValue !==""){
       const newItem={
         id: Date.now(),
         value: todoValue,
         isDone: false 
       }
       const list=[...this.state.list]
       list.push(newItem);  
       this.setState({
         list, 
         newItem: {}
       }); 
    }
  }

  deleteItem(id){
    const list= [...this.state.list] 
    const updatedList=  list.filter((item)=>item.id !== id);
    this.setState({list: updatedList}); 
  }

  updateInput(input){
    this.setState({newItem: input}); 
  }

  handleChecked(id){
    
    const list= [...this.state.list]  
    list.map(item=> {item.id=id?item.isDone=!item.isDone:null})
    this.setState({list}); 
  }

  render(){
    return(
      <div style={{maxWidth:"700px", margin:"10px auto"}}> 
        <h1 className="app-title">ToDo App</h1>
         <div className="container">
           Add an item... 
         </div>
         <br/>
         <input type="text" className="input-text" placeholder="write a todo"
         value={this.state.newItem.value} onChange={e => this.updateInput(e.target.value)}/>
         <button className="add-btn"
         onClick={()=>this.addItem(this.state.newItem)}
         disabled={!this.state.newItem.length}
         >Add to-do</button>
         <div className="list">
           <ul>
             {this.state.list.map(item=>{
               return(
                 <li key={item.id}>
                  <input type="checkbox" checked={item.isDone} onChange={()=>this.handleChecked(item.id)}/>
                  {item.value }
                  <button class="btn"
                  onClick={()=>this.deleteItem(item.id)}
                  >Delete</button>
                 </li>
               )
             })}
            
           </ul>
         </div>
      </div>
    )
  }
}

export default App; 