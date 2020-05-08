import React from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: [] };
  }

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      })
    });
  }

  addNewTodo = (task) => {
    this.setState({
      todos: [
        ...this.state.todos,
        { task, id: Date.now(), completed: false }
      ]
    });
  }

  clearCompleted = () => {
    this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
    });
  }
  
  render() {
    return (
      <Container>
        <Header as='h1'>Adam's Todo List</Header>
        <Divider hidden />
        <TodoList 
          todos={this.state.todos} 
          toggleCompleted={this.toggleCompleted} 
        />
        <TodoForm 
          addNewTodo={this.addNewTodo} 
          clearCompleted={this.clearCompleted} 
        />
      </Container>
    );
  }
}

export default App;
