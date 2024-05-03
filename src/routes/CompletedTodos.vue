<template>
  <SearchBox />
  <TodoList
    :todos="completedSearchedTodos"
    :totalTodos="totalCompletedTodos"
    name="Completed Todos"
   />
</template>

<script setup lang="ts">
import TodoList from "@/components/TodoList.vue";
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

const { totalCompletedTodos } = storeToRefs(todoStore)
const completedSearchedTodos = computed(() => todoStore.searchedTodos(true))

</script>

