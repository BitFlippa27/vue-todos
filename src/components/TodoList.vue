<template>
  <div class="w-70 md:w-3/4 lg:w-2/3 mx-auto todo-list">
    <div class="space-y-4 flex justify-between items-center">
      <p class="text-xl text-gray-400">
        {{ name ?? "Todos" }} ({{ totalTodos ?? 0 }})
      </p>
      <div class="flex flex-col items-start">
        <p>Filter Todos</p>
        <select 
          class="bg-gray-800 p-1 mt-1 mb-8 text-gray-200 border-gray-600 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-300 focus:ring-opacity-75" 
          v-model="selectedOption"
        >
          <option value="default">Default</option>
          <option value="priority">By Priority</option>
          <option value="date">By Date</option>
        </select>
      </div>
    </div>
    <div  
      class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between"  
      v-if="filterFlag === 'active'" 
    >
      <AddTodoForm />
      <SearchBoxForm />
    </div>
    <div
      class="flex flex-col space-y-4 sm:space-y-0 sm:flex-row justify-between" 
      v-if="filterFlag === 'completed'"
    >
      <SearchBoxForm /> 
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
import AddTodoForm from "@/components/AddTodoForm.vue";
import SearchBoxForm from "@/components/SearchBoxForm.vue";
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
  switch (true) {
    case selectedOption.value === "priority":
      return todoStore.filteredByPriority(props.todos);
    case !!todoStore.searchString:
      return todoStore.searchedTodos(props.todos);
    case selectedOption.value === "date":
      return todoStore.filteredByDate(props.todos);
    default:
      return props.todos;
  }
});

</script>