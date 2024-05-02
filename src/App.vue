<template>
  <main> 
    <header>
      <img src="./assets/vuejs-icon.svg" alt="Vue Logo">
      <h1> Vue Todos </h1>
    </header> 
    <div class="new-todo-form">
      <TodoForm />
    </div>
    <nav class="filter">
      <button>
        <router-link 
        :to="{ path: '/active', query: { todos: activeTodos, totalTodos: totalActiveTodos } }"
      >
        Active Todos
      </router-link>
      </button>
      <button>
        <router-link 
        :to="{ path: '/archived', query: { todos: archivedTodos, totalTodos: totalArchivedTodos                               } }"
        >
        Archived Todos
        </router-link>
      </button>
      
    </nav>
    <div class="loading" v-if="loading === true">Loading Tasks...</div>
    <router-view />
  </main>
</template>

<script setup lang="ts">
import TodoForm from "@/components/TodoForm.vue";
import { storeToRefs } from "pinia";
import { useTodoStore } from "@/stores/todoStore";



const todoStore = useTodoStore();

const { 
  activeTodos, 
  archivedTodos, 
  loading, 
  totalActiveTodos, 
  totalArchivedTodos,
} = storeToRefs(todoStore)

todoStore.getTodos();

</script>

