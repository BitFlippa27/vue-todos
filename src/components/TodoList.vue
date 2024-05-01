<template>
  <div class="todo-list">
      <div v-for="todo in todos" :key="todo.id">
        <TodoItem :todo="todo" />
      </div>
    </div>
</template>

<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import { useTodoStore } from "@/stores/todoStore"

const todoStore = useTodoStore();
const todos = todoStore.todos;
</script>