export const MARK_COMPLETED = "MARK_COMPLETED"

export const markCompleted = (todo) => {
  return {
    type: MARK_COMPLETED,
    payload: todo
  }
}
