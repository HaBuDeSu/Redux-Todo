import React from 'react';
import { connect } from 'react-redux';
import { markCompleted } from '../actions/markComplete';
import { deleteTodo } from '../actions/deleteTodo';

const Todo = (props) => {
  return (
    <div>
      {props.todo.value}
      <button onClick={() => props.deleteTodo(props.todo)}>Delete Todo</button>
      <button onClick={() => props.markCompleted(props.todo)}>Mark Completed</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps, {deleteTodo, markCompleted})(Todo);
