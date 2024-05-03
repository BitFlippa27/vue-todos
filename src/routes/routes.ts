import { 
  createRouter, 
  createWebHistory, 
} from "vue-router";

import ArchivedTodos from "./ArchivedTodos.vue";
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
    component: ArchivedTodos,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router