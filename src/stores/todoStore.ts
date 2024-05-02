import { defineStore } from "pinia";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
  loading: boolean;
};


export const useTodoStore = defineStore('todoStore', {
  state: (): State => ({
    todos: [],
    loading: false
  }),
  getters: {
    activeTodos(state: State) {
      return state.todos.filter(todo => todo.completed === false)
    },
    archivedTodos(state: State) {
      return state.todos.filter(todo => todo.completed === true)
    },
    totalActiveTodos(state: State) {
      return state.todos.reduce((prev, curr) => {
        return curr.completed === false ? prev + 1 : prev
      }, 0)
    },
    totalArchivedTodos(state: State) {
      return state.todos.reduce((prev, curr) => {
        return curr.completed === true ? prev + 1 : prev
      }, 0)
    },
  },
  actions: {
    async getTodos() {
      this.loading = true;

      const response = await fetch("https://jsonplaceholder.typicode.com/todos");
      const data = await response.json();
      this.todos = data;

      this.loading = false;
      
    },
    addTodo(todo: Todo) {
      console.log("todoStore",todo);
      this.todos.unshift(todo);
     
    },
    updateTodo(updatedTodo: Todo) {
      const index = this.todos.findIndex(todo => todo.id === updatedTodo.id)
      if (index !== -1) {
        this.todos[index] = updatedTodo;
      }
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter(todo => {
        return todo.id !== id
      })
      console.log("removeTodoo");
    },
    archiveTodo(id: number) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      } 
    },
    toggleCompleted(id: number) {
      const todo = this.todos.find(todo => todo.id === id)
      if (todo) {
        todo.completed = !todo.completed
      } 
    }
  }
});