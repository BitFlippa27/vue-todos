import { 
  createRouter, 
  createWebHistory, 
} from "vue-router";

const routes = [
  {
    path: '/',
    name: 'Active',
    component: () => import("../views/ActiveTodos.vue") 
  },
  {
    path: '/active',
    name: 'ActiveTodos',
    component: () => import("../views/ActiveTodos.vue") ,
  },
  {
    path: '/completed',
    name: 'CompletedTodos',
    component: () => import("../views/CompletedTodos.vue") ,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router