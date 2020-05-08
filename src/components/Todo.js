import React from 'react';
import { Card } from 'semantic-ui-react';
import './Todo.css';

const Todo = (props) => {
  const handleClick = e => {
    props.toggleCompleted(props.todo.id);
  }

  return (
    <Card 
      onClick={handleClick} 
      className={`${props.todo.completed ? "completed" : ""}`}
      header={props.todo.task}
    />
  
  );
}

export default Todo;