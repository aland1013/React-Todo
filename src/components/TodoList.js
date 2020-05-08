import React from 'react';
import { Card } from 'semantic-ui-react';
import Todo from './Todo';

const TodoList = props => {
  console.log(props);
  return (
    <Card.Group itemsPerRow={4}>
      {props.todos.map(todo => (
        <Todo 
          todo={todo} 
          key={todo.id} 
          toggleCompleted={props.toggleCompleted} 
        />
      ))}
    </Card.Group>
  );
}

export default TodoList;