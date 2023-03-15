import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
}

export default todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodosReducer: (state, action) => {
      state.todos = action.payload;
      console.log(state.todos);
    },
    addTodoReducer: (state, action) => {
      state.todos.push(action.payload)
    },
    hideCompileReducer:(state) => {
      state.todos.filter(todo => todo.isCompleted === false)
    },
  }
})