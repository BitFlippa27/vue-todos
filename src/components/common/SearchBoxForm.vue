<template>
  <div> 
    <form @submit.prevent="handleSearch"> 
      <input 
        class="form"
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
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const todoStore = useTodoStore();
const setSearchString = todoStore.setSearchString;

const searchField = ref("");
const route = useRoute();

watch(route, () => {
  searchField.value = '';
  setSearchString(searchField.value);
}, { immediate: true });

const handleSearch = () => {
  setSearchString(searchField.value);
}


</script>