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
  filterOption: string;
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
    filterOption: "",
  }),
  getters: {
    activeTodos: (state: State) =>{
      return state.todos.filter(todo => todo.completed === false)
    }, 
    completedTodos: (state: State) =>{
      return state.todos.filter(todo => todo.completed === true)
    }, 
    filteredTodos: (state: State) => {
      let filteredTodos = state.todos.filter(todo => 
        state.filterOption ? todo.completed : !todo.completed);

        return filteredTodos;
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
    /*
    filteredByDate: (state: State) => (filteredTodos: Todo[]) => {
      return filteredTodos.slice().sort((a, b) => a.date.getTime() - b.date.getTime())
    },
    */
    totalActiveTodos(state: State) {
      return state.todos.reduce((prev, curr) => {
        return curr.completed === false ? prev + 1 : prev
      }, 0)
    },
    totalCompletedTodos(state: State) {
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
    setFilterOption(newOption: string) {
      this.filterOption = newOption;
    }
  }
});