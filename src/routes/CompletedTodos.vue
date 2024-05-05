<template>
  <div class="flex flex-col items-center space-y-8 mt-12 px-4 sm:px-0 ">
    </div>
      <TodoList
        :todos="completedTodos"
        :totalTodos="totalCompletedTodos"
        name="Completed Todos"
        :filterFlag="'completed'"
      />

</template>

<script setup lang="ts">
import TodoList from "@/components/TodoList.vue";
import SearchBox from "@/components/SearchBox.vue";
import { useTodoStore } from "@/stores/todoStore";
import { storeToRefs } from "pinia";

const todoStore = useTodoStore();

const { completedTodos, totalCompletedTodos } = storeToRefs(todoStore);


</script>

