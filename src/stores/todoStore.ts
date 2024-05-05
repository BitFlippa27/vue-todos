import { defineStore } from "pinia";
import type { Todo } from "../types/todo";
import type { State } from "../types/todo";

/**
 * Pinia Statemanagement Store
 * Getters of the store.
 * The result of every getter is a computed value from the one state array Todo.
 * @typedef {Object} Getters
 * @property {function(State): Todo[]} activeTodos - Returns an array of active todos.
 * @property {function(State): Todo[]} completedTodos - Returns an array of completed todos.
 * @property {function(State): function(Todo[]): Todo[]} searchedTodos - Returns an array of todos that include the searchString in their title.
 * @property {function(State): function(Todo[]): Todo[]} filteredByPriority - Returns an array of todos sorted by their priority.
 * @property {function(State): function(Todo[]): Todo[]} filteredByDate - Returns an array of todos sorted by their date where if (!a.date || !b.date) 
 * is considered equal in terms of sorting and will be omitted.
 * @property {function(State): number} totalActiveTodos - Returns the total number of active todos.
 * @property {function(State): number} totalCompletedTodos - Returns the total number of completed todos.
 */

/**
 * Actions of the store.
 * @typedef {Object} Actions
 * @property {function(): Promise<void>} getTodos - Fetches todos and updates the todos state array.
 * @property {function(Todo): void} addTodo - Adds a new todo to the beggining of the todos state array.
 * @property {function(Todo): void} updateTodo - Updates an existing todo in the state.
 * @property {function(Todo): void} deleteTodo - Deletes a todo from the state.
 * @property {function(): void} toggleCompleted - Updates the completed property of the todo to completed or active.
 * @property {function(): void} setSearchString - sets the string from the searchfield to use it for the searchedTodos getter.
 */


export const useTodoStore = defineStore('todoStore', {
  state: (): State => ({
    todos: [],
    loading: false,
    searchString: "",
    priority: 1,
    date: new Date(),
  }),
  getters: {
    activeTodos: (state: State) => {
      return state.todos.filter(todo => todo.completed === false)
    }, 
    completedTodos: (state: State) =>{
      return state.todos.filter(todo => todo.completed === true)
    }, 
    
    searchedTodos: (state: State) => (filteredTodos: Todo[]) => {
      if (state.searchString) {
        filteredTodos = filteredTodos.filter(todo => 
        todo.title.toLowerCase().includes(state.searchString.toLowerCase()));
    }
      return filteredTodos;
    },
    filteredByPriority: (state: State) => (filteredTodos: Todo[]) => {
      return filteredTodos.slice().sort((a, b) => a.priority - b.priority)
    },
    filteredByDate: (state: State) => (filteredTodos: Todo[]) => {
      return filteredTodos.slice().sort((a, b) => {
        if (!a.date || !b.date) {
          return 0; 
        }
        return a.date.getTime() - b.date.getTime();
      })
    },
    totalActiveTodos: (state: State) => {
      return state.todos.reduce((prev, curr) => {
        return curr.completed === false ? prev + 1 : prev
      }, 0)
    },
    totalCompletedTodos: (state: State) => {
      return state.todos.reduce((prev, curr) => {
        return curr.completed === true ? prev + 1 : prev
      }, 0)
    },
  },
  actions: {
    async getTodos() {
      this.loading = true;
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        this.todos = data;
        this.loading = false;
      } catch (error) {
        if (error instanceof TypeError) {
          console.error("Network error or CORS misconfigured on the server-side: ", error);
          this.loading = false;
        } else if (error instanceof Error) {
          console.error("HTTP error: ", error);
          this.loading = false;
        } else {
          console.error("Unknown error: ", error);
          this.loading = false;
        }
      } finally {
        this.loading = false;
      }
    },
    addTodo(todo: Todo) {
      this.todos.unshift(todo);     
    },
    updateTodo(updatedTodo: Todo) {
      const index = this.todos.findIndex(todo => todo.id === updatedTodo.id)
      if (index !== -1) {
        this.todos = [
          ...this.todos.slice(0, index),
          updatedTodo,
          ...this.todos.slice(index + 1)
        ];
      }
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id
      })
    },
    toggleCompleted(id: number) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      } 
    },
    setSearchString(newSearchString: string) {
      this.searchString = newSearchString;
    },
  }
});