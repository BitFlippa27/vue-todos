<template>
  <div class="todo-list">
    <div>
      <p>{{ name ?? "Todos" }} ({{ totalTodos ?? 0 }})</p>
      <select v-model="filterOption">
        <option value="default">Default</option>
        <option value="priority">By Priority</option>
        <option value="date">By Date</option>
      </select>
    </div>
    <transition name="fade" mode="out-in">
      <div v-if="!loading">
        <div v-for="todo in displayedTodos" :key="todo.id">
          <TodoItem :todo="todo" />
        </div>
      </div>
    </transition>  
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
});

const todoStore = useTodoStore();
//const filteredByDate = todoStore.filteredByDate;
const { loading } = storeToRefs(todoStore);

const filterOption = ref("default");

let displayedTodos = computed(() => {
  if (filterOption.value === "priority") {
      return todoStore.filteredByPriority(props.todos);
  } else if (todoStore.searchString) {
      return todoStore.searchedTodos(props.todos);
  } else if (filterOption.value === "date") {
      return todoStore.filteredByDate(props.todos);
  } 
  else {
    return props.todos; 
  }
});
</script>


