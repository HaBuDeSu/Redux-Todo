export const DELETE_TODO = "DELETE_TODO"

export const deleteTodo = (todo) => {
  return {
    type: DELETE_TODO,
    payload: todo.value
  }
}
