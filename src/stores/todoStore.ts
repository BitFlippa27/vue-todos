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
      {id: 2, title: "Sprinten", completed: false},
    ]
  })
});