<template>
  <main class="app-container"> 
    <Header />
    <router-view />
  </main>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useTodoStore } from "@/stores/todoStore";
import Header from "@/components/Header.vue";

const todoStore = useTodoStore();

onMounted(() => {
     todoStore.getTodos();
   });


</script>

