import React from 'react';
import { addTodo } from '../actions/addTodo';
import { connect } from 'react-redux';

class TodoForm extends React.Component {
  constructor(){
    super();

    this.state = {
      todoName: ""
    }
  }

  changeHandler = event => {
    this.setState({
      todoName: event.target.value
    })
  }

  handleAddTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoName);
    this.setState({
      todoName: ""
    })
  }

  render() {
    return(
      <form onSubmit={this.handleAddTodo}>
        <input placeholder="Add a Todo" value={this.state.todoName} onChange={this.changeHandler}/>
        <button>Submit</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {addTodo})(TodoForm);
