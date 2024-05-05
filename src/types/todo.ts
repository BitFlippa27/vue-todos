export type Todo = {
  id: number;
  title: string;
  completed: boolean;
  priority: number;
  date: Date;
};

export type State = {
  todos: Todo[];
  loading: boolean;
  searchString: string;
  priority: number;
  date: Date;
};
