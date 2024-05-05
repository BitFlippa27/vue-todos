import ActiveTodos from "@/routes/ActiveTodos.vue";
import { defineStore } from "pinia";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
  priority: number;
  date: Date;
};

type State = {
  todos: Todo[];
  loading: boolean;
  searchString: string;
  priority: number;
  date: Date;
};


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
          return 0; //considered euqal in terms of sorting
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