import { defineStore } from "pinia";

type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

type State = {
  todos: Todo[];
};


export const useTodoStore = defineStore('todoStore', {
  state: (): State => ({
    todos: [
      {id: 1, title: "Coden", completed: false},
      {id: 2, title: "Sprinten", completed: true},
      {id: 3, title: "BJJ", completed: false},
    ]
  }),
  getters: {
    activeTodos: (state: State) => {
      return state.todos.filter(todo => todo.completed === false)
    },
    completedTodos: (state: State) => {
      return state.todos.filter(todo => todo.completed === true)
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
    }
  }
});