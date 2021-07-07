import React from 'react';
import { Input, Button } from 'semantic-ui-react';

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = { newTodoText: '' }; 
  }

  handleChange = e => {
    this.setState({ newTodoText: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.newTodoText) {
      this.props.addNewTodo(this.state.newTodoText);
      this.setState({ newTodoText: '' });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input 
          type="text" 
          name="todo" 
          value={this.state.newTodoText} 
          onChange={this.handleChange} 
        />
        <Button primary type="submit">Add Todo</Button>
        <Button secondary onClick={this.props.clearCompleted}>Clear Completed</Button>
      </form>
    );
  }
}

export default TodoForm;