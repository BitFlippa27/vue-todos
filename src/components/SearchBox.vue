<template>
  <div class="add-todo-form"> 
    <form @submit.prevent="handleSearch"> 
    <input 
      @keyup.enter="handleSearch"
      @input="handleSearch"
      type="text"
      placeholder="Search Todo"
      v-model="searchField"
    >
   </form>
  </div>
  
</template>

<script setup lang="ts">
import { useTodoStore } from '@/stores/todoStore';
import { ref } from "vue";

const todoStore = useTodoStore();
const setSearchString = todoStore.setSearchString;

const searchField = ref("");

const handleSearch = () => {
  setSearchString(searchField.value);
}

</script>