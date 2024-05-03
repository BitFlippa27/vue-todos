<template>
  <AddTodoForm />
  <SearchBox />
  <TodoList
    :todos="activeSearchedTodos"
    :totalTodos="totalActiveTodos"
    name="Active Todos"
   />
</template>

<script setup lang="ts">
import TodoList from "@/components/TodoList.vue";
import AddTodoForm from "@/components/AddTodoForm.vue";
import SearchBox from "@/components/SearchBox.vue";
import { computed } from "vue";
import { useTodoStore } from "@/stores/todoStore";
import { storeToRefs } from "pinia";

const props = defineProps({
  todos: Object,
  totalTodos: Number,
  name: String,
});


const todoStore = useTodoStore();

const { totalActiveTodos } = storeToRefs(todoStore)

const activeSearchedTodos = computed(() => todoStore.searchedTodos(false))
</script>

