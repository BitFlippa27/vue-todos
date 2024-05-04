<template>
  <main class="bg-gray-900 text-gray-500 font-sans"> 
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

