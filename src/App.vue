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
      <button @click="filter = 'active'">Active Todos</button>
      <button @click="filter = 'archived'">Archived Todos</button>
    </nav>
    <div class="loading" v-if="loading === true">Loading Tasks...</div>
    <TodoList 
      :todos="activeTodos" 
      :totalTodos="totalActiveTodos"
      name="Active Todos" 
      v-if="filter === 'active'"
    />
    <TodoList 
      :todos="completedTodos"
      :totalTodos="totalCompletedTodos" 
      name="Archived Todos" 
      v-if="filter === 'archived'"
    />
  </main>
</template>

<script setup lang="ts">
import TodoList from "@/components/TodoList.vue";
import TodoForm from "@/components/TodoForm.vue";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useTodoStore } from "@/stores/todoStore";

const filter = ref("active");

const todoStore = useTodoStore();

const { 
  activeTodos, 
  completedTodos, 
  loading, 
  totalActiveTodos, 
  totalCompletedTodos,
} = storeToRefs(todoStore)

todoStore.getTodos();

</script>

