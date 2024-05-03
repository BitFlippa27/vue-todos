<template>
  <main> 
    <header>
      <img src="./assets/vuejs-icon.svg" alt="Vue Logo">
      <h1> Vue Todos </h1>
      <nav class="filter">
        <button>
          <router-link 
          :to="{ path: '/active'}"
        >
          Active Todos
        </router-link>
        </button>
        <button>
          <router-link 
          :to="{ path: '/archived'}"
        >
          Completed Todos
          </router-link>
        </button>
    </nav>
    </header> 
    <div class="new-todo-form">
      <TodoForm />
    </div>
      <router-view />
  </main>
</template>

<script setup lang="ts">
import TodoForm from "@/components/TodoForm.vue";
import { onMounted } from 'vue';
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();

onMounted(() => {
     todoStore.getTodos();
   });


</script>

