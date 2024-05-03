import { 
  createRouter, 
  createWebHistory, 
} from "vue-router";

import CompletedTodos from "./CompletedTodos.vue";
import ActiveTodos from "./ActiveTodos.vue";


const routes = [
  {
    path: '/',
    name: 'Active',
    component: ActiveTodos // specify your Home component here
  },
  {
    path: '/active',
    name: 'ActiveTodos',
    component: ActiveTodos,
  },
  {
    path: '/archived',
    name: 'ArchivedTodos',
    component: CompletedTodos,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router