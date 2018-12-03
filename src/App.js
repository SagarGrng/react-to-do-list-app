import React, { Component } from 'react'
import ToDo from './ToDoList'
import AddNewList from './AddList';

class App extends Component {
  state = {
    toDoList:[
      {id:1,title:"Buy food"},
      {id:2,title:"Learn React"},
      {id:3,title:"Play Games"}
    ]
  }
  deleteList = (id) => {
      let list = [...this.state.toDoList];
      const updatedList = list.filter(lis => {
        return lis.id != id
      })
      this.setState({
        toDoList:updatedList
      })
  }
  addNewList = (newList) => {
    newList.id = Math.random()
    let myNewList = [...this.state.toDoList, newList]
    this.setState({
      toDoList:myNewList
    })
    console.log(this.state)
  }
  render() {
    return (
      <div className="myapp container">
      <h2 className="text-center blue-text">To DO List</h2>
        <ToDo toDoList = {this.state.toDoList} deleteList = {this.deleteList}/>
        <AddNewList newList = {this.addNewList}/>
      </div>
    );
  }
}

export default App;
