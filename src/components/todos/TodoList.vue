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
    <div class="mt-8" v-if="loading">
      Loading Tasks...
    </div>
  </div>
</template>

<script setup lang="ts">
/**
 * @module TodoList
 * @description 
 * The `TodoList.vue` component is responsible for managing and displaying a list of todo items.The component 
 * provides a dropdown menu that allows the user to sort the todo items by "Default", "Priority", or "Date".
 * Depending on the `filterFlag` value, the component conditionally renders the `AddTodoForm` and `SearchBoxForm` components. 
 * If `filterFlag` is "active", both forms are displayed. If `filterFlag` is "completed", only the `SearchBoxForm` is displayed.
 * The component uses a `v-for` directive to loop over the `displayedTodos` array and render each todo item using the `TodoItem` component.
 * The `displayedTodos` array is determined by the selected filter option. * 
 */
import TodoItem from "@/components/todos/TodoItem.vue";
import AddTodoForm from "@/components/common/AddTodoForm.vue";
import SearchBoxForm from "@/components/common/SearchBoxForm.vue";
import { storeToRefs } from "pinia";
import { ref, computed, type PropType } from "vue"; 
import { useTodoStore } from '@/stores/todoStore';
import type { Todo } from "@/types/todo";


const props = defineProps({
     todos: Array as PropType<Todo[]>,
     name: String,
     totalTodos: Number,
     filterFlag: String,
   });

const todoStore = useTodoStore();
const { loading } = storeToRefs(todoStore);

const selectedOption = ref("default");

/**
 * @description A computed property that returns the todos to display based on the selected filter option and the search string.
 * @returns {Array} The todos to display.
 */
let displayedTodos = computed(() => {
  switch (true) {
    case selectedOption.value === "priority":
      return todoStore.filteredByPriority(props.todos ?? []);
    case !!todoStore.searchString:
      return todoStore.searchedTodos(props.todos ?? []);
    case selectedOption.value === "date":
      return todoStore.filteredByDate(props.todos ?? []) ;
    default:
      return props.todos;
  }
});

</script>