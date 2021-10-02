import { createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: []
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: v4(),
        text: action.payload.text,
        completed: false
      })
    },
    removeTodo(state, action) {
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
    },
    toggleTodoCompleted(state, action) {
      const toggledTodo = state.todos.find(
        todo => todo.id === action.payload.id
      )
      toggledTodo.completed = !toggledTodo.completed
    }
  }
})

export const { addTodo, removeTodo, toggleTodoCompleted } = todoSlice.actions
export const todoReducer = todoSlice.reducer
