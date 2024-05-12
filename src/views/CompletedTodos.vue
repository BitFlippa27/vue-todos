<template>
  <div class="flex flex-col items-center space-y-8 mt-12 px-4 sm:px-0 ">
    <TodoList
      :todos="completedTodos"
      :totalTodos="totalTodos.completed"
      name="Completed Todos"
      :filterFlag="'completed'"
    />
  </div>
</template>

<script setup lang="ts">
import TodoList from "@/components/todos/TodoList.vue";
import { useTodoStore } from "@/stores/todoStore";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();

const { completedTodos, totalTodos } = storeToRefs(todoStore);

</script>

