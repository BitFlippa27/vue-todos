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
      <button @click="filter = 'completed'">Archived Todos</button>
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
import { ref, computed } from "vue";
import TodoList from "@/components/TodoList.vue";
import { useTodoStore } from "@/stores/todoStore";
import TodoForm from "@/components/TodoForm.vue";

const filter = ref("active")
const todoStore = useTodoStore();


const activeTodos = computed(() => todoStore.activeTodos);
const completedTodos = computed(() => todoStore.completedTodos);
const totalActiveTodos = computed(() => todoStore.totalActiveTodos);
const totalCompletedTodos = computed(() => todoStore.totalCompletedTodos);

</script>

