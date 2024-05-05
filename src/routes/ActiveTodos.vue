<template>
   <div class="flex flex-col items-center space-y-8 mt-12 px-4 sm:px-0 ">
    <div class="flex flex-col sm:flex-row justify-start items-center sm:justify-start space-y-8 sm:space-y-0 sm:space-x-16">
      <AddTodoForm class="w-full sm:w-auto " />
      <SearchBox class="w-full sm:w-auto" /> 
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

const todoStore = useTodoStore();

const { activeTodos, totalActiveTodos } = storeToRefs(todoStore);



</script>

