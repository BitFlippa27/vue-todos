import { 
  createRouter, 
  createWebHistory, 
} from "vue-router";

import ArchivedTodos from "./ArchivedTodos.vue";
import ActiveTodos from "./ActiveTodos.vue";


const routes = [
  {
    path: '/active',
    name: 'Active',
    component: ActiveTodos,
  },
  {
    path: '/archived',
    name: 'Archived',
    component: ArchivedTodos,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router