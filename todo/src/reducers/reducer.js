import {ADD_TODO} from '../actions/addTodo';
import {DELETE_TODO} from '../actions/deleteTodo';
import {MARK_COMPLETED} from '../actions/markComplete'

const initialState = {
  todos: []
}

const reducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.value !== action.payload)
      };
    case MARK_COMPLETED:
      return {
        ...state,
        todos: state.todos.map(todo => todo.value === action.payload.value ? {value: action.payload.value, completed: !action.payload.completed} : todo)
      }
    default: return state;
  }
}

export default reducer;
