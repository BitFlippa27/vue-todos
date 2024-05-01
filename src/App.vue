<template>
  <main> 
    <header>
      <img src="./assets/vuejs-icon.svg" alt="Vue Logo">
      <h1> Vue Todos </h1>
    </header> 
    <nav class="filter">
      <button @click="filter = 'active'">Active Todos</button>
      <button @click="filter = 'completed'">Completed Todos</button>
    </nav>
    <TodoList 
      :todos="activeTodos" 
      :totalTodos="totalActiveTodos"
      name="Active Todos" 
      v-if="filter === 'active'"
    />
    <TodoList 
      :todos="completedTodos"
      :totalTodos="totalCompletedTodos" 
      name="Completed Todos" 
      v-if="filter === 'completed'"
    />
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import TodoList from "@/components/TodoList.vue";
import { useTodoStore } from "@/stores/todoStore";

const filter = ref("active")
const todoStore = useTodoStore();

const activeTodos = todoStore.activeTodos;
const completedTodos = todoStore.completedTodos;
const totalActiveTodos = todoStore.totalActiveTodos;
const totalCompletedTodos = todoStore.totalCompletedTodos;

</script>

