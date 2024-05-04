<template>
   <div class="flex flex-col items-center space-y-8 mt-12">
    <div class="flex justify-center items-center space-x-8">
      <AddTodoForm />
      <SearchBox /> 
    </div>
    <TodoList
      :todos="activeTodos"
      :totalTodos="totalActiveTodos"
      name="Active Todos"
    />
  </div>

    
    
</template>

<script setup lang="ts">
import TodoList from "@/components/TodoList.vue";
import AddTodoForm from "@/components/AddTodoForm.vue";
import SearchBox from "@/components/SearchBox.vue";
import { useTodoStore } from "@/stores/todoStore";
import { storeToRefs } from "pinia";

const props = defineProps({
  todos: Object,
  totalTodos: Number,
  name: String,
  filterOption: String
});


const todoStore = useTodoStore();

const { activeTodos, totalActiveTodos } = storeToRefs(todoStore);



</script>

