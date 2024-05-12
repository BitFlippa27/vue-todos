<template>
  <div class="flex flex-col items-center space-y-8 mt-12 px-4 sm:px-0 ">
    <TodoList
      :todos="activeTodos"
      :totalTodos="totalActiveTodos"
      name="Active Todos"
      :filterFlag="'active'"
    />
  </div> 
</template>

<script setup lang="ts">
import TodoList from "@/components/todos/TodoList.vue";
import { useTodoStore } from "@/stores/todoStore";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();

const { activeTodos, totalActiveTodos } = storeToRefs(todoStore);

</script>

