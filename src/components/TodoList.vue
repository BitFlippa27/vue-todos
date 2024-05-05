<template>
  <div class="w-70 md:w-3/4 lg:w-2/3 mx-auto">
    <div class="space-y-4 flex justify-between">
      <p class="text-xl">{{ name ?? "Todos" }} ({{ totalTodos ?? 0 }})</p>
      <div>
        <p>Filter Todos</p>
        <select 
          class="bg-gray-800 p-1 mt-1 text-gray-200 border-gray-600 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-75" 
          v-model="selectedOption"
        >
          <option value="default">Default</option>
          <option value="priority">By Priority</option>
          <option value="date">By Date</option>
        </select>
      </div>
    </div>
    
    <div v-if="!loading">
    <transition-group name="list" tag="div">
      <div v-for="todo in displayedTodos" :key="todo.id">
        <TodoItem :todo="todo" />
      </div>
    </transition-group>
    </div>
    <div class="loading" v-if="loading">
      Loading Tasks...
    </div>
  </div>
</template>

<script setup lang="ts">
import TodoItem from "@/components/TodoItem.vue";
import { storeToRefs } from "pinia";
import { ref, computed } from "vue"; 
import { useTodoStore } from '@/stores/todoStore';


const props = defineProps({
  todos: Object,
  name: String,
  totalTodos: Number,
  filterFlag: String,
});

const todoStore = useTodoStore();
const { loading } = storeToRefs(todoStore);

const selectedOption = ref("default");

let displayedTodos = computed(() => {
  if (selectedOption.value === "priority") {
      return todoStore.filteredByPriority(props.todos);
  } else if (todoStore.searchString) {
      return todoStore.searchedTodos(props.todos);
  } else if (selectedOption.value === "date") {
      return todoStore.filteredByDate(props.todos);
  } 
  else {
    return props.todos; 
  }
});
</script>
<style scoped>

</style>