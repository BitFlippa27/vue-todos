<template>
  <TodoList
    :todos="completedTodos"
    :totalTodos="totalCompletedTodos"
    name="Completed Todos"
   />
</template>

<script setup lang="ts">
import TodoList from "@/components/TodoList.vue";
import { useTodoStore } from "@/stores/todoStore";
import { storeToRefs } from "pinia";

const props = defineProps({
  todos: Object,
  totalTodos: Number,
  name: String,
});

const todoStore = useTodoStore();

const { completedTodos, totalCompletedTodos } = storeToRefs(todoStore)

</script>

