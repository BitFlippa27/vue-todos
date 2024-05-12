<template>
  <main class="app-container"> 
    <Header />
    <router-view />
  </main>
</template>

<script setup lang="ts">
import Header from "@/components/sections/Header.vue";

import { onMounted } from 'vue';
import { useTodoStore } from "@/stores/todoStore";

const todoStore = useTodoStore();

onMounted(() => {
     todoStore.getTodos();
   });


</script>

