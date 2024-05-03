<template>
  <TodoList
    :todos="activeTodos"
    :totalTodos="totalActiveTodos"
    name="Active Todos"
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

const { activeTodos, totalActiveTodos } = storeToRefs(todoStore)

</script>

