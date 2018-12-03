import React, {Component} from 'react';

const ToDo = (props) =>{

  const myToDoList = props.toDoList.length ? (
    props.toDoList.map(todo => {
        return (
          <div className="collection-item" key={todo.id}>
            <span>{todo.title}</span>
            <p className="right-align">
            <button className="waves-effect waves-light btn" onClick={() => {props.deleteList(todo.id)}}>Delete</button>
            </p>
          </div>
        )
      })
  ) : (
      <p>There are no todo list left now!</p>
  )
  return(
    <div className="collection">
      {  myToDoList  }
    </div>
  )
}


export default ToDo
